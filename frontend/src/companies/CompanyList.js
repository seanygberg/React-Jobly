import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";

const CompanyList = () => {
    const [companies, setCompanies] = useState([]);
    const [search, setSearch] = useState("");
    const [error, setError] = useState(null);

    // Load all companies on initial render
    useEffect(() => {
        async function loadCompanies() {
            try {
                const companiesData = await JoblyApi.getCompanies();
                console.log(companiesData);
                setCompanies(companiesData);
            } catch (err) {
                setError("Error fetching companies.");
            }
        }

        loadCompanies();
    }, []);

    // Fetch companies based on search term when search changes
    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const companiesData = await JoblyApi.getCompanies(search);
                setCompanies(companiesData);
            } catch (err) {
                setError("Error fetching companies.");
            }
        };

        if (search) {
            fetchCompanies();
        }
    }, [search]);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    if (error) return <div>{error}</div>;

    return (
        <div>
            <input
                type="text"
                placeholder="Search for companies"
                value={search}
                onChange={handleSearchChange}
            />
            <div className="company-list">
                {companies ? companies.map(company => (
                    <CompanyCard key={company.handle} company={company} />
                )): <div></div>}
            </div>
        </div>
    );
};

export default CompanyList;
