import React, { useState } from 'react';

const AssignPage = () => {
    const [electricians, setElectricians] = useState([
        {
            name: "Digvijay",
            phoneNumber: "6161232524",
            zone: [],
            grievanceElectrician: false,
        },
        {
            name: "Pranav",
            phoneNumber: "6161232524",
            zone: [],
            grievanceElectrician: true,
        },
        {
            name: "Sidharth",
            phoneNumber: "6161232524",
            zone: ["NOIDA", "GHAZIABAD"],
            grievanceElectrician: false,
        },
        {
            name: "Javed",
            phoneNumber: "6161232524",
            zone: ["GURGAON"],
            grievanceElectrician: false,
        },
    ]);

    const [sites, setSites] = useState([
        {
            name: 'KRISHNA ROY',
            phone: '6163988877',
            city: 'NOIDA',
            assignedElectrician: [],
            installationDate: '2023-01-04T00:00:00.000Z',
            grievance: false,
        },
        {
            name: 'Anuj Gupta',
            phone: '6163988877',
            city: 'DELHI',
            assignedElectrician: [],
            installationDate: '2023-10-18T00:00:00.000Z',
            grievance: true,
        },
        
    ]);
    
    const assignElectrician = () => {
        
        const assignedElectricianA = electricians.find(e => e.name === 'Pranav');
        const assignedElectricianB = electricians.find(e => e.name === 'Sidharth');
        
        

        
        setSites(prevSites => {
            return prevSites.map(site => {
                if (site.city === 'DELHI') {
                    site.assignedElectrician.push({
                        electricianName: assignedElectricianA.name,
                        electricianAssignDate: new Date().toISOString(),
                    });
                } else if (site.city === 'NOIDA') {
                    site.assignedElectrician.push({
                        electricianName: assignedElectricianB.name,
                        electricianAssignDate: new Date().toISOString(),
                    });
                }
                return site;
            });
        });

       
        console.log('Electrician assigned to Anuj Gupta',  assignedElectricianA);
        console.log('Electrician assigned to KRISHNA ROY :', assignedElectricianB);
    };

    return (
        <div>
            <h1>Electrician Allocation System</h1>

            

            <button type="button" onClick={assignElectrician}>
                Assign Electrician
            </button>
        </div>
    );
};

export default AssignPage;
