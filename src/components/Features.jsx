import React from "react";
import happy from "../assets/happy 1.svg";
import mobile1 from "../assets/Mobile1.png";
import mobile2 from "../assets/Mobile2.png";
import men from "../assets/Men.png";
const features = [
  {
    id: 1,
    smallText: "Lorem Ipsum is simply dummy text",
    title: "Lorem Ipsum is simply dummy text of the printing. ",
    description:
      "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. ",
    icon: happy,
    iconBg: "bg-[#08D3BB]",
    image: mobile1,
    reverse: false,
  },

  {
    id: 2,
    smallText: "Lorem Ipsum is simply dummy text",
    title: "Lorem Ipsum is simply dummy text of the printing. ",
    description:
      "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. ",
    icon: happy,
    iconBg: "bg-[#1090CB]",
    image: mobile2,
    reverse: true,
  },

  {
    id: 3,
    smallText: "Lorem Ipsum is simply dummy text",
    title: "Lorem Ipsum is simply dummy text of the printing. ",
    description:
      "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. ",
    icon: happy,
    iconBg: "bg-[#9208D3]",
    image: men,
    reverse: false,
  },
];

const FeaturesSec = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 ">
      {/*Heading */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-center mb-2">
          Lorem Ipsum is simply dummy text of the printing.{" "}
        </h2>{" "}
        <br />
        <p className="text-gray-500  mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br />
          Lorem Ipsum has been the industry's
        </p>
      </div>

      {/* features */}
      <div className="space-y-20">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`flex flex-col md:flex-row items-center md:justify-between ${
              feature.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/*Text Section */}
            <div className="md:w-1/2 text-center md:text-left space-y-4">
              {/* Icon+ Small text */}
              <div className="flex items-center space-x-2">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${feature.iconBg}`}
                >
                  <img src={feature.icon} alt="icon" className="w-6 h-6" />
                </div>
                <p className="text-sl font-semibold text-sm">
                  {feature.smallText}
                </p>
                <p className="text-gray-500 text-xs">{feature.smallText}</p>
              </div>

              {/* Title in "blue" */}
              <h3 className="text-xl font-semibold ">
                <span className="text-[#1090CB]">Lorem Ipsum </span>is simply
                dummy text of the printing.
              </h3>

              {/*Description */}
              <p className="text-gray-500">{feature.description}</p>
            </div>

            {/* Image Section */}
            <div className="md:w-1/4 mt-8 md:mt-0 flex justify-end">
              <img
                src={feature.image}
                alt="feature"
                className="max-w-full max-w-xs md:max-w-md rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSec;
