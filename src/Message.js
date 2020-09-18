//import { CardContent, Typography } from '@material-ui/core';
//es7 
import React from 'react'; 
import { Card , CardContent , Typography} from '@material-ui/core';

export default function Message(props) {
    return (

            <Card>
                <CardContent>
                    <Typography
                    color = "white"
                    variant = "h5"
                    component = "h2"
                    >
                        <h2>{props.username}: {props.text}</h2>

                    </Typography>
                </CardContent>
            </Card>
            
    )
}
