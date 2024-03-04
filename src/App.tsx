
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form, FormSection, FormSubmit, Input } from "./components/ReuseableForm"
import Container from "./components/ui/Container"
import { z } from 'zod';
import ButtonNew from "./components/ButtonNew/ButtonNew";
import Box from "./components/Animation/Box";
import Loading from "./components/Loading/Loading";
import ClipPath from "./components/ClipPath/ClipPath";
import JavaScriptAnimation from "./components/JavaScriptAnimation/JavaScriptAnimation";
import FramerMotion from "./components/FramerMotion/FramerMotion";
import Lecture3 from "./components/lecture3/lecture3";
import Lecture4 from "./components/lecture4/Lecture4";
import FramerMotionHook from "./components/FramerMotionHook/FramerMotionHook";
import UseCyclehook from "./components/FramerMotionHooks/UseCyclehook";
import UseRefFramerMotion from "./components/FramerMotionHooks/UseRefFramerMotion";
import UseTransformFramerMotion from "./components/FramerMotionHooks/UseTransformFramerMotion";
import UseMotionValue from "./components/FramerMotionHooks/UseMotionValue";
import UseScroll from "./components/FramerMotionHooks/UseScroll";


function App() {
  
  const { handleSubmit, register, formState: { errors } } = useForm<TTest>()

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  }
  const TestSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  })

  type TTest = z.infer<typeof TestSchema>
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}  >
          <FormSection>

          <div className="w-full max-w-md">
                    <label className="block" htmlFor="name">Name</label>
                    <input type="text" id="name" {...register('name')}>
                    </input>
                    {errors.name && <span className="text-xs font-semibold text-red-500">{errors.name.message}</span>}
                </div>
          </FormSection>
          <Input type='email' register={register('email')} errors={errors} label="Email"></Input>
          <Input type='checkbox' register={register('email')} errors={errors} label="Email"></Input>
          <Input type='redio' register={register('email')} errors={errors} label="Email"></Input>
          <FormSubmit/>
       </Form>
      </Container> 
      <ButtonNew></ButtonNew>
      <Box></Box>
      <Loading></Loading>
      <ClipPath></ClipPath>
      <JavaScriptAnimation></JavaScriptAnimation>
      <FramerMotion></FramerMotion>
      <Lecture3></Lecture3>
      <Lecture4></Lecture4>
      <FramerMotionHook></FramerMotionHook>
      <UseCyclehook></UseCyclehook>
      <UseRefFramerMotion></UseRefFramerMotion>
      <UseTransformFramerMotion></UseTransformFramerMotion>
      <UseMotionValue></UseMotionValue>
      <UseScroll></UseScroll>
    </>
  )
}

export default App
