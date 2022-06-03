import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import FormBirthDate from './formbirthdate';
import FormNamePronoun from './formnamepronoun';
import FormSchool from './formschool';
import FormPrevWork from './formprevwork';
import FormPreviousHome from './formprevioushome';
import FormChildhood from './formchildhood';
import FormCurrentStatus from './formcurrentstatus';
import FormWedding from './formwedding';
import FormChildren from './formchildren';
import FormDeath from './formdeath';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import axios from 'axios';
import fileDownload from 'js-file-download';
import { v4 } from 'uuid';
import { trackPromise } from 'react-promise-tracker';
import { usePromiseTracker } from "react-promise-tracker"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const API_ENDPOINT = "http://127.0.0.1:5000/video"

function DropdownMenu() {
    // const [clicked, setClicked] = useState(true);
    // contains ID -> event mapping. Maintains insertion order
    const [eventMap, setEventMap] = useState(new Map());
    const [eventCardList, setEventCardList] = useState([]);
    // keys in this object are fieldId, value is { event: {"xxx": value1, "xxx": value2 }}
    // using a Map since it maintains insertion order
    const [fields, setFields] = useState(new Map());

    // for dropdown
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const downloadVideo = (e) => {
        let input = [];
        for (const value of fields.values()) {
            input.push(value);
        }
        let inputData = {"input": input};

        console.log(JSON.stringify(inputData));

        let fileName = `${input[0]["name"]["first"]}_${input[0]["name"]["last"]}_biopic.mp4`.toLowerCase();
        console.log(fileName);

        e.preventDefault();
        trackPromise(
            axios({
                url: API_ENDPOINT,
                method: "POST",
                data: JSON.stringify(inputData),
                responseType: "blob"
            })
                .then((res) => {
                    fileDownload(res.data, fileName);
                })
        );
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = (e, fid) => {
        //e.preventDefault();
        let newEventMap = eventMap;
        let newFields = fields;
        newEventMap.delete(fid);
        newFields.delete(fid);
        setEventMap(newEventMap);
        setFields(newFields);
        updateEventCardList(newEventMap);
    };

    const handleFieldChange = (fid, value) => {
        let newFields = fields;
        newFields.set(fid, value);
        setFields(newFields);
    };

    const generateEventReactComponent = (id, eventName) => {
        switch (eventName) {
            case "name":
                return <FormNamePronoun key={id} fid={id} handleFieldChange={handleFieldChange} handleDelete={handleDelete}/>;
            case "school":
                return <FormSchool key={id} fid={id} handleFieldChange={handleFieldChange} handleDelete={handleDelete}/>;
            case "birthdate":
                return <FormBirthDate key={id} fid={id} handleFieldChange={handleFieldChange} handleDelete={handleDelete}/>;
            case "childhood":
                return <FormChildhood key={id} fid={id} handleFieldChange={handleFieldChange} handleDelete={handleDelete}/>;
            case "wedding":
                return <FormWedding key={id} fid={id} handleFieldChange={handleFieldChange} handleDelete={handleDelete}/>;
            case "children":
                return <FormChildren key={id} fid={id} handleFieldChange={handleFieldChange} handleDelete={handleDelete}/>;
            case "previous_home":
                return <FormPreviousHome key={id} fid={id} handleFieldChange={handleFieldChange} handleDelete={handleDelete}/>;
            case "previous_work":
                return <FormPrevWork key={id} fid={id} handleFieldChange={handleFieldChange} handleDelete={handleDelete}/>;
            case "death":
                return <FormDeath key={id} fid={id} handleFieldChange={handleFieldChange} handleDelete={handleDelete}/>;
            case "current_status":
                return <FormCurrentStatus key={id} fid={id} handleFieldChange={handleFieldChange} handleDelete={handleDelete}/>;
        }
    };

    const updateEventCardList = (newEventMap) => {
        let newEventCardList = [];
        let component;
        for (const [id, eventName] of newEventMap) {
            component = generateEventReactComponent(id, eventName);
            newEventCardList.push(component);
        }
        setEventCardList(newEventCardList);
    };

    const doesEventMapInclude = (eventName) => {
        for (let event of eventMap.values()) {
            if (event === eventName) {
                return true;
            }
        }
        return false;
    };

    const handleAddEvent = (e) => {
        const value = e.target.id;
        let inputMap = eventMap;
        const id = v4();

        switch (value) {
            case "name":
            case "birthdate":
                if (!doesEventMapInclude(value)) {
                    inputMap.set(id, value);
                }
                break;
            default:
                inputMap.set(id, value);
                break;
        }
        setEventMap(inputMap);
        updateEventCardList(inputMap);
    };

    const LoadingIndicator = props => {
        const { promiseInProgress } = usePromiseTracker();
        return (
            promiseInProgress && 
            <Box sx={{ display: 'flex' }} id="progressBar">
                <CircularProgress/>
                <p>Video is generating...this might take a few minutes.</p>
            </Box>
        );  
    }      

    return (
        <React.Fragment>
            <div>
                <Button
                    variant="outlined"
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    endIcon={<ArrowDropDownIcon />}
                    onClick={handleClick}
                >
                    Select an event
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem value="name" onClick={(e) => handleAddEvent(e)} id="name">Name</MenuItem>
                    <MenuItem value="birthdate" onClick={(e) => handleAddEvent(e)} id="birthdate">Birth Date</MenuItem>
                    <MenuItem value="childhood" onClick={(e) => handleAddEvent(e)} id="childhood">Childhood</MenuItem>
                    <MenuItem value="previous_home" onClick={(e) => handleAddEvent(e)} id="previous_home">Previous Home</MenuItem>
                    <MenuItem value="school" onClick={(e) => handleAddEvent(e)} id="school">School</MenuItem>
                    <MenuItem value="wedding" onClick={(e) => handleAddEvent(e)} id="wedding">Wedding</MenuItem>
                    <MenuItem value="children" onClick={(e) => handleAddEvent(e)} id="children">Children</MenuItem>
                    <MenuItem value="previous_work" onClick={(e) => handleAddEvent(e)} id="previous_work">Previous Work</MenuItem>
                    <MenuItem value="death" onClick={(e) => handleAddEvent(e)} id="death">Death</MenuItem>
                    <MenuItem value="current_status" onClick={(e) => handleAddEvent(e)} id="current_status">Current Status</MenuItem>
                </Menu>
            </div>
            <div className="input-form">
                <div key={fields}>{eventCardList}</div>
                {eventMap.size> 0 &&
                    <Button variant="contained" onClick={(e) => downloadVideo(e)}>Submit</Button>}
            </div>
            <div className="loadingButton">
                <LoadingIndicator/>
            </div>
        </React.Fragment>
    );
}

export default DropdownMenu;