import React, { useState, useEffect } from 'react';
import ElectricianList from '../components/ElectricianList';
import SiteList from '../components/SiteList';

import ChangeDateForm from '../components/ChangeDateForm';
import SiteTable from '../components/SiteTable';
import api from '../services/api';

import { Link, unstable_HistoryRouter } from 'react-router-dom';

const HomePage = () => {
    const [electricians, setElectricians] = useState([]);
    const [sites, setSites] = useState([]);
    const [selectedSite, setSelectedSite] = useState(null);

    useEffect(() => {
       
        api.get('/electricians')
            .then(response => setElectricians(response.data))
            .catch(error => console.error('Error fetching electricians:', error));

   
        api.get('/sites')
            .then(response => setSites(response.data))
            .catch(error => console.error('Error fetching sites:', error));
    }, []);

    const fetchSiteData = () => {
      
        api.get('/sites')
            .then(response => setSites(response.data))
            .catch(error => console.error('Error fetching sites:', error));
    };

    const handleOpenChangeDateForm = (site) => {
        setSelectedSite(site);
    };

    const handleCloseChangeDateForm = () => {
        setSelectedSite(null);
    };
    
    return (
        <div className='table-container'>
            <Link to="/assign">Auto Assign Electrition (Click here to got to component)</Link>
            <h3>after clicking change date, the popup appears at the end of screen</h3>
            
            <SiteTable sites={sites} onUpdateSiteData={fetchSiteData} />

            {selectedSite && (
                <ChangeDateForm
                    site={selectedSite}
                    onClose={handleCloseChangeDateForm}
                    onUpdateSiteData={fetchSiteData}
                />
            )}

        
        </div>
    );
}

export default HomePage;
