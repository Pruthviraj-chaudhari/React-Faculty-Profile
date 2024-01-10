/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function FacultyProfile({ faculty }) {
  const { name, designation, imageSrc } = faculty;

  return (
    <div className="">
      <div className="faculty-profile team-card team_style1 box_shadow1 animation fadeInUp">
        <div className="faculty-profile__img-box">
          <img className="faculty-profile__img" src={imageSrc} alt={name} />
        </div>
        <div className="faculty-profile__content">
          <div className="faculty-profile__intro">
            <h5 className="faculty-profile__title">{name}</h5>
            <span className="faculty-profile__desc">{designation}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyProfile;
