import React from 'react'
import {Card } from 'semantic-ui-react'

export default function Form(props) {
    const {user} = props
    console.log(user)
    
    
    return (
        <div>
            {user.map(item =>(
                <div key = {item.id}  style = {{display:'flex',flexDirection:'row',margin: '30px'}}>
                    
                        <Card.Content style ={{backgroundColor:'green',border: '20px groove crimson',borderRadius:'20px' ,width: '30%',padding:'20px'}}>
                            <Card.Header style = {{color:'whitesmoke'}}>Name: {item.name}</Card.Header>
                            <Card.Meta style = {{color:'whitesmoke'}}>Title: {item.role}</Card.Meta>
                            <Card.Description style = {{color:'whitesmoke'}}>Email: {item.email}</Card.Description>
                        </Card.Content> 
                    
                    
                </div>
               
                
            ))}
        </div>
    )
}
