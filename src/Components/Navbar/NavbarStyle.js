// import { useMediaQuery } from '@material-ui/core';
// import { makeStyles,alpha} from '@material-ui/core/styles';
import { makeStyles,alpha,} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) =>({
    Navbar:{
        width: "100%",
        height: "10vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 30px",
        fontFamily: "Poppins",

    },
searchbr:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0px 10px",
    fontFamily: "Poppins",
},


search: {
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    borderRadius: "10px",
    color: "white",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    [theme.breakpoints.down('sm')]:{
      width: "100px",
      placeHolder: "none",
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      // marginLeft: theme.spacing(1),
      // width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]:{
      display: "none",
    },
    // width: "100%",
  },
  inputRoot: {
    color: 'inherit',
    marginRight: "20px",
    [theme.breakpoints.down('sm')]:{
      display: "none",
    },

    // left: "50px",
    // paddingLeft: "50px",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon,
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },


  links:{
    "& Button":{
      background: "linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%)",
      borderRadius: "30px",
      color: "white",
      fontWeight: "bold",
      [theme.breakpoints.down('sm')]:{
          // width: "155px",
          display: "none",
      },
      [theme.breakpoints.down('xs')]:{
        background: "blue",
        width: "200px",
        height: "200px",
      
      },
    },
  },
  link1:{
    fontSize: "20px",
     textDecoration: "none",
     color: "white",
     padding: "0px 30px",
     [theme.breakpoints.down('sm')]:{
        padding: "0px 15px",
      },
      [theme.breakpoints.down('xs')]:{
        display: "none",
      },
    
  },



  drawer: {
    width: "200px",
    flexShrink: 0,
  },
  drawerPaper: {
    width: "200px",
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  
}))