import React from 'react';
import {Admin, Resource, EditGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import {PatientList} from './Patients'
import {Acceuil} from './Acceuil';
import Index from './Acceuil';
import {Rendez} from './Rendez';
import {UrgenceList} from './Urgence';
import HomeIcon from '@material-ui/icons/Home'; //Acceuil
import ListIcon from '@material-ui/icons/List'; //Patients
import EventIcon from '@material-ui/icons/Event'; //Rendez-vous
import WarningIcon from '@material-ui/icons/Warning'; //ListeUrgence
import AuthProvider from './AuthProvider';
import Layout from './Layout';
import fakeDataProvider from 'ra-data-fakerest';
import firebase from 'firebase';
import config from './firebaseConfig';


const dataProvider = fakeDataProvider({
    patients: [ // id, nom, prénom, date de naissance, situation, adresse
        { id: 0, nom : 'Boulkrar', prénom : 'Allal', datedenaissance : "18/09/1997", situation : 'célibataire', adresse : 'Constantine', médicaments : ['Xenopar', 'kapo'] },
        { id: 1, nom : 'Aouina', prénom : 'Naoufel', datedenaissance : "16/09/1997", situation : 'célibataire', adresse : 'Constantine', médicaments : ['X', 'A']  },
        { id: 2, nom : 'Boubidi', prénom : 'Abdeslam', datedenaissance : "16/05/1996", situation : 'célibataire', adresse : 'Constantine', médicaments : ['Dolipran', 'Danpo']  },
        { id: 3, nom : 'Elgouacem', prénom : 'Anis', datedenaissance : "09/08/1995", situation : 'marié', adresse : 'Constantine', médicaments : ['Bla bla', 'Booo']  },
        { id: 4, nom : 'Okasi', prénom : 'Krimou', datedenaissance : "08/08/1992", situation : 'célibataire', adresse : 'Constantine', médicaments : ['Kaldi', 'Sali']  },
        { id: 5, nom : 'Chelghoum', prénom : 'Rabeh', datedenaissance : "23/05/1997", situation : 'célibataire', adresse : 'Constantine', médicaments : ['Rektofit', 'Smecta']  },
        { id: 6, nom : 'Bourbouh', prénom : 'Ali', datedenaissance : "08/04/2000", situation : 'célibataire', adresse : 'Constantine', médicaments : ['Kaspar', 'Do']  },
        { id: 7, nom : 'Nari', prénom : 'Houda', datedenaissance : "01/01/1998", situation : 'marié', adresse : 'Constantine', médicaments : ['Xenxi', 'Brrr']  },
        { id: 8, nom : 'Boussehal', prénom : 'Maroua', datedenaissance : "22/09/1997", situation : 'célibataire', adresse : 'Constantine', médicaments : ['Xenopar', 'kapo']  },
        { id: 9, nom : 'Righi', prénom : 'Salim', datedenaissance : "04/04/1995", situation : 'marié', adresse : 'Constantine', médicaments : ['Xenopar', 'kapo']  },
        { id: 10, nom : 'Derdour', prénom : 'Naoufel', datedenaissance : "06/06/2001", situation : 'célibataire', adresse : 'Constantine', médicaments : ['Xenopar', 'kapo']  },
        { id: 11, nom : 'Brouda', prénom : 'Amina', datedenaissance : "22/12/1991", situation : 'marié', adresse : 'Constantine', médicaments : ['Xenopar', 'kapo']  },
        { id: 12, nom : 'Kerchouch', prénom : 'Karim', datedenaissance : "05/08/1999", situation : 'célibataire', adresse : 'Constantine', médicaments : ['Xenopar', 'kapo']  },
        { id: 13, nom : 'Bouabli', prénom : 'Karima', datedenaissance : "04/01/1996", situation : 'marié', adresse : 'Constantine', médicaments : ['Xenopar', 'kapo']  },
        { id: 14, nom : 'Guerchi', prénom : 'Sara', datedenaissance : "12/12/1990", situation : 'marié', adresse : 'Constantine', médicaments : ['Xenopar', 'kapo']  },
        { id: 15, nom : 'Amrouch', prénom : 'Amani', datedenaissance : "15/06/1987", situation : 'marié', adresse : 'Constantine', médicaments : ['Xenopar', 'kapo']  }
    ],
    urgence: [// {id, degré d'urgence, Alert Text, date}
        { id: 0, degré : '1', body : 'Le patient connait une épisode mineur', date : '29/08/2020', heure :'10:00', patients_id : 0  },
        { id: 1,  degré : '1', body : 'Le patient connait une épisode mineur', date : '29/08/2020', heure :'10:25',  patients_id : 0},
        { id: 2,  degré : '1', body : 'Le patient connait une épisode mineur', date : '27/08/2020', heure :'9:38', patients_id : 15},
        { id: 3,  degré : '2', body : 'Le patient est dans un état délirant', date : '25/08/2020', heure :'17:02', patients_id : 12},
        { id: 4,  degré : '2', body : 'Le patient est dans un état délirant', date : '20/08/2020', heure :'16:25', patients_id : 9},
        { id: 5,  degré : '2', body : 'Le patient est dans un état délirant', date : '19/08/2020', heure :'19:25', patients_id : 5},
        { id: 6, degré : '1', body : 'Le patient connait une épisode mineur', date : '15/12/2019', heure :'6:30' , patients_id : 6},
        { id: 7,  degré : '1', body : 'Le patient connait une épisode mineur', date : '13/11/2019', heure :'10:00', patients_id : 0},
        { id: 8,  degré : '1', body : 'Le patient connait une épisode mineur', date : '14/03/2020', heure :'11:00', patients_id : 0},
        { id: 9,  degré : '2', body : 'Le patient est dans un état délirant', date : '14/04/2020', heure :'10:00', patients_id : 10},
        { id: 10,  degré : '2', body : 'Le patient est dans un état délirant', date : '05/06/2020', heure :'20:30', patients_id : 2},
        { id: 11,  degré : '2', body : 'Le patient est dans un état délirant', date : '1/09/2020', heure :'21:00', patients_id : 1},
    ],
    rendez : [ // {id, nompatient, prénompatient, date, heure}
        {id : 0, date : '29/08/2020', heure :'10:00', patients_id : 0 },
        {id: 1, date : '25/08/2020', heure : '15:00', patients_id : 3},
        {id: 2, date : '25/08/2020', heure : '16:00', patients_id : 2},
        {id : 3, date : '29/08/2020', heure :'10:00', patients_id : 0 },
        {id: 4, date : '14/03/2020', heure : '09:00', patients_id : 15},
        {id: 5, date : '06/02/2020', heure : '13:30', patients_id : 9},
        {id : 6, date : '15/09/2020', heure :'10:45', patients_id : 8 },
        {id: 7, date : '16/08/2020', heure : '15:30', patients_id : 7},
        {id: 8, date : '01/01/2020', heure : '17:00', patients_id : 11},

    ],
});

//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


function Dashboard(){
    React.useEffect(()=>{
        const msg = firebase.messaging();
        Notification.requestPermission().
        then(()=>{
            //msg.subscribeToTopic("general");
            return msg.getToken();
        }).then((data)=>{
            console.warn("token", data);
        })
        msg.onMessage(function (payload) {
            console.log("Message received is", payload);
            
        })
      })
    return(
                <div>
                    <Admin  layout={Layout} dashboard={Index} authProvider={AuthProvider} dataProvider={dataProvider}>
                        <Resource name="patients" list={PatientList} icon={ListIcon} edit={EditGuesser}/>
                        <Resource name="urgence" list={UrgenceList} icon={WarningIcon} edit={EditGuesser}/>
                        <Resource name="rendez" list={Rendez} icon={EventIcon} edit={EditGuesser}/>
                    </Admin>
                </div>
    );
}

export default Dashboard;