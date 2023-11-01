
import React, { useState } from 'react';
import api from '../services/api';

function ChangeDateForm({ site, onClose, onUpdateSiteData }) {
    const [newDate, setNewDate] = useState('');

    const handleChangeDate = () => {
        const oldDate = site.InstallationDate;
        const siteName = site.name;

        
        api.post('/sites/change-date', { siteName, newDate })
            .then(response => {
                console.log('Change date success:', response.data);

               
                console.log('Old Date:', oldDate);
                console.log('New Date:', newDate);
                console.log('Site Name:', siteName);

                
                onUpdateSiteData();
                onClose(); 
            })
            .catch(error => console.error('Change date error:', error));
    };

    return (
        <div>
            <h2>Change Installation Date</h2>
            <form>
                <label htmlFor="siteName">Site Name:</label>
                <input type="text" id="siteName" value={site.name} readOnly />

                <label htmlFor="newDate">New Installation Date:</label>
                <input
                    type="date"
                    id="newDate"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                />

                <button type="button" onClick={handleChangeDate}>
                    Change Installation Date
                </button>
                <button type="button" onClick={onClose}>
                    Close
                </button>
            </form>
        </div>
    );
}

export default ChangeDateForm;
