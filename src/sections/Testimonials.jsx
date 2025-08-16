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
    imagePositionY: 0.2,
  },
];

export default function Testimonials() {
  return (
    <section>
      <h2>
        <span>Inspiring Words from Lives We've Touched</span>
        <span>Inspiring Words from Lives We've Touched</span>
      </h2>
      <div className="container">
        <div>
          {testimonials.map(({ name, company, role, quote, image }) => (
            <div key={name}>
              <div>
                <Image src={image} alt={name} />
              </div>
              <blockquote>
                <div>{quote}</div>
                <cite>
                  {name}, {role} at {company}
                </cite>
              </blockquote>
            </div>
          ))}
        </div>
        <div>
          <button>
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
          <button>
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
    </section>
  );
}
