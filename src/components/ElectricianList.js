
import React from 'react';

function ElectricianList({ electricians }) {
    return (
        <div>
            <h2>Electricians</h2>
            <ul>
                {electricians.map(electrician => (
                    <li key={electrician.name}>
                        <strong>Name:</strong> {electrician.name}, <strong>Phone:</strong> {electrician.phoneNumber}, <strong>Grievance Electrician:</strong> {electrician.grievanceElectrician ? 'Yes' : 'No'}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ElectricianList;
