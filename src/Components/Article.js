import React from 'react'
import parse from 'html-react-parser';

export default function Article(props) {

   
    return (
        <div>
            <h2>{props.context.title}</h2>
            <img src={props.context.imageLink} alt="" height="50%" width="50%"/>
            <div style={{textAlign:'left', color:'black'}} >{parse(String(props.context.body))}</div>
        </div>
    )
}
