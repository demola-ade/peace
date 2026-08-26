import React from "react";
import Image, { StaticImageData } from "next/image";

interface expdata {
  role: string;
  responsibilities: string[];
  image: StaticImageData;
}
const Experience = () => {
  const experiences = [
    {
      role: "Customer Service Representative",
      timeline: "October 2024 - Jan 2025",
      company: "Bitemore Limited",
      summary:
        "Delivered high-accuracy frontline service in a fast-paced retail environment while driving revenue and efficiency improvements.",
      responsibilities: [
        "Delivered exceptional frontline customer service",
        "Processed 50+ transactions with 90% accuracy in a high traffic retail environment",
        "Improved customer satisfaction through empathetic communication and crisis resolution",
        "Maintained detailed records of inventory and promotions",
        "Upsold products to boost store revenue by 5%",
        "Collaborated with team members to streamline checkout processes, reducing wait time by 15% during peak hours",
      ],
    },
    {
      role: "Freelance Sales Representative",
      company: "Personal Brand",
      summary:
        "Led an end-to-end custom jersey sales campaign, combining social media marketing with hands-on customer and order management.",
      responsibilities: [
        "Spearheaded a targeted sales campaign for custom-designed jerseys, achieving 40+ sales in 5 months",
        "Developed and executed social media marketing strategies, increasing brand visibility by 40%",
        "Managed end-to-end customer interactions, including order customization, payment processing, and post-sales support",
        "Coordinated with a 3-person team to ensure timely purchase and delivery, maintaining an 85% customer satisfaction rate",
      ],
    },
    {
      role: "Research Assistant",
      timeline: "2023 - 2024",
      company: "Microbiology Department, FUUNAB",
      summary:
        "Supported a doctoral research study on antimicrobial resistance by identifying and characterizing carbapenemase-producing organisms in swine farms.",
      responsibilities: [
        "Successfully contributed to a doctoral research study",
        "Played a crucial role in characterizing carbapenemase-producing Gram-negative organisms in swine farms",
        "Identified and characterized carbapenemase-producing Gram-negative organisms, contributing to the understanding of antimicrobial resistance",
        "Assisted with writing reports and presenting research findings to the research team and stakeholders",
      ],
    },
    {
      role: "Molecular Biologist (Intern)",
      timeline: "Aug 2023-Dec 2023",
      company: "Inqaba Biotec, West Africa, Ibadan",
      summary:
        "Gained hands-on molecular biology experience performing PCR, extraction, and electrophoresis techniques within a collaborative lab setting.",
      responsibilities: [
        "Gained hands-on experience in molecular biology techniques",
        "Successfully conducted PCR, DNA/RNA extraction, gel electrophoresis experiments, gel excision, and purification",
        "Enhanced ability to analyze and interpret molecular biology data",
        "Demonstrated teamwork and collaboration by effectively working with the research team to achieve project goals",
        "Maintained a clean and organized laboratory environment, adhering to safety protocols and procedures",
      ],
    },
    {
      role: "Research Assistant (Intern)",
      timeline: "Nov 2018 - Feb 2019",
      company: "National Centre for Genetics Resources and Biotechnology",
      summary:
        "Supported genetic research through laboratory testing and data analysis, building foundational experimental design and organizational skills.",
      responsibilities: [
        "Contributed to the advancement of genetic research, gaining valuable experience in research project support",
        "Conducted laboratory tests and analyzed data, enhancing skills in experimental design, data collection, and data interpretation",
        "Maintained laboratory equipment and supplies, demonstrating attention to detail and organizational skills",
      ],
    },
  ];
  return (
    <div className="flex items-center justify-center" id="Journey">
      <div className=" px-5 pt-1 pb-5 rounded-2xl bg-transparent my-10 lg:w-[90%] xl:w-[80%]">
        <div className="p-5">
          <p className="text-[#1f1f1f] text-3xl text-center">My Experience</p>
        </div>
        <div className="flex flex-col  gap-14 w-full">
          {experiences.map((experience, index: number) => (
            <div
              className={` w-full md:p-5 flex flex-col lg:flex-row items-start gap-14 border-b border-[#141414] py-10`}
              key={index}
            >
              <div className="w-full leading-loose">
                <h3 className="font-bold text-3xl md:text-5xl my-2">{experience.role}</h3>
                <p className="font-bold">{experience.timeline}</p>
                <p className="text-[18px]">{experience.summary}</p>
              </div>

              <div className="w-full px-5">
                <ul className="list-disc text-[18px] leading-loose">
                  {experience.responsibilities.map((i, index) => (
                    <li key={index}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
