import React from "react";

const Certs = () => {
  const certifications = [
    {
      title: "Introductions to Digital skills",
      institute: "HP Foundation",
      date: "June 2025",
    },
    {
      title: "Agile Business Management",
      institute: "HP Foundation",
      date: "February 2025",
    },
    {
      title: "AI For Beginners",
      institute: "HP Foundation",
      date: "January 2025",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center my-24 gap-10" id="Certification">
      <h1 className="text-3xl">Certifications</h1>
      <div className="flex flex-col lg:flex-row items-center text-center gap-5 lg:gap-10">
        {certifications.map((item, index) => (
          <div className="border border-[#1f1f1f]/25 rounded p-10 " key={index}>
            <h1 className="text-2xl font-bold lg:w-50 text-[#1f1f1f]">{item.title}</h1>
            <p>{item.institute}</p>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certs;
