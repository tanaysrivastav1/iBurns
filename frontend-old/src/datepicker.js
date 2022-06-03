import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function BasicDatePicker(props) {
    const [value, setValue] = useState(null);
    const { handleDate } = props;

    useEffect(() => {
      handleDate(value)
    })
  
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Choose date"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
  }