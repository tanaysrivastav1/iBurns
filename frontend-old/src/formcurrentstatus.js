import { TextField } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import DeleteButton from './deletebutton';

export default function FormCurrentStatus(props) {
    const { fid, handleFieldChange, handleDelete } = props;
    const [currAge, setAge] = useState("");
    const [currLoc, setLoc] = useState("");
    const [currOccupation, setOccupation] = useState("");
    const [currCompany, setCompany] = useState("");

    useEffect(() => {
        handleFieldChange(fid, {"current_status": { "age": currAge, 
                                          "location": currLoc,
                                          "occupation": currOccupation,
                                          "company": currCompany}});
    }, [currAge, currLoc, currOccupation, currCompany]);

    return (    
        <div className="cardHolder">
            <Card elevation={4} sx={{ minWidth: 275, p:1 }}>
                <p>
                    Enter current status:
                </p>
                <CardContent>
                    <div id="formName">
                        <TextField id="currAge" value={currAge} onChange={(e) => setAge(e.target.value)} label="Age" type="number" variant="outlined" size="small"/>
                        <TextField id="currLoc" value={currLoc} onChange={(e) => setLoc(e.target.value)} label="Location" variant="outlined" size="small"/>
                        <TextField id="currOccupation" value={currOccupation} onChange={(e) => setOccupation(e.target.value)} label="Occupation" variant="outlined" size="small"/>
                        <TextField id="currCompany" value={currCompany} onChange={(e) => setCompany(e.target.value)} label="Company name" variant="outlined" size="small"/>
                    </div>  
                </CardContent>
                <DeleteButton handleDelete={handleDelete} fid={fid}/>
            </Card>
        </div>
    );
}