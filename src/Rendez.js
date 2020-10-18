import React from 'react';
import {List, Datagrid, TextField, EmailField} from 'react-admin';
import {Filter, ReferenceInput, SelectInput, TextInput} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        
        padding: 20,
        marginTop: theme.spacing(2),
        marginBottom: '1em',
    },
}));

const RendezFilter = (props) =>{
    const classes = useStyles();
    return(
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn/>
        <ReferenceInput label="rendez" source="rendezId" reference="rendez" allowEmpty>
            <SelectInput optionText="name"/>
        </ReferenceInput>
    </Filter>
    );
}

export const Rendez = props =>{
    const classes = useStyles();
    return( // {id, nompatient, prénompatient, date, heure}
        <List {...props} className={classes.root} filters={<RendezFilter/>}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="date"/>
            <TextField source="heure"/>
        </Datagrid>
    </List>
    );
}
    
