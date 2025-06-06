// src/components/ExperienceCard.jsx
import React from 'react';

const ExperienceCard = ({ skill }) => (
  <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-200">
    <h2 className="text-xl font-semibold text-indigo-600">{skill.title}</h2>
    <p className="text-gray-700 mt-1">{skill.description}</p>
    <div className="flex justify-between items-center mt-4">
      <span className="text-sm text-gray-500">{skill.type} — {skill.level}</span>
      <a
        href={skill.codeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-500 hover:underline"
      >
        Code
      </a>
    </div>
  </div>
);

export default ExperienceCard;