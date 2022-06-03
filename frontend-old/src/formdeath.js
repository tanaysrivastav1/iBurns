import { TextField } from '@mui/material';
import React, {useState, useEffect} from 'react';
import BasicDatePicker from './datepicker';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import DeleteButton from './deletebutton';

export default function FormDeath(props) {
    const { fid, handleFieldChange, handleDelete } = props;
    const [deathDate, setDeathDate] = useState(new Date());
    const [deathAge, setDeathAge] = useState(0);
    const [deathLocation, setDeathLocation] = useState("");

    const handleDate = date => {
        setDeathDate(date)
    }

    useEffect(() => {
        let stringDeathDate = deathDate ? deathDate.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' }) : "";
        handleFieldChange(fid, {"death": { "death_date": stringDeathDate, 
                                            "age": deathAge, 
                                            "location": deathLocation}});
    }, [deathDate, deathAge, deathLocation]);

    return (    
        <div className="cardHolder">
            <Card elevation={4} sx={{ minWidth: 275 }} >
                <p>
                    Enter death:
                </p>
                <CardContent>
                    <BasicDatePicker handleDate={handleDate}/>
                    <TextField id="deathAge" label="Age of death" variant="outlined" size="small" type="number" value={deathAge} onChange={e => setDeathAge(e.target.value)}/>
                    <TextField id="deathLocation" label="Location" variant="outlined" size="small" value={deathLocation} onChange={e => setDeathLocation(e.target.value)}/>
                </CardContent>
                <DeleteButton handleDelete={handleDelete} fid={fid}/>
            </Card>
        </div>
    );
}
