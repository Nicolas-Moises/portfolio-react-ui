import * as Dialog from '@radix-ui/react-dialog'
import { ContactModal } from './ContactModal'
import { ChatTeardropDots } from 'phosphor-react'

export function Cta() {
  return (
    <section
      id="cta"
      className="flex flex-col items-center bg-black-gradient-2 rounded-xl w-full max-w-[1300px] mx-auto p-14 mb-44"
    >
      <div className="flex-1 flex flex-col">
        <h2 className="font-bold text-center text-6xl dark:text-white w-full">
          Entre em contato comigo <br />
          <span className="text-blue-300">agora mesmo!</span>
        </h2>
        <p className="mt-5 text-center">
          Vamos desenvolver algo magnífico pra sua empresa!
        </p>
      </div>

      <div className="flex justify-center items-center mt-5">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button
              className="flex items-center gap-2 px-10 py-4 bg-green-500 rounded mt-6 hover:bg-transparent border-2 border-green-500 transition-all ease 
            hover:shadow-2xl hover:shadow-green-400/10 font-bold hover:text-green-500"
            >
              <ChatTeardropDots size={24} weight="bold" />
              Entrar em contato
            </button>
          </Dialog.Trigger>
          <ContactModal />
        </Dialog.Root>
      </div>
    </section>
  )
}
