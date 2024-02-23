
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form, FormSection, FormSubmit, Input } from "./components/ReuseableForm"
import Container from "./components/ui/Container"
import { z } from 'zod';
import ButtonNew from "./components/ButtonNew/ButtonNew";
import Box from "./components/Animation/Box";
import Loading from "./components/Loading/Loading";
import ClipPath from "./components/ClipPath/ClipPath";
import JavaScriptAnimation from "./components/JavaScriptAnimation/JavaScriptAnimation";


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
    </>
  )
}

export default App
