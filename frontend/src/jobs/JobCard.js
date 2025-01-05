import React, { useState, useEffect, useContext } from 'react';
import UserContext from "../UserContext";

const JobCard = ({ job }) => {
    const { jobApplied, jobApply } = useContext(UserContext);
    const [applied, setApplied] = useState(false);

    useEffect(() => {
        setApplied(jobApplied(job.id));
    }, [job.id, jobApplied]);

    async function handleApply(evt) {
        if (applied) return;
        jobApply(job.id);
        setApplied(true);
    }

    return (
        <div className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.companyHandle}</p>
            <p><strong>Salary:</strong> {job.salary ? `$${job.salary}` : "Not Provided"}</p>
            <p><strong>Equity:</strong> {job.equity ? `${job.equity}%` : "Not Provided"}</p>
            <button 
                onClick={handleApply} 
                disabled={applied} 
                style={{ backgroundColor: applied ? 'gray' : 'white' }}
            >
                {applied ? "Applied" : "Apply"}
            </button>
        </div>
    );
};

export default JobCard;
