import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      company_name: "DRITT Solutions Inc",
      experience_type: "Internship",
      position: "Full Stack Developer",
      timeline: "March 2023 - July 2023",
      work: [
        "Developed a web application utilizing Node.js, MongoDB, React, and Redux, showcasing expertise as a full stack developer.",
        "Collaborated with cross-functional teams to gather requirements and create intuitive user interfaces for caregivers, clients, and admins.",
        "Implemented RESTful APIs and robust authentication and authorization systems to ensure data privacy and security.",
        "Conducted thorough testing, code reviews, and stayed updated with emerging technologies to deliver high-quality code and innovative solutions.",
      ],
      skills: ["Web Standards", "MongoDB", "React.js", "Node.js", "Redux.js"],
    },
  ];
  return (
    <div className="experience">
      <p className="work_head">Where I've worked</p>
      {experiences.map((experience) => (
        <ExperienceCard key={experience.company_name} experience={experience} />
      ))}
    </div>
  );
};

export default Experience;
