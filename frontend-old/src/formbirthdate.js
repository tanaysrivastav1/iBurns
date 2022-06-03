import React, {useState, useEffect} from 'react';
import BasicDatePicker from './datepicker';
import { Card, TextField } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import DeleteButton from './deletebutton';

export default function FormBirthDate(props) {

    const { fid, handleFieldChange, handleDelete } = props;
    const [birthdate, setBirthdate] = useState(new Date());
    const [location, setLocation] = useState("");

    const handleDate = date => {
        setBirthdate(date)
    }

    useEffect(() => {
        let stringDate = birthdate ? birthdate.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' }) : "";
        handleFieldChange(fid, {"birth": { "date": stringDate, "location": location}});
    }, [birthdate, location]);


    return (
        <div className="cardHolder">
            <Card elevation={4} sx={{ minWidth: 275 }}>
                <p>
                    Enter birth date:
                </p>
                <CardContent>
                    <React.Fragment key="formBirthdate">
                        <BasicDatePicker handleDate={handleDate}/>
                        <TextField id="location" value={location} onChange={(e) => setLocation(e.target.value)} label="Location" variant="outlined" size="small"/>
                    </React.Fragment>
                </CardContent>
                <DeleteButton handleDelete={handleDelete} fid={fid}/>
            </Card>
        </div>
    );
}
    