import logoUp from '../assets/logo-testimonial.png'
import {
  personThree,
  personOne,
  personTwo,
  personFour,
  personFive,
  personSix,
  personSeven,
} from '../assets'

export function Testimonials() {
  return (
    <section
      id="projects"
      className="w-full max-w-[1300px] mx-auto px-6 mb-44 relative bg-grid bg-no-repeat bg-cover"
    >
      <div className="w-full flex flex-col">
        <span className="text-sm text-blue-500 text-center mb-4 font-semibold">
          Feedbacks
        </span>
        <h1 className="font-bold text-4xl mb-8 dark:text-white text-gray-600 text-center">
          Alguns depoimentos recebidos
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5  mt-5">
        <div className="dark:bg-gray-800 bg-white p-5 rounded-lg lg:row-end-3 lg:row-span-2 drop-shadow-xl">
          <p className="text-gray-500 dark:text-gray-100">
            “Vi que o Nicolas é proativo e está sempre buscando maneiras de
            melhorar o resultado final. Trabalhar com ele foi uma experiência
            muito positiva e estamos ansiosos para colaborar novamente no
            futuro.”
          </p>
          <div className="flex gap-2 items-center ">
            <img src={personOne} alt="" />

            <div>
              <h4 className="font-bold dark:text-white text-gray-600">
                Lídia Morais
              </h4>
              <p className="text-sm dark:text-gray-300 text-gray-400">
                Analista CS e mídias jr.
              </p>
            </div>
          </div>
        </div>

        <div className="dark:bg-gray-800 bg-white rounded-lg grid lg:row-end-4 sm:row-span-3 sm:row-start-2 lg:row-start-1 sm:col-span-2 drop-shadow-xl">
          <p className="border-b dark:border-gray-700 border-gray-300 text-gray-500 dark:text-gray-100 p-5">
            “Recomendo entusiasmado o Nicolas como um programador frontend
            altamente qualificado para oportunidades na área de Tecnologia da
            Informação. Tive o prazer de trabalhar com ele em um projeto recente
            como freelancer, e fiquei impressionado com sua autonomia e
            habilidades técnicas. O Nicolas possui um amplo conhecimento do
            ecossistema JavaScript, com uma especialização em ReactJS. Durante
            nosso projeto, ele demonstrou uma notável capacidade de aprendizado
            rápido, entregando resultados de alta qualidade dentro dos prazos
            estabelecidos. Sua dedicação e paixão pela programação são evidentes
            em seu trabalho diário. Além de suas habilidades técnicas, o Nicolas
            é uma pessoa extremamente confiável e fácil de trabalhar. Sua
            atitude pró-ativa e comprometimento tornaram nossa colaboração
            fluída e eficiente. Mesmo com apenas alguns meses de experiência na
            indústria de tecnologia, ele já possui todas as qualidades de um
            programador iniciante promissor, que merece uma oportunidade.
            Recomendo fortemente o Nicolas para qualquer empresa que esteja em
            busca de um programador frontend talentoso e dedicado. Tenho certeza
            de que ele continuará a se destacar em sua carreira e contribuirá
            para o sucesso de qualquer projeto em que esteja envolvido.”
          </p>
          <div className="flex items-center justify-between p-5">
            <div className="flex gap-2 items-center">
              <img
                src={personTwo}
                className="w-12 h-12 object-cover rounded-full"
                alt=""
              />

              <div>
                <h4 className="font-bold dark:text-white text-gray-600">
                  Pedro Medeiros
                </h4>
                <p className="text-sm dark:text-gray-300 text-gray-400">
                  Desenvolvedor back-end pl.
                </p>
              </div>
            </div>

            <img src={logoUp} className="w-24 object-cover" alt="" />
          </div>
        </div>

        <div className="dark:bg-gray-800 bg-white rounded-lg grid p-5 lg:row-end-3 lg:row-span-2 drop-shadow-xl">
          <p className="text-gray-500 dark:text-gray-100">
            “Nos ajudou a resolver problemas complexos de forma rápida e
            eficiente, e sempre manteve um alto nível de profissionalismo,ainda
            que em início de carreira. Estamos extremamente satisfeitos com o
            seu trabalho.
          </p>
          <div className="flex gap-2 items-center ">
            <img src={personThree} alt="" />

            <div>
              <h4 className="font-bold dark:text-white text-gray-600">
                Adriano Minerato
              </h4>
              <p className="text-sm dark:text-gray-300 text-gray-400">
                Analista SDR jr.
              </p>
            </div>
          </div>
        </div>

        <div className="dark:bg-gray-800 bg-white rounded-lg grid p-5 lg:row-end-5 lg:row-span-2 drop-shadow-xl">
          <p className="text-gray-500 dark:text-gray-100">
            “É um profissional dedicado e comprometido com a qualidade do seu
            trabalho. Estamos muito satisfeitos com o serviço prestado por ele e
            o recomendamos sem hesitação”
          </p>
          <div className="flex gap-2 items-center mt-8">
            <img src={personFour} alt="" />

            <div>
              <h4 className="font-bold dark:text-white text-gray-600">
                Alice Mendes
              </h4>
              <p className="text-sm dark:text-gray-300 text-gray-400">
                Analista Rh pl.
              </p>
            </div>
          </div>
        </div>

        <div className="dark:bg-gray-800 bg-white rounded-lg grid p-5 lg:row-end-6 lg:row-span-2 drop-shadow-xl">
          <p className="text-gray-500 dark:text-gray-100">
            “Nicolas foi essencial para o sucesso do nosso projeto. Ele se
            destacou pela sua habilidade em lidar com prazos apertados e sempre
            com alto grau de transparência sobre dificuldades ou adversidades.”
          </p>
          <div className="flex gap-2 items-center mt-8">
            <img src={personFive} alt="" />

            <div>
              <h4 className="font-bold dark:text-white text-gray-600">
                Carlos
              </h4>
              <p className="text-sm dark:text-gray-300 text-gray-400">
                Desenvolvedor Flutter pl.
              </p>
            </div>
          </div>
        </div>

        <div className="dark:bg-gray-800 bg-white rounded-lg grid p-5 lg:row-end-6 lg:row-span-2 drop-shadow-xl">
          <p className="text-gray-500 dark:text-gray-100">
            “O software construído por Nicolas foi uma surpresa muito positiva
            para nós. Mesmo sem experiência prévia na área de desenvolvimento de
            software, ele conseguiu entregar um produto de alta qualidade que
            atendeu perfeitamente às nossas necessidades.”
          </p>
          <div className="flex gap-2 items-center mt-8">
            <img
              src={personSix}
              className="w-12 h-12 object-cover rounded-full"
              alt=""
            />

            <div>
              <h4 className="font-bold dark:text-white text-gray-600">
                Fernando Henrique
              </h4>
              <p className="text-sm dark:text-gray-300 text-gray-400">
                Desenvolvedor FullStack pl.
              </p>
            </div>
          </div>
        </div>

        <div className="dark:bg-gray-800 bg-white rounded-lg grid p-5 lg:row-end-5 lg:row-span-2 drop-shadow-xl">
          <p className="text-gray-500 dark:text-gray-100">
            “Trabalhar com Nicolas foi uma experiência muito agradável. Ele se
            mostrou muito paciente e proativo. O site foi entregue dentro do
            prazo estipulado e com uma qualidade excepcional. Recomendamos seus
            serviços a todos que precisem de um desenvolvedor Front End
            competente e dedicado.”
          </p>
          <div className="flex gap-2 items-center mt-8">
            <img
              src={personSeven}
              className="w-12 h-12 object-cover rounded-full"
              alt=""
            />

            <div>
              <h4 className="font-bold dark:text-white text-gray-600">
                Lucas Luciano
              </h4>
              <p className="text-sm dark:text-gray-300 text-gray-400">
                Analista CX jr.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
