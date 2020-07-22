import React, { useEffect,useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { Paper, makeStyles } from '@material-ui/core'
import Article from './Article'
import Contents from './Contents'
import db from '../firebase'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
    marginTop:theme.spacing(1),
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
export default function Main() {
  const [article, setarticle] = useState('');
  useEffect(() => {
      db.collection('content').onSnapshot(snapshot =>{
          setarticle(snapshot.docs.map(doc=>doc.data())[0])
          console.log(snapshot.docs.map(doc=>doc.data()))
      })
  }, [])

  const getarticle = (id)=>{
    db.collection('content').onSnapshot(snapshot =>{
      setarticle(snapshot.docs.filter(doc=>doc.id===id)[0].data())
      
  })
   }
    const theme = useStyles();
    return (
        
        <div className={theme.root}>
        <Grid container spacing={1} >
        <Grid item xs={10}>
        <Paper variant="outlined" className={theme.paper}><Article context={article} /></Paper>
        </Grid>
        <Grid item xs={2}>
        <Paper variant="outlined" className={theme.paper}><Contents showit={id=>getarticle(id)}/></Paper>
        </Grid>
        </Grid>
        </div>
    )

    }