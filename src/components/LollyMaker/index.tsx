/** @jsx jsx */
import React, { FC, useState } from "react"
import { jsx, Message, Styled } from "theme-ui"
import LollyTemplate from "./LollyTemplate"
import LollyForm from "./Form"

import { useForm, SubmitHandler } from "react-hook-form"
import { FormData, DEFAULT_FORM_VALUES } from "./lolly.interface"
import { useMutation } from "@apollo/client"
import { CREATE_VIRTUAL_LOLLY } from "../../Services/virtualLolly"

type Props = {}

const LollyMaker: FC<Props> = () => {
  const [generatedLink, setGeneratedLink] = useState<null | string>(null)
  const { register, watch, handleSubmit, reset } = useForm<FormData>({
    defaultValues: DEFAULT_FORM_VALUES,
  })
  const watchFills = watch(["fillTop", "fillCenter", "fillBottom"])
  const [onCreateVLolly, { loading }] = useMutation(CREATE_VIRTUAL_LOLLY, {
    onCompleted(data) {
      reset()
      const generatedPath = data.createVirtualLolly
      setGeneratedLink(generatedPath)
    },
    onError(err) {},
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    onCreateVLolly({
      variables: {
        ...data,
      },
    })
  }

  const originPath =
    typeof window === "undefined"
      ? "https://virtual-lolly-shahzad.netlify.app"
      : window.origin
  return (
    <div>
      {generatedLink && (
        <Message sx={{ my: 18 }}>
          <Styled.h5 sx={{ m: 0, mb: "6px" }}>
            Here is the Link, it will be available within frew Minutes 🔥{" "}
          </Styled.h5>
          <Styled.a
            href={`${originPath}/freeze-lolly/${generatedLink}`}
            target="__blank"
          >
            {`${originPath}/freeze-lolly/${generatedLink}`}
          </Styled.a>
        </Message>
      )}
      <div
        className="lollyMaker"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <LollyTemplate {...watchFills} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <LollyForm ref={register({ required: true })} loading={loading} />
        </form>
      </div>
    </div>
  )
}
export default LollyMaker
