// import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Healthcare Management System",
      description: `Developed a full-stack web application for managing patients, appointments, and hospital operations. 
        The system implements secure JWT authentication and role-based access control, ensuring a secure user experience. 
        It features a responsive UI designed with React.js and Material-UI, resulting in a 25% increase in user engagement. 
        The backend was deployed on AWS Elastic Beanstalk, and the frontend was deployed on Netlify.`,
      features: [
        "Patient and appointment management.",
        "Role-based access control with secure JWT authentication.",
        "Responsive UI design improving user engagement.",
      ],
      technologies: "Spring Boot, React.js, MySQL",
    },

    {
      name: "Parking System Web Application",
      description: `Built a dynamic web application aimed at automating parking lot operations, including slot reservations, 
      user management, and real-time parking space monitoring. The system allows users to search for available parking 
      slots, reserve spaces online, and view reservation histories. Administrators can manage slot availability, bookings, 
      and parking space details efficiently through a user-friendly interface.`,
      features: [
        "Intuitive dashboard for slot availability and status updates.",
        "Reservation management with email notifications.",
        "Secure user authentication and role-based access control.",
      ],
      technologies:
        "ASP.Net Core MVC, C#, Entity Framework Core, SQL Server, Bootstrap, jQuery",
    },
    {
      name: "Hostel Management System",
      description: `Designed and implemented a web-based application to simplify hostel management processes. This system enables 
      students to register for accommodation, browse available room options, and manage their personal accounts seamlessly. 
      Administrators can manage room assignments, track occupancy, and generate detailed reports. The application focuses on 
      delivering an easy-to-navigate interface and efficient backend functionality to enhance the user experience.`,
      features: [
        "Room browsing and filtering based on availability and type.",
        "Online student registration and payment tracking.",
        "Account management with personalized dashboards.",
      ],
      technologies: "HTML, CSS, JavaScript",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <h6>Key Features:</h6>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>Technologies Used:</strong> {project.technologies}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
