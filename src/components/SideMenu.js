import {useMemo,useState} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import SettingsIcon from '@mui/icons-material/Settings';
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
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { CreditCard, ListAlt } from '@mui/icons-material';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const drawerWidth = 170;

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
console.log(children);
    const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const sideBar = useMemo(() => {
    return [
        {
            title: 'Dashboard',
            icon: <HomeIcon /> ,
            link: "/dashboard",
        },
        {
            title: 'Assets',
            icon: <DashboardIcon /> ,
            link: "/assets",
        },
        {
            title: 'Bookings',
            icon: <ListAlt/> ,
            link: "/bookings",
        },
       
    ]
},[])

const sideBarBottom = useMemo(() => {
  return [
 
      {
          title: 'Income',
          icon: <TrendingUpIcon/> ,
          link: "/income",
      },
      {
          title: 'Outcome',
          icon: <TrendingDownIcon /> ,
          link: "/outcome",
      },
      {
        title: 'Bank Loans',
        icon: <CreditCard /> ,
        link: "/bankLoans",
    },
     
  ]
},[])




    return (
         <Box sx={{ backgroundColor:'rgb(227, 242, 253)', display: 'flex',  height: '100vh' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
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
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
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
        <Divider />
        <List>
        {sideBarBottom.map((side, index) => {
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
      </Drawer>
      <Box component="main" sx={{ backgroundColor:'rgb(227, 242, 253)', flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      {children}
      </Box>
    </Box>
    )
}

export default SideMenu
