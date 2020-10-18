import React from 'react';
import {List, Datagrid, TextField, EmailField} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        
        padding: 20,
        marginTop: theme.spacing(2),
        marginBottom: '1em',
    },
}));

// {id, degré d'urgence, Alert Text, date}

export const UrgenceList = props =>{
    const classes = useStyles();
    return(
        <List className={classes.root} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="degré"/>
            <TextField source="body"/>
            <TextField source="date"/>
            <TextField source="heure"/>
            
        </Datagrid>
    </List>
    );
}
    
