// import React from "react";

const Education = () => {
  const education = {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Jai Narain College of Technology, Bhopal, Madhya Pradesh",
    duration: "2019 – 2023",
    cgpa: "8.45 / 10",
    highlights : [
      "Comprehensive coursework in core computer science subjects such as Data Structures, Algorithms, Software Development, and Database Management Systems.",
      "Gained practical experience through academic projects and hands-on labs, contributing to a strong foundation in programming and system design.",
      "Actively participated in technical events and workshops to enhance technical and problem-solving skills.",
    ],
  };

  return (
    <section id="education" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-4">Education</h2>
        <div className="card shadow-lg border-0">
          <div className="card-body">
            <h5 className="card-title text-primary">{education.degree}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {education.institution}
            </h6>
            <p className="text-muted">{education.duration}</p>
            <p className="font-weight-bold">
              <strong>CGPA:</strong> {education.cgpa}
            </p>
            <h6 className="mt-4">Highlights:</h6>
            <ul className="list-unstyled">
              {education.highlights.map((highlight, index) => (
                <li key={index} className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
