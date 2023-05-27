export function Stats() {
  return (
    <section className="w-full max-w-[1300px] mx-auto px-6 drop-shadow-2xl">
      <div className="w-full py-14 px-20 flex flex-col gap-10 md:gap-0 md:flex-row justify-around bg-white dark:bg-gray-900 rounded-xl">
        <div className="flex flex-col items-center gap-4">
          <span className="text-5xl font-black text-gray-500 dark:text-gray-100 ">
            +1
          </span>
          <p className="text-gray-400 dark:text-gray-300">Ano de experiência</p>
        </div>

        <div className="md:w-px md:h-24 w-full h-px dark:bg-gray-500 bg-gray-100" />

        <div className="flex flex-col items-center gap-4">
          <span className="text-5xl font-black text-gray-500 dark:text-gray-100 ">
            +30
          </span>
          <p className="text-gray-400 dark:text-gray-300">Interfaces criadas</p>
        </div>

        <div className="md:w-px md:h-24 w-full h-px dark:bg-gray-500 bg-gray-100" />

        <div className="flex flex-col items-center gap-4">
          <span className="text-5xl font-black text-gray-500 dark:text-gray-100 ">
            +2
          </span>
          <p className="text-gray-400 dark:text-gray-300">
            Clientes satisfeitos
          </p>
        </div>
      </div>
    </section>
  )
}
