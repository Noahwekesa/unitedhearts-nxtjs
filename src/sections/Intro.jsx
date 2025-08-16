import Image from "next/image";
import PapaAluda from "@/assets/images/29.jpeg";
import GiveFood from "@/assets/images/give.jpeg";

export default function Intro() {
  return (
    <section className="py-24 mt-12 md:mt-16">
      <div className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light sm:text-lg">
          <h2 className="mb-4 text-4xl md:text-7xl lg:text-8xl tracking-tight font-extrabold">
            What We Are
          </h2>
          <p className="mb-4">
            United Hearts is a community-driven charity group inspired by God's
            love, founded in 2021 with a mission to extend God’s love to the
            needy through organised outreach programs, spiritual guidance, and
            community empowerment initiatives.
          </p>
          <p>Together, we stand for compassion, unity, and action.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src={GiveFood}
            alt="office content 1"
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={GiveFood}
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
