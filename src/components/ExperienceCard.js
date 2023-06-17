import { VscTriangleRight } from "react-icons/vsc";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-card-container">
      <div className="experience-card-company">{experience.company_name}</div>
      <div className="experience-card-description">
        <p className="experience-card-experience-type">
          {experience.experience_type}
        </p>
        <p className="experience-card-position">{experience.position}</p>
        <p className="experience-card-timeline">{experience.timeline}</p>
        <ul className="experience-card-work">
          {experience.work.map((work) => (
            <li key={work} className="experience-card-work-point">
              <VscTriangleRight
                style={{ color: "#63fedb", marginRight: "10px" }}
              />
              {work}
            </li>
          ))}
        </ul>
        {/* <ul className="experience-card-skills">
          <p>Skills: </p>
          {experience.skills.map((skill) => (
            <li key={skill}>
              <VscTriangleRight
                style={{ color: "#63fedb", marginRight: "10px" }}
              />
              {skill}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default ExperienceCard;
