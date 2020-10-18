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

const UserFilter = (props) =>{
    const classes = useStyles();
    return(
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn/>
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name"/>
        </ReferenceInput>
    </Filter>
    );
}
    


export const UserList = props =>{
    const classes = useStyles();
    return(
        <List  className={classes.root} filters={<UserFilter/>} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="name"/>
            <EmailField source="email"/>
            <TextField source="phone"/>
            <TextField source="Website"/>
            <TextField source="company.name"/>

        </Datagrid>
    </List>
    );
}

    
    
