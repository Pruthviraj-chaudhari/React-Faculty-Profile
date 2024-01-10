/* eslint-disable no-unused-vars */
import React from "react";
import Section from "./Section";
import TeamMember from "./FacultyCard.jsx";
import facultyData from './data.js';

const FacultyList = () => {
  return (
    <>
    <Section title="Teaching Faculty">
      <div className="row">
        {facultyData.map((faculty) => (
          <TeamMember
            key={faculty.id}
            id={faculty.id}
            name={faculty.name}
            designation={faculty.designation}
            imageSrc={faculty.imageSrc}
            profileLink={faculty.profileLink}
          />
        ))}
      </div>
    </Section>
  </>
  )
}

export default FacultyList