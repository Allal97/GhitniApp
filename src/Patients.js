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

const PatientFilter = (props) =>{
    const classes = useStyles();
    return(
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn/>
        <ReferenceInput label="patient" source="patientId" reference="patients" allowEmpty>
            <SelectInput optionText="name"/>
        </ReferenceInput>
    </Filter>
    );
}

export const PatientList = props =>{
    const classes = useStyles();
    return(
        <List {...props} className={classes.root} filters={<PatientFilter/>}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="nom"/>
            <EmailField source="prénom"/>
            <TextField source="datedenaissance"/>
            <TextField source="situation"/>
            <TextField source="adresse"/>
        </Datagrid>
    </List>
    );
}
   


// les information du patient
// {id, nom, prénom, date de naissance, situation, adresse}

