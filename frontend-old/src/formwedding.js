import { TextField } from '@mui/material';
import React, {useState, useEffect} from 'react';
import BasicDatePicker from './datepicker';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import DeleteButton from './deletebutton';

export default function FormWedding(props) {
    const { fid, handleFieldChange, handleDelete } = props;

    const [spouseName, setSpouse] = useState("");
    const [weddingDate, setWedDate] = useState(new Date());
    const [weddingLocation, setWedLocation] = useState("");

    const handleDate = date => {
        setWedDate(date)
    }

    useEffect(() => {
        let stringWeddingDate = weddingDate ? weddingDate.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' }) : "";
        handleFieldChange(fid, {"wedding": { "spouse_name": spouseName, 
                                            "wedding_date": stringWeddingDate, 
                                            "location": weddingLocation}})

    }, [spouseName, weddingDate, weddingLocation]);

    return (    
        <div className="cardHolder">
            <Card elevation={4} sx={{ minWidth: 275 }} >
                <p>
                    Enter wedding:
                </p>
                <CardContent>
                    <TextField id="spouseName" label="Spouse name" variant="outlined" size="small" value={spouseName} onChange={e => setSpouse(e.target.value)}/>
                    <BasicDatePicker handleDate={handleDate}/>
                    <TextField id="weddingLocation" label="Location" variant="outlined" size="small" value={weddingLocation} onChange={e => setWedLocation(e.target.value)}/>
                </CardContent>
                <DeleteButton handleDelete={handleDelete} fid={fid}/>
            </Card>
        </div>
    );
}
