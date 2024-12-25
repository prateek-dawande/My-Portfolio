// import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "React JS", "Bootstrap"],
    },
    {
      category: "Java Full Stack",
      skills: [
        "OOP",
        "Collections",
        "Exception Handling",
        "JDBC",
        "Hibernate",
        "Spring",
      ],
    },
    {
      category: ".NET Development",
      skills: ["ASP.NET", "ASP.NET MVC", "Entity Framework"],
    },
    {
      category: "Databases",
      skills: ["SQL", "MySQL", "SQL Server"],
    },
    {
      category: "Test Automation",
      skills: [
        "Test Case Design",
        "Manual Testing",
        "Test Data Creation",
        "Quality Assurance",
        "Bug Tracking",
      ],
    },
    {
      category: "Methodologies",
      skills: ["Agile Scrum", "SDLC"],
    },
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Skills</h2>
        <div className="row">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4 d-flex">
              <div className="card shadow-sm border-0 flex-fill">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-primary">
                    {category.category}
                  </h5>
                  <ul className="list-unstyled flex-grow-1">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
