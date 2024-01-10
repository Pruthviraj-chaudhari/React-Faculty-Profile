/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import FacultyProfile from './FacultyProfile';
import AccordionInfo from './AccordionInfo.jsx';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import facultyData from './data.js';

function FacultyDetails() {
  const { id } = useParams();

  const getDetails = (facultyId) => {
    return facultyData.find((faculty) => faculty.id === parseInt(facultyId));
  };

  const facultyDetails = getDetails(id);

  if (!facultyDetails) {
    return <div>Faculty not found</div>;
  }

  return (
    <div className="container m-5 pt-4 pb-2" >
      <div className="row" style={{ height: '100vh' }}>

        <div className="col-md-4">
          <FacultyProfile faculty={facultyDetails}/>
        </div>

        <div className="col-md-8">
          <AccordionInfo moreDetails={facultyDetails.moreDetails} />
        </div>

      </div>
    </div>
  );
}

export default FacultyDetails;
