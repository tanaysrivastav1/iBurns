import React, { useState } from 'react';
import Select from 'react-select'
import Button from '@mui/material/Button';
import myLogo from './smallerlogo.png';
import TextField from '@mui/material/TextField';
import Datetime from "react-datetime";
import 'react-datetime/css/react-datetime.css';
import axios from 'axios';
import fileDownload from 'js-file-download';
import { trackPromise } from 'react-promise-tracker';

const API_ENDPOINT = "http://127.0.0.1:5000/video"

function Create() {

  const [birthdayValue, onBirthdayChange] = useState("");
  const [themeValue, onThemeChange] = useState('music');
  const [additionalInfoValue, onAdditionalInfoChange] = useState([]);
  const [nameValue, onNameChange] = useState({
    "firstName": "",
    "lastName": "",
    "pronoun1": "", 
    "pronoun2": "",
    "pronoun3": ""
  });
  const [birthLocationValue, onBirthLocationChange] = useState({
    "location": ""
  });
  const [childhoodValue, onChildhoodChange] = useState({
    "location": "",
    "start_year": "",
    "end_year": "", 
    "language": "english"
  });
  const [schoolValue, onSchoolChange] = useState({
    "name": "",
    "start_year": "",
    "end_year": "", 
    "location": ""
  });
  const [workValue, onWorkChange] = useState({
    "company_name": "",
    "start_year": "",
    "end_year": "", 
    "position": ""
  });
  const [currentStatusValue, onCurrentStatusChange] = useState({
    "age": "",
    "location": "",
    "position": "", 
    "company_name": ""
  });
  const [weddingValue, onWeddingChange] = useState({
    "wedding_date": "",
    "spouse_name": "",
    "location": ""
  });

  const theme_options_list = ['music', 'sports', 'politics', 'movies', 'dating', 'fashion', 'dancing', 'tech']
  const theme_options = theme_options_list.map(function(x) {
    return ({
      value: x,
      label: x[0].toUpperCase() + x.substring(1)
    });
  });

  const additional_info_list = ['name', 'birth', 'childhood', 'school', 'work', 'status', 'wedding']
  const additional_info = additional_info_list.map(function(x) {
    return ({
      value: x,
      label: x[0].toUpperCase() + x.substring(1)
    })
  })

  const languages_list = [
  'english',
  "spanish", 
  'french', 
  'german', 
  'italian', 
  'russian', 
  'chinese', 
  'japanese', 
  'korean', 
  'arabic', 
  'bengali', 
  'dutch', 
  'greek', 
  'hebrew',
  'hindi',
  'indonesian',
  'malay',
  'marathi',
  'persian',
  'polish',
  'portugese',
  'punjabi',
  'romanian',
  'sanskrit',
  'serbian',
  'tagalog',
  'thai',
  'turkish',
  'ukranian',
  'vietnamese']

  const languages = languages_list.map(function(x) {
    return ({
      value: x,
      label: x[0].toUpperCase() + x.substring(1)
    })
  })

  const colourStyles = {
    menuList: styles => ({
        ...styles
    }),
    option: (styles, {isFocused, isSelected}) => ({
        ...styles,
        zIndex: 1
    }),
    menu: base => ({
        ...base,
        zIndex: 100
    })
    }
    

  function nameInfo() {
    if(additionalInfoValue.some(e => e.value == 'name')) {
      return (
        <div style = { {display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1 style = {{marginRight: '25px'}}>Name Information</h1>
          <form>
            <TextField style = {{marginRight: '25px'}} id="outlined-basic" label="First Name" variant="outlined" onChange = {(event) => onNameChange({...nameValue,firstName:event.target.value})}/>
            <TextField style = {{marginRight: '25px'}} id="outlined-basic" label="Last Name" variant="outlined" onChange = {(event) => onNameChange({...nameValue,lastName:event.target.value})}/>
            <TextField style = {{marginRight: '25px'}} id="outlined-basic" label="Pronoun 1" variant="outlined" onChange = {(event) => onNameChange({...nameValue,pronoun1:event.target.value})}/>
            <TextField style = {{marginRight: '25px'}} id="outlined-basic" label="Pronoun 2" variant="outlined" onChange = {(event) => onNameChange({...nameValue,pronoun2:event.target.value})}/>
            <TextField style = {{marginRight: '25px'}} id="outlined-basic" label="Pronoun 2" variant="outlined" onChange = {(event) => onNameChange({...nameValue,pronoun3:event.target.value})}/>
          </form> 
        </div>
      )
    }
  }

  function birthInfo() {
    if(additionalInfoValue.some(e => e.value == 'birth')) {
      return (
        <div style = { {display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1 style = {{marginRight: '25px'}}>Birth Location</h1>
          <TextField id="outlined-basic" label="Birth Location" variant="outlined" onChange = {(event) => onBirthLocationChange({...birthLocationValue,location:event.target.value})}/>
        </div>
      )
    }
  }

  function childhoodInfo() {
    if(additionalInfoValue.some(e => e.value == 'childhood')) {
      return (
        <div style = { {display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1 style = {{marginRight: '25px'}}>Childhood Information</h1>
          <form style = {{display: 'flex'}}>
            <TextField style = {{marginRight: '25px'}} id="outlined-basic" label="Childhood Location" variant="outlined" onChange = {(event) => onChildhoodChange({...childhoodValue,location:event.target.value})}/>
            <div style = {{marginRight: '25px'}} >
              Language
              <Select options={languages} onChange = {(event) => onChildhoodChange({...childhoodValue,language:event.value})} styles = {colourStyles}/>
            </div>
            <div style = {{marginRight: '25px'}} >
              Start Year
              <Datetime timeFormat={false} dateFormat="YYYY" onChange = {(event) => onChildhoodChange({...childhoodValue,start_year:event.year()})}/>
            </div>
            <div style = {{marginRight: '25px'}}>
              End Year
              <Datetime timeFormat={false} dateFormat="YYYY" onChange = {(event) => onChildhoodChange({...childhoodValue,end_year:event.year()})}/>
            </div>
          </form>
        </div>
      )
    }
  }

  function schoolInfo() {
    if(additionalInfoValue.some(e => e.value == 'school')) {
      return (
        <div style = { {display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1 style = {{marginRight: '25px'}}>School Information</h1>
          <form style = {{display: 'flex'}}>
            <TextField style = {{marginRight: '25px'}} id="outlined-basic" label="School Name" variant="outlined" onChange = {(event) => onSchoolChange({...schoolValue,name:event.target.value})}/>
            <TextField style = {{marginRight: '25px'}} id="outlined-basic" label="School Location" variant="outlined" onChange = {(event) => onChildhoodChange({...schoolValue,location:event.target.value})}/>
            <div style = {{marginRight: '25px'}}>
              Start Year
              <Datetime timeFormat={false} dateFormat="YYYY" onChange = {(event) => onSchoolChange({...schoolValue,start_year:event.year()})}/> 
            </div>
            <div style = {{marginRight: '25px'}}>
              End Year
              <Datetime timeFormat={false} dateFormat="YYYY" onChange = {(event) => onSchoolChange({...schoolValue,end_year:event.year()})}/> 
            </div>
          </form>
        </div>
      )
    }
  }

  function workInfo() {
    if(additionalInfoValue.some(e => e.value == 'work')) {
      return (
        <div style = { {display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1 style = {{marginRight: '25px'}}>Work Information</h1>
          <form style = {{display: 'flex'}}>
            <TextField style = {{marginRight: '25px'}} id="outlined-basic" label="Company Name" variant="outlined" onChange = {(event) => onWorkChange({...workValue,company_name:event.target.value})}/>
            <TextField style = {{marginRight: '25px'}} id="outlined-basic" label="Position" variant="outlined" onChange = {(event) => onWorkChange({...workValue,position:event.target.value})}/>
            <div style = {{marginRight: '25px'}}>
              Start Year
              <Datetime timeFormat={false}  dateFormat="YYYY" onChange = {(event) => onWorkChange({...workValue,start_year:event.year()})}/> 
            </div>
            <div style = {{marginRight: '25px'}}>
              End Year
              <Datetime timeFormat={false}  dateFormat="YYYY" onChange = {(event) => onWorkChange({...workValue,end_year:event.year()})}/> 
            </div>
          </form>
        </div>
      )
    }
  }

  function currentStatusInfo() {
    if(additionalInfoValue.some(e => e.value == 'status')) {
      return (
        <div style = { {display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1 style = {{marginRight: '25px'}}>Current Status Information</h1>
          <form>
            <TextField style = {{marginRight: '25px'}} id="outlined-basic" label="Age" variant="outlined" onChange = {(event) => onCurrentStatusChange({...currentStatusValue,age:event.target.value})}/>
            <TextField style = {{marginRight: '25px'}} id="outlined-basic" label="Company Name" variant="outlined" onChange = {(event) => onCurrentStatusChange({...currentStatusValue,company_name:event.target.value})}/>
            <TextField style = {{marginRight: '25px'}} id="outlined-basic" label="Position" variant="outlined" onChange = {(event) => onCurrentStatusChange({...currentStatusValue,position:event.target.value})}/>
            <TextField style = {{marginRight: '25px'}} id="outlined-basic" label="Location" variant="outlined" onChange = {(event) => onCurrentStatusChange({...currentStatusValue,location:event.target.value})}/>
          </form>
        </div>
      )
    }
  }

  function weddingInfo() {
    if(additionalInfoValue.some(e => e.value == 'wedding')) {
      return (
        <div style = { {display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1 style = {{marginRight: '25px'}}>Wedding Information</h1>
          <form style = {{display: 'flex'}}>
            <TextField style = {{marginRight: '25px'}} id="outlined-basic" label="Spouse Name" variant="outlined" onChange = {(event) => onWeddingChange({...weddingValue,spouse_name:event.target.value})}/>
            <div style = {{marginRight: '25px'}}>
              Wedding Date
              <Datetime timeFormat={false}  dateFormat="YYYY" onChange = {(event) => onWeddingChange({...weddingValue,wedding_date:event.year()})}/> 
            </div>
            <TextField style = {{marginRight: '25px'}} id="outlined-basic" label="Wedding Location" variant="outlined" onChange = {(event) => onWeddingChange({...weddingValue,location:event.target.value})}/>
          </form>
        </div>
      )
    }
  }

  function generate() {
    var obj = 
    { "input": [
      {"name": { "first": nameValue.firstName, "last": nameValue.lastName, "pronoun_1": nameValue.pronoun1, "pronoun_2": nameValue.pronoun2, "pronoun_3": nameValue.pronoun3 }},
      {"birth": { "date": String(birthdayValue), "location": birthLocationValue.location}},
      {"childhood": { "location": childhoodValue.location, "start_year": String(childhoodValue.start_year), "end_year": String(childhoodValue.end_year), "language" : String(childhoodValue.language)}},
      {"school": { "name": schoolValue.name, "start_year": String(schoolValue.start_year), "end_year": String(schoolValue.end_year), "location": schoolValue.location}},
      {"previous_work": {"start_year": String(workValue.start_year), "end_year": String(workValue.end_year), "name": workValue.company_name, "position": workValue.position}},
      {"current_status": {"age": String(currentStatusValue.age), "location": currentStatusValue.location, "occupation": currentStatusValue.position, "company": currentStatusValue.company_name}},
      {"wedding": {"wedding_date": String(weddingValue.wedding_date),"spouse_name": weddingValue.spouse_name, "location": weddingValue.location}}
   ]}
   const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
    JSON.stringify(obj)
    )}`;
    let fileName = "output_iburns.mp4".toLowerCase();
        console.log(fileName);

        trackPromise(
            axios({
                url: API_ENDPOINT,
                method: "POST",
                data: obj,
                responseType: "blob"
            })
                .then((res) => {
                    fileDownload(res.data, fileName);
                })
        );
   
  }

  return (
    <div>
        <div className='createLogo'>
          <img src={myLogo}  alt='iBurns logo'/>
        </div>
        <div style = { {display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style = {{marginRight: '25px'}}>When were you born?</h1>
            <Datetime timeFormat={false}  dateFormat="YYYY" onChange = {(event) => onBirthdayChange(event.year())}/> 
        </div>
        <div style = { {display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style = {{marginRight: '25px'}}>What theme do you want?</h1>
            <Select options={theme_options} onChange = {onThemeChange} value = {themeValue}/>
        </div>
        <div style = { {display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style = {{marginRight: '25px'}}>What other information do you want to include?</h1>
            <Select options={additional_info} isMulti onChange={onAdditionalInfoChange} value = {additionalInfoValue} styles={colourStyles}/>
        </div>
        {nameInfo()}
        {birthInfo()}
        {childhoodInfo()}
        {schoolInfo()}
        {workInfo()}
        {currentStatusInfo()}
        {weddingInfo()}
        <div style = { {display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Button variant="outlined" onClick={generate} >Generate</Button>
        </div>
    </div>
  );
}

export default Create;