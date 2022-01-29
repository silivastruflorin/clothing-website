import * as React from 'react';
import { useState, useEffect } from 'react';
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
import {RatingsSelector} from '../../../redux/selectors/selectors';

let ItemsDisplay = ({productCategory,additem,getRatings,ratings}) => {
  const [itemData, setItemsdata] = useState([]);
  const [whenToUpdate, setwhenToUpdate] = useState(0);
  const [itemDataFiltered, setitemDataFiltered] = useState([]);


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
  
  // Similar to componentDidMount and componentDidUpdate:   //I WILL Replace it later with Saga middleware
  useEffect(() => {
    // Get data from API
    fetch(`https://fakestoreapi.com/products/category/${productCategory}`)
            .then(res=>res.json())
            .then(json=>{
              // console.log("received from server",json)
              setItemsdata(json)
              setitemDataFiltered(json) //initialize first with all items
            })
    
},[whenToUpdate]); /*by passing the [whenToUpdate] we break the infinite loop of state update -sideeffect- rerender compoment.
                  If whenToUpdate did not changed then useeffect does not executes.If we want the useEffect to execute only 
                  on the component mount then we pass just an empty array [],
                  We can use multiple useEfects on the same page.For example one when the component mounts (by passing []) and another one 
                  where we can pass [someVariable,someAnotherVariable] and it will execute only when someVariable or someAnotherVariable will change
                  */

  const hangleSearch = (value) => {
    // set itemDataFiltered based on value from input box
    setitemDataFiltered(itemData.filter(item => item.title.toUpperCase().includes(value.toUpperCase())));
  }

  return (
    <ImageList /*sx={{ width: 500, height: 450 }}*/ cols={4}>
    <ImageListItem key="Subheader" cols={4}>
      <ListSubheader component="div">
        {/* A search bar to be added here */}
        <Autocomplete 
        sx={{ width: 300 }}
        id="free-solo-demo"
        freeSolo
        options={itemData.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="Search..." />}
        onSelect={(e)=> {hangleSearch(e.target.value.toString())}}
        onChange={(e)=> {hangleSearch(e.target.value.toString())} }
      />
        </ListSubheader>
    </ImageListItem>
      {itemDataFiltered.map((item) => (
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
                onClick={()=>additem(item)}
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
              <Typography sx={{ p: 1 }}>
                Rating: {ratings.rate}
                Stock: {ratings.count}
              </Typography>
        </Popover>
  </ImageList>  
  );
}

const mapDispatchToProps = dispatch => {
  return {
      additem : (item) => {dispatch(AddItemToCart(item))},
      getRatings : (item)  => {dispatch({type: 'ITEM_INFO_REQUESTED', payload: item})} //saga action is dipatch
  }
}

const mapStateToProps = (state) => {
  return{
    ratings: RatingsSelector(state)
  }
}

ItemsDisplay = connect(mapStateToProps,mapDispatchToProps)(ItemsDisplay)

export default ItemsDisplay;