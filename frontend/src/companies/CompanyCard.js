import React from "react";
import { Link } from "react-router-dom";

const CompanyCard = ({ company }) => {
    return (
        <div className="company-card">
            <h3>{company.name}</h3>
            <p>{company.description}</p>
            <p>{company.numEmployees} employees</p>
            <Link to={`/companies/${company.handle}`}>See Details</Link>
        </div>
    );
};

export default CompanyCard;