import * as React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';


import {connect} from 'react-redux';
import {AddItemToCart} from '../../../redux/cart/cart.actions';
import {RatingsSelector,ProductsSelector} from '../../../redux/selectors/selectors';

let ItemsDisplay = ({productCategory, getRatings, isRetrevingData}) => {
  const [itemData, setItemsdata] = useState([]);
  const [itemDataFiltered, setitemDataFiltered] = useState([]);
  let ratings = useSelector(RatingsSelector);
  let products = useSelector(ProductsSelector);

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

useEffect(() => {
        //Get products from api using SAGA
        dispatch({type: 'GET_PRODUCTS_REQUEST', payload: productCategory });
        // setitemDataFiltered(products);
        // setItemsdata(products);
},[productCategory]);
 
useEffect(() => {
  //Get products from api using SAGA
  // dispatch({type: 'GET_PRODUCTS_REQUEST', payload: productCategory });
  setitemDataFiltered(products);
  setItemsdata(products);
},[products]);

  const hangleSearch = (value) => {
    // set itemDataFiltered based on value from input box
    setitemDataFiltered(itemData.filter(item => item.title.toUpperCase().includes(value.toUpperCase())));
  }

  return (
    <ImageList /*sx={{ width: 500, height: 450 }}*/ cols={4}>
    <ImageListItem key="Subheader" cols={4}>
      <ListSubheader component="div" >
        {/* A search bar to be added here */}
        <Autocomplete 
        sx={{ width: 300}}
        id="free-solo-demo"
        freeSolo
        options={itemData?.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="Search..." />}
        onSelect={(e)=> {hangleSearch(e.target.value.toString())}}
        onChange={(e)=> {hangleSearch(e.target.value.toString())} }
      />
        </ListSubheader>
    </ImageListItem>
      {itemDataFiltered?.map((item) => (
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
              ()=> getRatings(item)
            }
            onMouseOver={handlePopoverOpen}
            onMouseLeave={
              handlePopoverClose
            }
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
                onClick={()=>dispatch(AddItemToCart(item))}
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
            isRetrevingData ? 'Loading...' : ( 
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

const mapDispatchToProps = dispatch => {
  return {
      getRatings : (item)  => {dispatch({type: 'ITEM_INFO_REQUESTED', payload: item})} //saga action is dipatched
  }
}

const mapStateToProps = (state) => {
  return{
    //ratings: RatingsSelector(state),
    isRetrevingData : state.cartkey.isRetrevingData //old way without using selectors
  }
}

ItemsDisplay = connect(mapStateToProps,mapDispatchToProps)(ItemsDisplay)

export default ItemsDisplay;