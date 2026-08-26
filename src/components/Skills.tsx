import React from "react";

const Skills = () => {
  const skills = [
    "Customer Relations Management",
    "Sales and Upselling Techniques",
    "Data Entry and Transaction Accuracy",
    "Project Management",
    "Problem-Solving",
    "Digital Communication",
    "Research and Survey",
    "Team Work",
  ];
  return (
    <div className="h-150 bg-[#1f1f1f] border px-1 pt-1 pb-5 rounded-2xl " id="Skills">
      <div className="p-5 text-center">
        <p className="text-white text-2xl">My key Skills</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-[90%] w-full text-center">
        {skills.map((skill, index) => (
          <div
            className="border w-full bg-white rounded-2xl p-5 lg:text-3xl flex items-center  text-center"
            key={index}
          >
            <p className="text-center">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
