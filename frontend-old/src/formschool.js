import { TextField } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import DeleteButton from './deletebutton';

export default function FormSchool(props) {
    const { fid, handleFieldChange, handleDelete  } = props;

    const [school, setSchool] = useState("");
    const [location, setLocation] = useState("");
    const [schoolStartYear, setSchoolStartYear] = useState(0);
    const [schoolEndYear, setSchoolEndYear] = useState(0);

    useEffect(() => {
        handleFieldChange(fid, {"school": { "name": school, 
                                            "location": location, 
                                            "start_year": schoolStartYear, 
                                            "end_year": schoolEndYear}})

    }, [school, location, schoolStartYear, schoolEndYear]);

    return (    
        <div className="cardHolder">
            <Card elevation={4} sx={{ minWidth: 275 }} >
                <p>
                    Enter education:
                </p>
                <CardContent>
                    <TextField id="school" label="School name" variant="outlined" size="small" value={school} onChange={e => setSchool(e.target.value)}/>
                    <TextField id="location" label="Location" variant="outlined" size="small" value={location} onChange={e => setLocation(e.target.value)}/>
                    <TextField id="schoolStartYear" label="Start year" variant="outlined" size="small" type="number" value={schoolStartYear} onChange={e => setSchoolStartYear(e.target.value)}/>
                    <TextField id="schoolEndYear" label="End year" variant="outlined" size="small" type="number" value={schoolEndYear} onChange={e => setSchoolEndYear(e.target.value)}/>
                </CardContent>
                <DeleteButton handleDelete={handleDelete} fid={fid}/>
            </Card>
        </div>
    );
}