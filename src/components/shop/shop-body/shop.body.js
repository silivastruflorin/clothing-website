import * as React from 'react';
import { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import {connect} from 'react-redux';
import {AddItemToCart} from '../../../redux/cart/cart.actions';

function ItemsDisplay({additem}) {
  const [itemData, setItemsdata] = useState([]);
  const [whenToUpdate, setwhenToUpdate] = useState(0);
  const [itemDataFiltered, setitemDataFiltered] = useState([]);
  
  // Similar to componentDidMount and componentDidUpdate:   //I WILL Replace it later with Saga middleware
  useEffect(() => {
    // Get data from API
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
            .then(res=>res.json())
            .then(json=>{
              // console.log("received from server",json)
              setItemsdata(json)
              setitemDataFiltered(json) //initialize first with all items
            })
    
},[whenToUpdate]); /*by passing the whenToUpdate we break the infinite loop of state update -sideeffect- rerender compoment.
                  Checks if whenToUpdate has changed if not changed stop loop. If we remember after each render of a component the sideeffect is called
                  and also after each time the state is changed the the componenent is rerendered.
                  */

  const hangleSearch = (value) => {
    // set itemDataFiltered based on value from input box
    setitemDataFiltered(itemData.filter(item => item.title.toUpperCase().includes(value.toUpperCase())));
  }

  const hangleBuyClick = (item) => {
   
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
        onSelect={(e)=> {hangleSearch(e.target.value)}}
        onChange={(e)=> {hangleSearch(e.target.value)} }
      />
        </ListSubheader>
    </ImageListItem>
      {itemDataFiltered.map((item) => (
        <ImageListItem key={item.image}>
          <img
            src={`${item.image}?w=248&fit=crop&auto=format`}
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={`${item.price} Euro`}
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
  </ImageList>
  );
}

const mapDispatchToProps = dispatch => {
  return {
      additem : (item) => {dispatch(AddItemToCart(item))}
  }
}

ItemsDisplay = connect(null,mapDispatchToProps)(ItemsDisplay)

export default ItemsDisplay;