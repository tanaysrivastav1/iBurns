import { TextField } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import DeleteButton from './deletebutton';

export default function FormPrevWork(props) {
    const { fid, handleFieldChange, handleDelete } = props;

    const [workStartYear, setWorkStartYear] = useState(0);
    const [workEndYear, setWorkEndYear] = useState(0);
    const [workName, setWorkName] = useState("");
    const [workPos, setPos] = useState("");

    useEffect(() => {
        handleFieldChange(fid, {"previous_work": { "start_year": workStartYear, 
                                            "end_year": workEndYear, 
                                            "name": workName, 
                                            "position": workPos}})

    }, [workStartYear, workEndYear, workName, workPos]);

    return (    
        <div className="cardHolder">
            <Card elevation={4} sx={{ minWidth: 275 }} >
                <p>
                    Enter previous work:
                </p>
                <CardContent>
                    <TextField id="workName" label="Company name" variant="outlined" size="small" value={workName} onChange={e => setWorkName(e.target.value)}/>
                    <TextField id="workPos" label="Position" variant="outlined" size="small" value={workPos} onChange={e => setPos(e.target.value)}/>
                    <TextField id="workStartYear" label="Start year" variant="outlined" size="small" type="number" value={workStartYear} onChange={e => setWorkStartYear(e.target.value)}/>
                    <TextField id="workEndYear" label="End year" variant="outlined" size="small" type="number" value={workEndYear} onChange={e => setWorkEndYear(e.target.value)}/>
                </CardContent>
                <DeleteButton handleDelete={handleDelete} fid={fid}/>
            </Card>
        </div>
    );
}
