import {
  Envelope,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from 'phosphor-react'

export function Footer() {
  return (
    <footer className="w-full max-w-[1300px] flex items-center mx-auto py-14 gap-20 border-t dark:border-gray-700 border-gray-300 relative px-6">
      <div className="flex flex-col gap-8 items-center sm:items-start w-full">
        <nav>
          <ul className="flex items-center gap-8">
            <li className="">
              <a
                href="https://www.linkedin.com/in/nicolas-moises-ba91ba1a3/"
                className="p-4 rounded bg-transparent hover:text-green-500 transition-all text-gray-500 dark:text-gray-100 ease dark:hover:text-green-500"
              >
                <LinkedinLogo size={24} weight="fill" />
              </a>
            </li>

            <li className="https://github.com/Nicolas-Moises">
              <a
                href="#"
                className="p-4 rounded bg-transparent hover:text-green-500 transition-all text-gray-500 dark:text-gray-100 ease dark:hover:text-green-500"
              >
                <GithubLogo size={24} weight="fill" />
              </a>
            </li>

            <li className="">
              <a
                href="https://www.instagram.com/nicclima/"
                className="p-4 rounded bg-transparent hover:text-green-500 transition-all text-gray-500 dark:text-gray-100 ease dark:hover:text-green-500"
              >
                <InstagramLogo size={24} weight="fill" />
              </a>
            </li>

            <li className="">
              <a
                href="mailto:nicolas.nicc21@gmail.com"
                className="p-4 rounded bg-transparent hover:text-green-500 transition-all text-gray-500 dark:text-gray-100 ease dark:hover:text-green-500"
              >
                <Envelope size={24} weight="fill" />
              </a>
            </li>

            <li className="">
              <a
                href="https://wa.me/11954264849"
                className="p-4 rounded bg-transparent hover:text-green-500 transition-all text-gray-500 dark:text-gray-100 ease dark:hover:text-green-500"
              >
                <WhatsappLogo size={24} weight="fill" />
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
          <span className="text-sm text-gray-400 text-center sm:text-left">
            © 2023 Desenvolvido por Nicolas Moises - Todos os direitos
            reservados.
          </span>
          <button
            disabled
            className="text-gray-200 hover:underline hover:text-gray-500 dark:hover:text-white text-sm"
          >
            Políticas de privacidade
          </button>
        </div>
      </div>
      <div className="bottom-14 left-[20%] absolute -z-[50] w-80 h-1/2 rounded-full blue__gradient" />
    </footer>
  )
}
