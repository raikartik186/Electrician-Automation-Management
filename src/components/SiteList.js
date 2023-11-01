
import React from 'react';

function SiteList({ sites }) {
    return (
        <div>
            <h2>Sites</h2>
            <ul>
                {sites.map(site => (
                    <li key={site.name}>
                        <strong>Name:</strong> {site.name}, <strong>City:</strong> {site.city}, <strong>Installation Date:</strong> {new Date(site.InstallationDate).toLocaleDateString()}, <strong>Grievance:</strong> {site.grievance ? 'Yes' : 'No'}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SiteList;
