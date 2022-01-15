import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export const CardComponent = ({size , imageId}) => {
    return(
        <Card >
            <CardMedia
                component="img"
                height= {size}
                image={`https://picsum.photos/id/${imageId}/${size}/${size}`}
                alt="Photo"
            />
      </Card>
    )
}