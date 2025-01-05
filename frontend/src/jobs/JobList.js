import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import JoblyApi from '../api';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const jobsData = await JoblyApi.getJobs();
                setJobs(jobsData);
            } catch (err) {
                setError("Unable to fetch jobs. Please try again.");
            }
        };

        fetchJobs();
    }, []);

    const jobsFiltered = jobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        job.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Job Listings</h1>
            <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div className="job-list">
                {jobsFiltered ? jobsFiltered.map((job) => (
                    <JobCard key={job.id} job={job} />
                )) : <div></div>}
            </div>
        </div>
    );
}

export default JobList;