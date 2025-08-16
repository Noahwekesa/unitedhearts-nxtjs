import Image from "next/image";
import image1 from "@/assets/images/festus.jpeg";
import image2 from "@/assets/images/high-five.jpg";

const testimonials = [
  {
    name: "Bishop Joseph Onyach",
    company: "Church Name",
    role: "Bishop",
    quote:
      "When we give from our hearts, we reflect the love of Christ in action.",

    image: image1,
    imagePositionY: 0.2,
  },

  {
    name: "Sarah C.",
    company: "Neema Land Home",
    role: "Matron",
    quote: "United Hearts helped us feel seen and loved. May God bless them!",

    image: image2,
    imagePositionY: 0.1,
  },

  {
    name: "Paul Kwach",
    company: "Neema Land Home",
    role: "Matron",
    quote: "United Hearts helped us feel seen and loved. May God bless them!",

    image: image2,
    imagePositionY: 0.55,
  },
];

export default function Testimonials() {
  const testimonialsIndex = 0;
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-screen-xl">
        <h2 className="text-4xl md:text-7xl flex-col overflow-hidden">
          <span className="whitespace-nowrap">
            Inspiring Words from Lives We've Touched
          </span>
          <span className="whitespace-nowrap self-end text-yellow-700">
            Inspiring Words from Lives We've Touched
          </span>
        </h2>
        <div className="container">
          <div className="mt-20">
            {testimonials.map(({ name, company, role, quote, image, imagePositionY }, index) => index === testimonialsIndex && (
              <div key={name} className="grid md:grid-cols-5 md:gap-8 md:items-center">
                <div className="aspect-square md:aspect-[9/16] md:col-span-2">
                  <Image src={image} alt={name} className="size-full object-cover" style={{ objectPosition: `50% ${imagePositionY * 100}%` }} />
                </div>
                <blockquote className="md:col-span-3">
                  <div className="text-3xl md:text-5xl mt-8 md:mt-0">
                    <span>&ldquo;</span>
                    <span >{quote}</span>
                    <span>&rdquo;</span>
                  </div>
                  <cite className="mt-4 md:mt-8 not-italic block md:text-lg">
                    {name}, {role} at {company}
                  </cite>
                </blockquote>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-6">
            <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
