import React from 'react';
import AboutSection from '../components/AboutSection';
import JoinDetailsSection from '../components/JoinDetailsSection';
import JoinUsSection from '../components/JoinUsSection';
import TeamSection from '../components/TeamSection';

const About = () => {
  return (
    <div>
      <AboutSection />
      <TeamSection />
      <JoinUsSection />
      <JoinDetailsSection />
    </div>
  );
};

export default About;
