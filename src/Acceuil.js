import React from 'react';
import {Card, CardContent, CardHeader} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        
        padding: 20,
        marginTop: theme.spacing(2),
        marginBottom: '1em',
    },
}));



const Index = (props)=>{
    const classes = useStyles();
    return(
        <Card className={classes.root}>
        <CardHeader title="Bienvenue à votre Page de suivie des patients"/>
        <CardContent> Ghitni, la nouvelle plateforme de suivie des patients en Algérie</CardContent>
    </Card>
    );
}
    


export default Index;
    
    
