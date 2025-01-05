import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import JobCard from '../jobs/JobCard';
import JoblyApi from "../api";  

const CompanyDetail = () => {

    const { handle } = useParams(); 
    const [company, setCompany] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            try {
                const data = await JoblyApi.getCompany(handle);
                setCompany(data);
                setJobs(data.jobs);
            } catch (err) {
                setError("Company not found.");
            }
        }
        getDetail();
    }, [handle]);

    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>{company.name}</h1>
            <p>{company.description}</p>
            <p>{company.numEmployees} employees</p>
            
            <h2>Jobs Available</h2>
            {jobs.length > 0 ? (
                jobs.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
                <p>No jobs available at this company.</p>
            )}
        </div>
    );
}


export default CompanyDetail;