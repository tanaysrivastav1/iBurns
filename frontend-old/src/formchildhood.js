import { TextField } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import DeleteButton from './deletebutton';

export default function FormChildhood(props) {
    const { fid, handleFieldChange, handleDelete } = props;

    const [childhoodStartYear, setChildStartYear] = useState(0);
    const [childhoodEndYear, setChildEndYear] = useState(0);
    const [childhoodLocation, setChildLocation] = useState("");

    useEffect(() => {
        handleFieldChange(fid, {"childhood": { "start_year": childhoodStartYear, 
                                            "end_year": childhoodEndYear, 
                                            "location": childhoodLocation}})

    }, [childhoodStartYear, childhoodEndYear, childhoodLocation]);

    return (    
        <div className="cardHolder">
            <Card elevation={4} sx={{ minWidth: 275 }} >
                <p>
                    Enter childhood details:
                </p>
                <CardContent>
                    <TextField id="childhoodStartYear" label="Start year" variant="outlined" size="small" type="number" value={childhoodStartYear} onChange={e => setChildStartYear(e.target.value)}/>
                    <TextField id="childhoodEndYear" label="End year" variant="outlined" size="small" type="number" value={childhoodEndYear} onChange={e => setChildEndYear(e.target.value)}/>
                    <TextField id="childhoodLocation" label="Location" variant="outlined" size="small" value={childhoodLocation} onChange={e => setChildLocation(e.target.value)}/>
                </CardContent>
                <DeleteButton handleDelete={handleDelete} fid={fid}/>
            </Card>
        </div>
    );
}
