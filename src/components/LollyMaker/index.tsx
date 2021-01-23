/** @jsx jsx */
import React, { FC } from "react"
import { jsx } from "theme-ui"
import LollyTemplate from "./LollyTemplate"
import LollyForm from "./Form"

import { useForm, SubmitHandler } from "react-hook-form"
import { FormData, DEFAULT_FORM_VALUES } from "./lolly.interface"
import { useMutation } from "@apollo/client"
import { CREATE_VIRTUAL_LOLLY } from "../../Services/virtualLolly"

type Props = {}

const LollyMaker: FC<Props> = () => {
  const { register, watch, handleSubmit, reset } = useForm<FormData>({
    defaultValues: DEFAULT_FORM_VALUES,
  })
  const watchFills = watch(["fillTop", "fillCenter", "fillBottom"])
  const [onCreateVLolly, { loading }] = useMutation(CREATE_VIRTUAL_LOLLY, {
    onCompleted(data) {
      reset()
      const generatedPath = data.createVirtualLolly
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

  return (
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
  )
}
export default LollyMaker
