import { TextField } from '@mui/material';
import React, {useState, useEffect} from 'react';
import BasicDatePicker from './datepicker';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import DeleteButton from './deletebutton';

export default function FormChildren(props) {
    const { fid, handleFieldChange, handleDelete } = props;

    const [num, setNum] = useState(0);
    const [childName, setChildName] = useState("");
    const [childDate, setChildDate] = useState(new Date());
    const [childLocation, setChildLocation] = useState("");

    const handleDate = date => {
        setChildDate(date)
    }

    useEffect(() => {
        let stringChildDate = childDate ? childDate.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' }) : "";
        handleFieldChange(fid, {"children": { "number": num, 
                                            "child_name": childName, 
                                            "date": stringChildDate,
                                            "location": childLocation}});
    }, [num, childName, childDate, childLocation]);

    return (    
        <div className="cardHolder">
            <Card elevation={4} sx={{ minWidth: 275 }} >
                <p>
                    Enter child:
                </p>
                <CardContent>
                    <TextField id="num" label="Child number" variant="outlined" size="small" type="number" value={num} onChange={e => setNum(e.target.value)}/>
                    <TextField id="childName" label="Child name" variant="outlined" size="small" value={childName} onChange={e => setChildName(e.target.value)}/>
                    <BasicDatePicker handleDate={handleDate}/>

                    <TextField id="childLocation" label="Birth location" variant="outlined" size="small" value={childLocation} onChange={e => setChildLocation(e.target.value)}/>
                </CardContent>
                <DeleteButton handleDelete={handleDelete} fid={fid}/>
            </Card>
        </div>
    );
}
