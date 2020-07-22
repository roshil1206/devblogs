import React, { useState } from 'react'
import { Button, makeStyles, Modal, TextField } from '@material-ui/core'
import { green} from '@material-ui/core/colors';
import CKEditor from '@ckeditor/ckeditor5-react';  
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';  
import db from '../firebase';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: '50vw',
      height:'30vw',
      margin:'auto',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #696969',
      boxShadow: theme.shadows[6],
      padding: theme.spacing(1, 4, 3),
      
    },
     button:{
    
        color:green[500]
    },
    modal:{
        width: '50vw',
        height:'30vw',
        margin:'auto',
    },
    textfield:{
        width:'100%',
       
    }
  }));
  
  
export default function AddContent() {
    
    const [modalopen, setmodalopen] = useState(false);
    const [title, settitle] = useState('');
    const [imageLink, setimageLink] = useState('');
    const [body, setbody] = useState('');
   
    const handleTitle = (event)=>{
        settitle(event.target.value)
    }
    const handleLink = (event)=>{
        setimageLink(event.target.value)
    }
    const handleClose = ()=>{
        setmodalopen(false)
    }
    const handleOpen =()=>{
        setmodalopen(true)
    }
    const submitdata = (event)=>{
        event.preventDefault();
        handleClose();
        db.collection('content').add({
            title,
            imageLink,
            body
        })
    }

  const classes = useStyles();
    return (
        
        <div>


            <Button variant="outlined" className={classes.button} onClick={handleOpen}>Add Content</Button>

            <Modal open={modalopen}  onClose={handleClose} className={classes.modal} >
                <div className={classes.paper}>
                    <form>
                    <TextField label="Enter Title 🚀" value={title} className={classes.textfield} onChange={e => handleTitle(e)}  />
                    <br/>
                    <br />
                    <TextField label="Image link 🖼" value={imageLink} className={classes.textfield} onChange={e => handleLink(e)}/> 
                    <br />
                    <br />
                    <CKEditor
                        value={body}
                          onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            setbody(data);
                        } }
                        
                        onInit = {editor => {
                            editor.editing.view.change(writer => {
                            writer.setStyle(
                                "height",
                                "15vw",
                                editor.editing.view.document.getRoot()
                            );
                            });
                            
                        }}
                        editor={ ClassicEditor }  
                        config={{placeholder: "Enter the content"},
                                {removePlugins: [ 'ImageUpload','MediaEmbed']}
                               
                            } 
                    />
                    <br/>
                   <Button type="submit" variant="contained" color="primary" onClick={e=>submitdata(e)}>Upload</Button>
    </form>
                </div >
      </Modal>
        </div>
    )
}
