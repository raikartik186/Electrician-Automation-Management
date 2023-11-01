
import React, { useState } from 'react';
import ChangeDateForm from './ChangeDateForm'; // Import the ChangeDateForm component

function SiteTable({ sites, onUpdateSiteData }) {
    const [selectedSite, setSelectedSite] = useState(null);

    const handleOpenChangeDateForm = (site) => {
        setSelectedSite(site);
    };

    const handleCloseChangeDateForm = () => {
        setSelectedSite(null);
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Site Name</th>
                        <br />
                        <th>Phone</th>
                        <br />
                        <th>City</th>
                        <br />
                        <th>Change Installation Date</th>
                    </tr>
                </thead>
                <tbody>
                    {sites.map(site => (
                        <tr key={site.name}>
                            
                            <td>{site.name}</td>
                            &nbsp;
                            &nbsp;
                            
                            <td>{site.phone}</td>
                            &nbsp;
                            &nbsp;
                            
                            <td>{site.city}</td>
                            &nbsp;
                            &nbsp;
                            
                            <td>
                                <button onClick={() => handleOpenChangeDateForm(site)}>
                                    Change Date
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            
            {selectedSite && (
                <ChangeDateForm
                    site={selectedSite}
                    onClose={handleCloseChangeDateForm}
                    onUpdateSiteData={onUpdateSiteData}
                />
            )}
        </div>
    );
}

export default SiteTable;
