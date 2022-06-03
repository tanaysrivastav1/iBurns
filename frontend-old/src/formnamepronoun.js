import { TextField } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import DeleteButton from './deletebutton';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FormNamePronoun(props) {
    const { fid, handleFieldChange, handleDelete } = props;
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [pronouns, setPronouns] = useState("");

    useEffect(() => {
        const pronounArray = pronouns.split("/")
        handleFieldChange(fid, {"name": { "first": firstname, 
                                          "last": lastname,
                                          "pronoun_1": pronounArray[0],
                                          "pronoun_2": pronounArray[1],
                                          "pronoun_3": pronounArray[2]}});
    }, [firstname, lastname, pronouns]);

    return (    
        <div className="cardHolder">
            <Card elevation={4} sx={{ minWidth: 275, p:1 }}>
                <p>
                    Enter name and pronouns:
                </p>
                <CardContent>
                    <div id="formName">
                        <TextField id="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} label="First name" variant="outlined" size="small"/>
                        <TextField id="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} label="Last name" variant="outlined" size="small"/>
                        <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="pronouns">Pronouns</InputLabel>
                            <Select
                            labelId="pronouns"
                            id="pronouns"
                            value={pronouns}
                            label="Pronouns"
                            onChange={(e)=> setPronouns(e.target.value)}
                            size="small"
                            >
                            <MenuItem value={"He/him/his"}>He/him/his</MenuItem>
                            <MenuItem value={"She/her/hers"}>She/her/hers</MenuItem>
                            <MenuItem value={"They/them/their"}>They/them/their</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>
                    </div>  
                </CardContent>
                <DeleteButton handleDelete={handleDelete} fid={fid}/>
            </Card>
        </div>
    );
}