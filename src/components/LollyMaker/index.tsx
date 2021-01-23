/** @jsx jsx */
import React, { FC } from "react"
import { jsx } from "theme-ui"
import LollyTemplate from "./LollyTemplate"
import LollyForm from "./Form"

import { useForm, SubmitHandler } from "react-hook-form"
import { FormData, DEFAULT_FORM_VALUES } from "./lolly.interface"

type Props = {}

const LollyMaker: FC<Props> = () => {
  const { register, watch, handleSubmit, errors } = useForm<FormData>({
    defaultValues: DEFAULT_FORM_VALUES,
  })
  const watchFills = watch(["fillTop", "fillCenter", "fillBottom"])
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

  return (
    <div
      className="lollyMaker"
      sx={{
        display: "flex",
      }}
    >
      <LollyTemplate {...watchFills} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <LollyForm ref={register({ required: true })} />
      </form>
    </div>
  )
}
export default LollyMaker
