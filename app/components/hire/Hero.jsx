import Link from "../primitives/Link";
import Image from "next/image";

import HeroBg from "@/public/hero-bg.png";

const Hero = () => {
  return (
    <div className="relative border-b border-neutral-400">
      <div className="px-4 sm:px-10 pb-16">
        <div className="mt-16 max-w-4xl mx-auto text-center relative z-10">
          <h1 className="md:text-6xl text-4xl font-extrabold mb-6 md:!leading-[75px] text-primary">
            Ready to Elevate Your Business?
          </h1>
          <p className="text-base">
            Contact us today to learn more about our services and how we can
            help you achieve your goals.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <button className="px-6 py-3 rounded-xl text-white bg-primary transition-all hover:bg-accent">
                Get started today
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={HeroBg}
        className="absolute inset-0 w-full h-full opacity-55 select-none"
        alt=""
        width="0"
        height="0"
      />
    </div>
  );
};

export default Hero;
