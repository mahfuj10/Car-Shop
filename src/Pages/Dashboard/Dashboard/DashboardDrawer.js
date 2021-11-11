import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useHistory } from 'react-router';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/UseAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Review from '../AddReview/AddReview';
import MyOrder from '../MyOrder/MyOrder';
import ManageOrder from '../ManageOrder/ManageOrder';
import AddCars from '../AddCars/AddCars';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { user, admin, logOut } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const history = useHistory();

    const hadnaleHistory = () => {
        history.push('/home')
    }
    const drawer = (
        <Box>
            <Toolbar />
            <Divider />
            <Box sx={{ textAlign: "center", mt: 5 }}>
                <Link to={`${url}/myOrder`}><Button color="inherit">My Order</Button></Link> <br />
                <Link to={`${url}/review`}><Button color="inherit">Review</Button></Link> <br />
                {admin && <Box>
                    <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link><br />
                    <Link to={`${url}/addCars`}><Button color="inherit">Add Cars</Button></Link>
                    <Link to={`${url}/manageOrder`}><Button color="inherit">Manage All Order</Button></Link>
                </Box>}
            </Box>
            {/* <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: "white"
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ color: "black" }} noWrap component="div">
                        Dashboard
                    </Typography>
                    <Box className="ms-auto d-flex align-items-center gap-4">
                        <Typography onClick={hadnaleHistory} variant="body2" sx={{ color: "black" }} noWrap component="div">
                            Home
                        </Typography>
                        <Typography variant="body2" sx={{ color: "black" }} noWrap component="div">
                            <Button variant="text" onClick={logOut}>Log Out</Button>
                        </Typography>
                        <Typography variant="body2" sx={{ color: "black" }} noWrap component="div">
                            {user?.displayName}
                        </Typography>
                    </Box>
                </Toolbar>

            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route path={`${path}/myOrder`}>
                        <MyOrder />
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addCars`}>
                        <AddCars />
                    </AdminRoute>
                    <Route path={`${path}/review`}>
                        <Review />
                    </Route>
                    <AdminRoute path={`${path}/manageOrder`}>
                        <ManageOrder />
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
