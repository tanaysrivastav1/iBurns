import { TextField } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import DeleteButton from './deletebutton';

export default function FormPreviousHome(props) {
    const { fid, handleFieldChange, handleDelete } = props;

    const [prevHomeStartYear, setPrevHomeStartYear] = useState(0);
    const [prevHomeEndYear, setPrevHomeEndYear] = useState(0);
    const [prevHomeLocation, setPrevHomeLocation] = useState("");

    useEffect(() => {
        handleFieldChange(fid, {"previous_home": { "start_year": prevHomeStartYear, 
                                            "end_year": prevHomeEndYear, 
                                            "location": prevHomeLocation}})

    }, [prevHomeStartYear, prevHomeEndYear, prevHomeLocation]);

    return (    
        <div className="cardHolder">
            <Card elevation={4} sx={{ minWidth: 275 }} >
                <p>
                    Enter previous home:
                </p>
                <CardContent>
                    <TextField id="prevHomeStartYear" label="Start year" variant="outlined" size="small" type="number" value={prevHomeStartYear} onChange={e => setPrevHomeStartYear(e.target.value)}/>
                    <TextField id="prevHomeEndYear" label="End year" variant="outlined" size="small" type="number" value={prevHomeEndYear} onChange={e => setPrevHomeEndYear(e.target.value)}/>
                    <TextField id="prevHomeLocation" label="Location" variant="outlined" size="small" value={prevHomeLocation} onChange={e => setPrevHomeLocation(e.target.value)}/>
                </CardContent>
                <DeleteButton handleDelete={handleDelete} fid={fid}/>
            </Card>
        </div>
    );
}
