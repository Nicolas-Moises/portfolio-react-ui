import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '.'

import { useForm, FormProvider } from 'react-hook-form'

const createUserSchema = z.object({
  name: z
    .string()
    .nonempty({
      message: 'Informe seu nome',
    })
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(' ')
    }),
  email: z
    .string()
    .nonempty({
      message: 'Informe seu e-mail por favor',
    })
    .email({
      message: 'Formato de e-mail inválido',
    })
    .toLowerCase(),
  phone: z.string().nonempty({
    message: 'Informe seu telefone por favor',
  }),
  message: z.string(),
})

type CreateUserData = z.infer<typeof createUserSchema>

export function FormContact() {
  const createUserForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserSchema),
  })

  async function sendInfoData(data: CreateUserData) {
    console.log(data)
  }

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = createUserForm

  return (
    <aside className="flex items-center justify-start mt-20">
      <FormProvider {...createUserForm}>
        <form
          onSubmit={handleSubmit(sendInfoData)}
          className="flex flex-col gap-6 w-full"
        >
          <Form.Field>
            <Form.Label htmlFor="name">Nome</Form.Label>
            <Form.Input type="name" name="name" placeholder="Insira seu nome" />
            <Form.ErrorMessage field="name" />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="email">E-mail</Form.Label>
            <Form.Input
              type="email"
              name="email"
              placeholder="Insira seu e-mail"
            />
            <Form.ErrorMessage field="email" />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="phone">Telefone</Form.Label>
            <Form.Input
              type="phone"
              name="phone"
              placeholder="Insira seu telefone"
            />
            <Form.ErrorMessage field="phone" />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="message">
              Sobre
              <span className="text-xs italic text-gray-400">Opcional</span>
            </Form.Label>
            <textarea
              id="message"
              rows={5}
              maxLength={400}
              placeholder="Conte um pouco sobre seu projeto"
              className="flex-1 rounded border dark:bg-gray-900 dark:border-zinc-700 border-gray-200 shadow-sm px-5 py-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300
        placeholder:text-gray-400 text-sm"
              {...register('message')}
            />
          </Form.Field>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 px-10 py-4 bg-green-500 rounded mt-6 hover:bg-green-300 transition-all ease hover:shadow-2xl hover:shadow-green-400/10 font-bold cursor-pointer"
          >
            Enviar informações
          </button>
        </form>
      </FormProvider>
    </aside>
  )
}
