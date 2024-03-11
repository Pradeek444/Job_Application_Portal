import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Button, List, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import { Suspense } from 'react';
import ViewJobs from '../../components/ViewJobs';
import ViewApplications from './ViewApplications';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function UserDashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentView, setCurrentView] = React.useState('dashboard');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    history.push('/profile');
    handleClose();
  };

  const handleLogoutClick = () => {
    history.push('/landing');
    handleClose();
  };

  const handleViewJobsClick = (view) => {
    setCurrentView(view);
    handleClose();
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Suspense fallback={<Loader />}>
        <AppBar position="fixed" open={open} sx={{backgroundColor:"rgba(0, 0, 0, 0.9)"}}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <div>
              <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={anchorEl ? 'true' : undefined}
                onClick={handleClick}
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                getContentAnchorEl={null}
              >
                <MenuItem component={Link} to="/profile" onClick={handleProfileClick}>
                  Profile
                </MenuItem>
                <MenuItem component={Link} to="/" onClick={handleLogoutClick}>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Suspense>
      <Drawer
  sx={{
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      color: "white",
      width: drawerWidth,
      boxSizing: 'border-box',
    },
  }}
  variant="persistent"
  anchor="left"
  open={open}
>
  <DrawerHeader>
    <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
      {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </IconButton>
  </DrawerHeader>
  <Divider sx={{ backgroundColor: "white" }} />
  <List>
    {['View Jobs', 'View Applications', 'Payment History'].map((text, index) => (
      <div key={text}>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleViewJobsClick(text)}>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
        {index !== ['View Jobs', 'View Applications', 'Payment History'].length - 1 && <Divider sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} />}
      </div>
    ))}
  </List>
  <Divider sx={{ backgroundColor: "white" }} />
</Drawer>

      <Main open={open}>
        <DrawerHeader />
        <Box className="view">
          {currentView === 'View Jobs' && <ViewJobs />}
          {currentView === 'View Applications' && <ViewApplications />}
        </Box>
      </Main>
    </Box>
  );
}
