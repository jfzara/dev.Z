 
// src/components/Conteneur.jsx
import React from 'react';
import ExperienceCard from './ExperienceCard';
import skills from '../data/skills.json'; // Crée ce fichier avec ton tableau JSON

const Conteneur = () => (
  <main className="px-4 py-8 max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    {skills.map((skill) => (
      <ExperienceCard key={skill.id} skill={skill} />
    ))}
  </main>
);

export default Conteneur;