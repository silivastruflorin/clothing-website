import React from "react";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from '@mui/material/Typography';
import { push } from "connected-react-router";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });

const ImageButton = styled(ButtonBase)(({ theme , height}) => ({
    position: "relative",
    height: height ,
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15
      },
      "& .MuiImageMarked-root": {
        opacity: 0
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor"
      }
    }
  }));

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  }));
  
  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.3,
    transition: theme.transitions.create("opacity")
  }));
  


const CardComponent = ({imageId,size,description,page,gotoPage}) => {
    return(
        <ImageButton
            focusRipple
            key={''}
            style={{
            width: '100%',
            }}
            height={size}
            onClick={(e) => {
              gotoPage(page)
            }}
        >
            <ImageSrc style={{ backgroundImage: `url(https://picsum.photos/id/${imageId}/${size}/${size})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
                <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                    position: 'relative',
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                >
                  {description}

                </Typography>
            </Image>
        </ImageButton>
    )
}

const mapDispatchToProps = (dispatch) => {
  return{
    gotoPage :(path) => dispatch(push(path))
  }
   
}


export default connect(null,mapDispatchToProps)(CardComponent);