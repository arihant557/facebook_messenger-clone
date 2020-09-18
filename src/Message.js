//import { CardContent, Typography } from '@material-ui/core';
//es7 
import React from 'react'; 
import { Card , CardContent , Typography} from '@material-ui/core';
import './Message.css';

export default function Message(props) {
    return (

            <Card className = "message">
                <CardContent>
                <Typography
                    color = "white"
                    variant = "h5"
                    component = "h2"
                    >
                    {props.username}: {props.text}
                 </Typography>
                </CardContent>
            </Card>
            
    )
}
