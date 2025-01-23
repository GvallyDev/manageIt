import { useMemo, useState } from 'react';
import './SideBar.css';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { BottomNavigation } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import { CreditCard, ListAlt } from '@mui/icons-material';


const drawerWidth = 170;
const isMobile = window.innerWidth  < 750

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );
  
const SideMenu = ({children}) => {

    const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const {pathname} = useLocation()
  const disabeled = (pathname === '/register'  || pathname ===  '/sign-in')

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


const bottonNavIconsStyles = {
color:'#878787',
 fontSize:'30px'
}
  const sideBar = useMemo(() => {
    return [
        {
            title: 'Dashboard',
            icon: <HomeIcon
            sx={bottonNavIconsStyles}
             /> ,
            link: "/dashboard",
        },
        {
            title: 'Assets',
            icon: <DashboardIcon
            sx={bottonNavIconsStyles}
             /> ,
            link: "/assets",
        },
        {
            title: 'Bookings',
            icon: <ListAlt
            sx={bottonNavIconsStyles}
            /> ,
            link: "/bookings",
        },
       
    ]
},[])

const sideBarBottom = useMemo(() => {
  return [
 
      // {
      //     title: 'Income',
      //     icon: <TrendingUpIcon
      //     sx={bottonNavIconsStyles}
      //     /> ,
      //     link: "/income",
      // },
      // {
      //     title: 'Outcome',
      //     icon: <TrendingDownIcon 
      //     sx={bottonNavIconsStyles}
      //     /> ,
      //     link: "/outcome",
      // },
      {
        title: 'Bank Loans',
        icon: <CreditCard 
        sx={bottonNavIconsStyles}
        /> ,
        link: "/bankLoans",
    },
     
  ]
},[])

if(disabeled){
  return children
}
    return !isMobile ? (
         <Box sx={{ backgroundColor:'rgb(227, 242, 253)', display: 'flex',  height: '100vh' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundImage: 'linear-gradient(to right, #00695c, #007c91)'}}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer  variant="permanent" open={open}>
        <DrawerHeader sx={{ backgroundImage: 'linear-gradient(to left, #009688, #007c91)'}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ backgroundImage: 'linear-gradient(to left, #009688, #007c91)'}}>
          {sideBar.map((side, index) => {
                return (
                  <>
              <NavLink style={{all:"unset"}} key={index} to={side.link}>
                <ListItem button key={side.title}>
                  <ListItemIcon>
                    {side.icon}
                  </ListItemIcon>
                  <ListItemText primary={side.title} />
                </ListItem>
                </NavLink>
           </>
                )
           
          }
           
          
          )}
        </List>
        
        <List sx={{ backgroundImage: 'linear-gradient(to left, #009688, #007c91)', height:'100vh'}}>
        {sideBarBottom.map((side, index) => {
                return (
                  <>
              <NavLink style={{all:"unset"}} key={index} to={side.link}>
                <ListItem style={{all:"unset"}}>
                  <ListItemIcon>
                    {side.icon}
                  </ListItemIcon>
                  <ListItemText primary={side.title} />
                </ListItem>
                </NavLink>
           </>
                )
          }
          )}
        </List>
      </Drawer>
      <Box component="main" sx={{ backgroundColor:'#e5ffff', flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      {children}
      </Box>
    </Box>
    ):
    (<>
    
    {children}
    <BottomNavigation
    className='bottom-navigation'
      showLabels
      value={value}
      onChange={(event, newValue) => {
    
        setValue(newValue);
      }}
    >
    
      {[...sideBar,...sideBarBottom,].map(el => {

        return(
          <NavLink 
          to={el.link}
          className={({ isActive }) => {
            const linkClasses = ['ee']
            if (isActive) linkClasses.push('isActive');
            
            return linkClasses.join(" "); // returns "registerButton" or "registerButton active"
          }}
          style={{display:'flex',justifyContent:'center', alignItems:'center', width:'100%'}}
          >
       
            <ListItemIcon
            sx={{display:'flex',justifyContent:'center', alignItems:'center'}}
            >
              {el.icon}
            </ListItemIcon>
          
          </NavLink>
        )
      })}
   
    </BottomNavigation>
    </>)
     
}

export default SideMenu
