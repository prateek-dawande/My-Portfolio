
const ProfessionalExperience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Clinisys India Pvt. Ltd.",
      duration: "January 2024 – June 2024",
      location: "Bengaluru, India",
      description: [
        "Contributed as a Full Stack Developer Intern, gaining hands-on experience in building, testing, and optimizing web applications.",
        "Worked extensively with C#, ASP.Net, and Entity Framework, focusing on developing scalable and maintainable web solutions.",
        "Designed and executed comprehensive test case plans, ensuring adherence to software quality standards through rigorous manual testing procedures.",
        "Collaborated with senior developers to identify and resolve bugs, optimize application performance, and implement user-requested features.",
        "Developed an understanding of the complete software development lifecycle (SDLC), including requirements gathering, development, testing, and deployment.",
        "Played an active role in peer reviews and brainstorming sessions, fostering a collaborative and innovative work environment.",
      ],
    },
    {
      title: "Java Full Stack Development Training",
      company: "JSpider, Bengaluru",
      duration: "June 2023 – December 2023",
      description: [
        "Successfully completed an intensive, hands-on training program in Java Full Stack Development, covering both frontend and backend technologies.",
        "Acquired proficiency in Java, including core and advanced concepts like JDBC, Hibernate, and Spring Framework.",
        "Gained expertise in frontend development with HTML, CSS, JavaScript, and React.js, enabling the creation of responsive and user-friendly interfaces.",
        "Mastered database management concepts and practical skills in SQL, including writing optimized queries for real-world applications.",
        "Developed a strong understanding of full-stack architecture, integrating frontend and backend technologies for seamless application development.",
        "Built and deployed various projects during the training, reinforcing practical knowledge and industry-standard best practices.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Professional Experience</h2>
        <div className="row">
          {experiences.map((experience, index) => (
            <div key={index} className="col-12 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    {experience.title}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {experience.company}
                  </h6>
                  {experience.location && (
                    <p className="text-muted">{experience.location}</p>
                  )}
                  <p className="text-muted">{experience.duration}</p>
                  <ul>
                    {experience.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
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

export default ProfessionalExperience;
