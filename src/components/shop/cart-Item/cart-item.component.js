import { Grid } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';

export const CartItem = ({itemsArray}) => {
    return(
        itemsArray.map(item => {
            return(
                <Grid container spacing={2} alignItems="center">
                        <Grid key={item.image} item xs={4}>
                            <ImageListItem key={item.image} sx={{ width: 50, height: 50 }}>
                                <img
                                    src={`${item.image}?w=50&h=50&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="eager"
                                />
                                </ImageListItem>
                        </Grid>
                        <Grid key={item.price} item xs={8}>
                            Price:{item.price} €
                        </Grid>
                </Grid>     
            )
        })    
    )  
}