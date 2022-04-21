import { useState, useEffect } from 'react';
import {useDispatch, useSelector, connect} from 'react-redux'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

//User defined
// import { AddItemToCart} from '../../../redux/cart/cart.actions';  //REPLACED BY SHOPSLICE
import { RatingsSelector, ProductsSelector, InfoIsRetreivedSelector, IsRetrevingProductsSelector} from '../../../redux/selectors/selectors';
import { ADD_ITEMS_TO_CART, ITEM_INFO_REQUESTED } from '../../../redux/reducers/cart/cart.reducer.slice';

let ItemsDisplay = () => {
  const [filter, setFilter] = useState('');
  let ratings = useSelector(RatingsSelector);
  let products = useSelector(ProductsSelector);
  let isRetrevingInfoProduct = useSelector(InfoIsRetreivedSelector);
  let isRetrevingProducts = useSelector(IsRetrevingProductsSelector);

  const dispatch= useDispatch()
  //popOver
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  // end popOver 

  return (
    <ImageList /*sx={{ width: 500, height: 450 }}*/ cols={4}>
    <ImageListItem key="Subheader" cols={4}>
      <ListSubheader component="div" >
        {/* A search bar to be added here */}
        <Autocomplete 
        sx={{ width: 300}}
        id="free-solo-demo"
        freeSolo
        options={products?.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="Search..." />}
        onSelect={(e)=> setFilter(e.target.value.toString())}
        onChange={(e)=> setFilter(e.target.value.toString())}
      />
        </ListSubheader>
    </ImageListItem>
      { !isRetrevingProducts  && products?.filter(item => item.title.toUpperCase().includes(filter?.toUpperCase())).map((item) => (
        <ImageListItem key={item.image} >
          <img
            src={`${item.image}`}
            srcSet={`${item.image}`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={`${item.price} Euro`}
            onMouseEnter={
              ()=> dispatch(ITEM_INFO_REQUESTED(item))
            }
            onMouseOver={handlePopoverOpen}
            onMouseLeave={
              handlePopoverClose
            }
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
                onClick={()=>dispatch(ADD_ITEMS_TO_CART(item))}
                >
                 buy
              </IconButton>
            }
        />
      </ImageListItem>
    ))}
      <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: 'none',
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
         { 
            isRetrevingInfoProduct ? 'Loading...' : ( 
                                              <Typography sx={{ p: 1 }}>
                                              Rating: {ratings.rate} 
                                              <span> </span> 
                                              Stock: {ratings.count}
                                             </Typography>
                                             )
          }
        </Popover>
  </ImageList>  
  );
}

//Entire logic of connect is replaced by using hooks useDispatch and useSelector

// const mapDispatchToProps = dispatch => {
//   return {
//       getRatings : (item)  => {} //saga action is dipatched
//   }
// }

// const mapStateToProps = (state) => {
//   return{
//     //ratings: RatingsSelector(state),
//     isRetrevingData : state.cartkey.isRetrevingData //old way without using selectors
//   }
// }

// ItemsDisplay = connect(mapStateToProps,mapDispatchToProps)(ItemsDisplay)

export default ItemsDisplay;