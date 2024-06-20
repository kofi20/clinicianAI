"use client";

import Image from "next/image";
import { FEATURES } from "@/constants";

const Features = () => {
  return (
    <section className="max-container padding-container overflow-hidden pb-20 lg:pb-32">
      <h1 className="bold-20 lg:bold-64 text-center">Features</h1>
      <ul className="mt-8 grid gap-6 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <FeatureItem
            key={feature.title}
            title={feature.title}
            icon={feature.icon}
            description={feature.info}
          />
        ))}
      </ul>
    </section>
  );
};

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string[];
};

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className="flex flex-col items-center bg-blue-50 rounded-lg shadow-lg p-6 lg:p-8">
      <div className="rounded-full bg-slate-600 p-4 lg:p-7 mb-4 flex items-center justify-center">
        <Image src={icon} alt={title} width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 capitalize mb-4">{title}</h2>
      <ul className="regular-16 mt-5 text-gray-60 lg:mt-30 lg:bg-none list-disc pl-5">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </li>
  );
};

export default Features;
