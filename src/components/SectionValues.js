import React from 'react';
import student from '../images/pexels-shvetsa-3986997.jpg';
import teacher from '../images/pexels-mikhail-nilov-8653658.jpg';
import parent from '../images/pexels-vidalbalielojrfotografia-1682497.jpg';
const SectionValues = () => {
  const values = [
    {
      mainHeading: "For Students",
      subHeading: "Your Ultimate Academic Ally",
      backgroundImage: student,
      children: [
        { title: "Focused Learning", description: "Focused tools that help students study effectively and manage their time." },
        { title: "Interactive Note-Taking", description: "Take interactive notes to improve retention and understanding." },
        { title: "A Well-Organized Approach", description: "Access a systematic and personalized learning experience." },
      ],
    },
    {
      mainHeading: "For Teachers",
      subHeading: "Your Ultimate Teaching Toolkit",
      backgroundImage: teacher,
      children: [
        { title: "Comprehensive Class Management", description: "Tools to manage classrooms with ease and efficiency." },
        { title: "Efficient Evaluation", description: "Streamlined evaluation methods to save time." },
        { title: "Seamless Note Sharing", description: "Easy note-sharing to boost teacher-student collaboration." },
      ],
    },
    {
      mainHeading: "For Institutions",
      subHeading: "A Smarter Solution for Institutions",
      backgroundImage: parent,
      children: [
        { title: "Streamlined Administration", description: "Manage administrative tasks more effectively." },
        { title: "Cost-Effective Solutions", description: "Affordable tools tailored for institutions." },
        { title: "Enhanced Learning Outcomes", description: "Improved learning outcomes for all students." },
      ],
    },
  ];

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Our Values</h2>
      {values.map((value, index) => (
        <div
          key={index}
          className="text-white mb-5 p-4"
          style={{
            backgroundImage: `url(${value.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
          }}
        >
          <div className="text-center mb-4">
            <h3>{value.subHeading}</h3>
            <h4 className="fw-bold">{value.mainHeading}</h4>
          </div>
          <div className="row">
            {value.children.map((child, idx) => (
              <div key={idx} className="col-md-4 mb-3">
                <div className="p-3 bg-dark bg-opacity-75 rounded">
                  <h5 className="fw-bold">{child.title}</h5>
                  <p>{child.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SectionValues;
