import React from "react";
import Hero from "../components/hire/Hero";
import Image from "next/image";
import servicesData from "../data/servicesData";

const Services = ({ data }) => {
  return (
    <div className="px-4 sm:px-10 py-16">
      <div className="mx-auto space-y-6">
        <div className="text-center mx-auto pb-6">
          <h2 className="md:text-4xl text-3xl font-extrabold text-primary">
            Services
          </h2>
          <p className="text-xl">
            Elevate your business with comprehensive range of digital solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3">
          {servicesData.map((data) => {
            return (
              <div
                className="col-span-1 text-center space-y-3"
                key={data.title}
              >
                {data.image}
                <h1 className="text-2xl font-bold tracking-tight">
                  {data.title}
                </h1>
                <p>{data.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div>
      <Hero />
      <Services data={servicesData} />
    </div>
  );
};

export default page;
