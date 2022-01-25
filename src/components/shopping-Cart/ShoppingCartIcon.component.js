import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { connect } from 'react-redux';
import { Grid } from '@mui/material';

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


let CustomizedBadges = ({numberOfItemsInCart,TotalPrice}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
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
        <Typography sx={{ p: 2 }}>
          <Stack spacing={1}>
            <Item>
            <Grid container spacing={2}>
              <Grid item xs={8}>
              Item 1
              </Grid>
              <Grid item xs={8}>
              Item 2
              </Grid>
            </Grid>
            </Item>
            <Item>
              <Typography variant="subtitle2" gutterBottom component="div">
                TOTAL PRICE: {TotalPrice} €
              </Typography>
            </Item>
          </Stack>
        </Typography>
      </Popover>
    </div>
   

   
  );
}

const mapStateToProps = state => {
    return{
        numberOfItemsInCart : state.cartkey.numberOfItemsInCart,
        TotalPrice: state.cartkey.totalPrice
    }
}

CustomizedBadges = connect(mapStateToProps)(CustomizedBadges);

export default CustomizedBadges;