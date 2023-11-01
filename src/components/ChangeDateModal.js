
import React, { useState } from 'react';
import api from '../services/api';

function ChangeDateModal({ isOpen, onClose, site, onUpdateDate }) {
    const [newDate, setNewDate] = useState('');

    const handleChangeDate = () => {
        
        api.post('/sites/change-date', { siteName: site.name, newDate })
            .then(response => {
                console.log('Change date success:', response.data);
                
                onUpdateDate();
            })
            .catch(error => console.error('Change date error:', error));

        
        onClose();
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <h2>Change Installation Date</h2>
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
            </div>
        </div>
    );
}

export default ChangeDateModal;
