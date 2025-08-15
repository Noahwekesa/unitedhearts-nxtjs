import Image from "next/image";
import heroImage from "@/assets/images/hero-image.jpeg";

export default function Hero() {
  return (
    <section>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto md:h-screen items-stretch lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-5">
          <h1 className="max-w-2xl mt-40 mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-6xl lg:text-7xl xl:text-6xl">
            Change Lives, One Heart at a Time.
          </h1>
          <p className="max-w-2xl mb-6 font-light text-stone-700 lg:mb-8 md:text-lg lg:text-xl">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <a
            href="#"
            className="inline-flex text-white items-center justify-center px-5 py-3 mr-3 text-base font-bold text-center uppercase rounded-lg bg-green-700 hover:bg-green-900 focus:ring-4 focus:ring-primary-300"
          >
            Get Involved
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-bold uppercase text-center text-dark border rounded-lg hover:bg-stone-900 hover:text-white focus:ring-4 focus:ring-gray-100"
          >
            Speak to Sales
          </a>
        </div>
        <div className="md:col-span-7">
          <div className="mt-20 md:mt-0 md:h-full">
            <Image
              src={heroImage}
              className="size-full object-cover"
              alt="united hearts group photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
