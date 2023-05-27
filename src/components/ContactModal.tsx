import * as Dialog from '@radix-ui/react-dialog'

import { X } from 'phosphor-react'
import { FormContact } from './Form/FormContact'

export function ContactModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/30 z-[9999]" />
      <Dialog.Content className="fixed top-0 right-0 h-screen bg-white dark:bg-gray-800 px-6 py-14 z-[99999] overflow-y-auto scale-in">
        <Dialog.Title className="text-xl font-bold dark:text-gray-100 text-gray-600 mb-4">
          Preencha os campos abaixo
        </Dialog.Title>
        <Dialog.Description className="dark:text-gray-200 text-gray-400">
          Preencha o formulário e entrarei em contato o mais rápido possível
          para batermos um papo
        </Dialog.Description>
        <FormContact />

        <Dialog.Close
          className="dark:text-gray-200 text-gray-400
         absolute top-3 right-3"
        >
          <X size={16} />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
