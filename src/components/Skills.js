import React from 'react';

const skills = [
  'Python', 'JavaScript', 'CSS', 'HTML', 'C#', 'Java', 'C++',
  'Django', 'React', 'Node.js', 'SQL', 'AWS'
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-700 hover:bg-blue-600 rounded-lg p-4 text-center transition-colors duration-300 transform hover:scale-105">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

