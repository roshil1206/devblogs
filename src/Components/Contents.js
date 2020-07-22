import React, { useState, useEffect } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import db from '../firebase'

export default function Contents(props) {
    const [contents, setcontents] = useState([]);
    useEffect(() => {
        db.collection('content').onSnapshot(snapshot=>{
            setcontents(snapshot.docs.map(doc=> ({id:doc.id, title: doc.data().title})))
            console.log(snapshot.docs.map(doc=> ({id:doc.id, title: doc.data().title})))
        })
    }, [])
    
    
    return (
        <div>
             <List component="nav" aria-label="secondary mailbox folders">
                 <ListItemText primary='Contents'>Contents</ListItemText>
             {contents.map((content)=>{
                    return(
                        <ListItem button onClick={()=>props.showit(content.id)}>
                        <ListItemText secondary={content.title} key={content.id} />
                      </ListItem>
                    )
                })}
             </List>
        </div>
    )
}
