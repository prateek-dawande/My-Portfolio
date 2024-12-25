// import React from "react";

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Profile Image */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src="./public\assests\img1.jpg"
              // src="src\assests\img1.jpg"
              alt="Prateek Dawande"
              className="img-fluid rounded-circle shadow"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />
          </div>
          {/* About Content */}
          <div className="col-md-7">
            <h2 className="text-primary mb-3">About Me</h2>
            <p className="lead">
              As a highly motivated Application Developer, I bring a fresh
              perspective and a strong desire to apply my skills in designing,
              building, and configuring high-quality applications.
            </p>
            <p>
              My passion lies in collaborating with cross-functional teams to
              deliver innovative solutions that meet business needs. With a keen
              eye for detail and a commitment to best practices, I am eager to
              contribute to the development of cutting-edge applications and
              enhance my technical expertise in a dynamic and supportive
              environment.
            </p>
            <p>
              Through continuous learning and hands-on experience, I aim to make
              a meaningful impact in the software development field and grow as
              a professional.
            </p>
            <a href="#contact" className="btn btn-primary mt-3 shadow-sm">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
