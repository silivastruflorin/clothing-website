import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { connect, useSelector } from 'react-redux';

//User defined
import {CartItem} from '../shop/cart-Item/cart-item.component';
import {CartItemsSelector, numberOfItemsSelector, TotalPriceSelector} from './../../redux/selectors/selectors';
import { Box } from '@mui/material';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


let CustomizedBadges = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const numberOfItemsInCart = useSelector(numberOfItemsSelector);
  const cartItems = useSelector(CartItemsSelector);
  const TotalPrice = useSelector(TotalPriceSelector);
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : null;

  return (
    <>
    <IconButton aria-label="cart" onClick={handleClick}>
      <StyledBadge badgeContent={numberOfItemsInCart} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box sx={{ p: 2 }}>
          {
            numberOfItemsInCart !== 0 ? 
                                        <Stack spacing={1}>
                                          <Item>
                                            <CartItem itemsArray={cartItems} />
                                          </Item>
                                          <Item>
                                            <Typography variant="subtitle2" gutterBottom component="div">
                                              TOTAL PRICE: {TotalPrice} €
                                            </Typography>
                                          </Item>
                                        </Stack>
                                      : "Cart is empty"
            }
        </Box>
      </Popover>
    </>
   

   
  );
}

// Commented because it was replaced by useSelector to connect to the store an get data based on selector created in selectors.js
// const mapStateToProps = state => {
//     return{
//         numberOfItemsInCart : state.cartkey.numberOfItemsInCart, // old aproach without using Selectors
//         TotalPrice: state.cartkey.totalPrice,                    // old aproach without using Selectors
//         cartItems: CartItemsSelector(state)                      // new aproach using selectors
//     }
// }

// CustomizedBadges = connect(mapStateToProps)(CustomizedBadges);

export default CustomizedBadges;