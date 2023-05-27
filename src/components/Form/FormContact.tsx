import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '.'

import emailjs from '@emailjs/browser'

import { useForm, FormProvider } from 'react-hook-form'
import { FormEvent, useState } from 'react'
import { ArrowRight, CircleNotch } from 'phosphor-react'

import success from '../../assets/success.gif'

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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [emailSendSuccess, SetEmailSendSuccess] = useState(false)

  const createUserForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserSchema),
  })

  function sendEmail(e: FormEvent) {
    e.preventDefault()
    setIsSending(true)

    const templeteParams = {
      name,
      email,
      phone,
      message,
    }

    emailjs
      .send(
        'service_rqxlnqa',
        'template_9y0z976',
        templeteParams,
        'i4s2nmWco3jx0aOlI',
      )
      .then(
        (response) => {
          const status = response.status
          console.log(status)
          SetEmailSendSuccess(true)
          setIsSending(false)
        },
        (err) => {
          console.log(err)
        },
      )
      .finally(() => setIsSending(false))
  }

  return (
    <aside className="flex items-center justify-start mt-20">
      {!emailSendSuccess ? (
        <FormProvider {...createUserForm}>
          <form onSubmit={sendEmail} className="flex flex-col gap-6 w-full">
            <Form.Field>
              <Form.Label htmlFor="name">Nome</Form.Label>
              <Form.Input
                type="name"
                name="name"
                placeholder="Insira seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.ErrorMessage field="name" />
            </Form.Field>

            <Form.Field>
              <Form.Label htmlFor="email">E-mail</Form.Label>
              <Form.Input
                type="email"
                name="email"
                placeholder="Insira seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.ErrorMessage field="email" />
            </Form.Field>

            <Form.Field>
              <Form.Label htmlFor="phone">Telefone</Form.Label>
              <Form.Input
                type="phone"
                name="phone"
                placeholder="Insira seu telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Field>
            <button
              type="submit"
              disabled={isSending}
              className="flex items-center justify-center gap-2 px-10 py-4 bg-green-500 rounded mt-6 hover:bg-green-300
             transition-all ease hover:shadow-2xl hover:shadow-green-400/10 font-bold cursor-pointer group"
            >
              Enviar informações
              <span className=" h-5 w-5 text-white" aria-hidden="true">
                {isSending ? (
                  <CircleNotch size={20} />
                ) : (
                  <ArrowRight
                    size={20}
                    weight="bold"
                    className="group-hover:translate-x-1 transition-transform"
                  />
                )}
              </span>
            </button>
          </form>
        </FormProvider>
      ) : (
        <div className="flex flex-col items-center justify-center h-full w-full">
          <strong className="text-lg font-bold text-gray-100 mb-14">
            Mensagem enviada com sucesso! Basta aguardar meu contato!😁
          </strong>
          <div className="relative w-20 h-20">
            <img
              src={success}
              alt="Animation-success"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </aside>
  )
}
