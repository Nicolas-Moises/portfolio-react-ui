import personOne from '../assets/person-1.png'
import personTwo from '../assets/person-2.png'
import logoUp from '../assets/logo-testimonial.png'

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
            “Suspendisse pellentesque justo eget vulputate aliquam. Phasellus
            vel ex sit amet risus iaculis vulputate nec a sapien. Sed tortor
            orci, mattis vel velit rutrum, varius dictum est.”
          </p>
          <div className="flex gap-2 items-center mt-8">
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
          <p className="border-b border-gray-700 text-gray-500 dark:text-gray-100 p-5">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sollicitudin quam a libero convallis, id tempus ex pretium.
            Pellentesque aliquam sed turpis non viverra. Mauris fringilla
            dignissim commodo. Etiam finibus gravida vehicula. Ut ultrices enim
            ante, a malesuada ex suscipit nec. Sed commodo iaculis nunc ac
            porta. Cras accumsan vitae massa in auctor. Mauris fringilla
            dignissim commodo. Etiam finibus gravida vehicula. Ut ultrices enim
            ante, a malesuada ex suscipit nec. Sed commodo iaculis nunc ac
            porta. Cras accumsan vitae massa in auctor. Mauris fringilla
            dignissim commodo. Etiam finibus gravida vehicula. Ut ultrices enim
            ante, a malesuada ex suscipit nec. Sed commodo iaculis nunc ac
            porta. Cras accumsan vitae massa in auctor. ”
          </p>
          <div className="flex items-center justify-between p-5">
            <div className="flex gap-2 items-center">
              <img src={personTwo} alt="" />

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
            “Suspendisse pellentesque justo eget vulputate aliquam. Phasellus
            vel ex sit amet risus iaculis vulputate nec a sapien. Sed tortor
            orci, mattis vel velit rutrum, varius dictum est.”
          </p>
          <div className="flex gap-2 items-center mt-8">
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

        <div className="dark:bg-gray-800 bg-white rounded-lg grid p-5 lg:row-end-5 lg:row-span-2 drop-shadow-xl">
          <p className="text-gray-500 dark:text-gray-100">
            “Suspendisse pellentesque justo eget vulputate aliquam. Phasellus
            vel ex sit amet risus iaculis vulputate nec a sapien. Sed tortor
            orci, mattis vel velit rutrum, varius dictum est.”
          </p>
          <div className="flex gap-2 items-center mt-8">
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

        <div className="dark:bg-gray-800 bg-white rounded-lg grid p-5 lg:row-end-6 lg:row-span-2 drop-shadow-xl">
          <p className="text-gray-500 dark:text-gray-100">
            “Suspendisse pellentesque justo eget vulputate aliquam. Phasellus
            vel ex sit amet risus iaculis vulputate nec a sapien. Sed tortor
            orci, mattis vel velit rutrum, varius dictum est.”
          </p>
          <div className="flex gap-2 items-center mt-8">
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

        <div className="dark:bg-gray-800 bg-white rounded-lg grid p-5 lg:row-end-6 lg:row-span-2 drop-shadow-xl">
          <p className="text-gray-500 dark:text-gray-100">
            “Suspendisse pellentesque justo eget vulputate aliquam. Phasellus
            vel ex sit amet risus iaculis vulputate nec a sapien. Sed tortor
            orci, mattis vel velit rutrum, varius dictum est.”
          </p>
          <div className="flex gap-2 items-center mt-8">
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

        <div className="dark:bg-gray-800 bg-white rounded-lg grid p-5 lg:row-end-5 lg:row-span-2 drop-shadow-xl">
          <p className="text-gray-500 dark:text-gray-100">
            “Suspendisse pellentesque justo eget vulputate aliquam. Phasellus
            vel ex sit amet risus iaculis vulputate nec a sapien. Sed tortor
            orci, mattis vel velit rutrum, varius dictum est.”
          </p>
          <div className="flex gap-2 items-center mt-8">
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
      </div>
    </section>
  )
}
