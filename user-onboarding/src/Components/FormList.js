import React from 'react'
import {Card } from 'semantic-ui-react'

export default function Form(props) {
    const {user} = props
    
    
    return (
        <div>
            {user.map(item =>(
                <div key = {item.id} style = {{ border: '20px groove crimson' ,width: '30%',margin: '30px'}}>
                    <Card>
                        <Card.Content style ={{backgroundColor:'green'}}>
                            <Card.Header style = {{color:'whitesmoke'}}>Name: <br/> {item.name}</Card.Header>
                            <Card.Meta style = {{color:'whitesmoke'}}>Title:<br/> Co-Worker</Card.Meta>
                            <Card.Description style = {{color:'whitesmoke'}}>Email: {item.email}</Card.Description>
                        </Card.Content> 
                    </Card>
                    
                </div>
               
                
            ))}
        </div>
    )
}
