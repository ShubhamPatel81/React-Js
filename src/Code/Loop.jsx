import React from "react";

  function Loop() {
 const SkillsInfo = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "React JS" },
        { name: "Tailwind CSS" },
        { name: "Material UI" },
        { name: "Bootstrap" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Springboot, Microservices" },
        { name: "NodeJS" },
        { name: "ExpressJS" },
        { name: "MySQL" },
        { name: "MongoDB" },
        { name: "Redis" },
        { name: "PostgreSQL" },
      ],
    },
    {
      title: "Languages",
      skills: [ { name: "Python" }, { name: "JavaScript" }],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git/GitHub" },
        { name: "Linux" },
        { name: "Hibernate" },
        { name: "Postman" },
      ],
    },
    {
      title: "Cloud & Others",
      skills: [
        { name: "Cloud Computing" },
        { name: "AWS" },
        { name: "Computer Networks" },
      ],
    },
  ];
  return <div>
    <table border={1} style={{margin:"auto", marginTop:"20px"}}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Skills</th>
        </tr>
      </thead>
      <tbody>
        {SkillsInfo.map((category, index) => (
          <tr key={index}>
            <td>{category.title}</td>
            <td>
              <ul>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill.name}</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>  
    </table>
  </div>;
}

export default Loop;