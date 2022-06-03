import CardActions from '@mui/material/CardActions';
import { Button } from '@mui/material';
import * as React from 'react';

export default function DeleteButton(props) {
    const { handleDelete, fid } = props;

    return (
        <CardActions>
            <Button variant="outlined" size="small" color="error" onClick={(e) => handleDelete(e, fid)}>Delete</Button>
        </CardActions>
    );
}
