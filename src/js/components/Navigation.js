import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ActionHome from 'material-ui/svg-icons/action/home';
import ImageTagFaces from 'material-ui/svg-icons/image/tag-faces';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import MapsLocalOffer from 'material-ui/svg-icons/maps/local-offer';
import EditorAttachMoney from 'material-ui/svg-icons/editor/attach-money';

import github from '../../images/github.svg';

class Navigation extends Component {
    state = {drawerOpen: false};
    toggle = () => {
        this.setState({drawerOpen: !this.state.drawerOpen})
    };

    render() {
        return (
            <div>
                <AppBar
                    title="Rewards Program"
                    iconElementRight={<a href="https://github.com/jotkharoud/Rewards" alt="Source Code">
                            <img src={github} className="toolbar-icon" alt="Home"/></a>}
                    onLeftIconButtonTouchTap={this.toggle}
                />
                <Drawer open={this.state.drawerOpen}>
                    <AppBar
                        title="Rewards Program"
                        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                        onLeftIconButtonTouchTap={this.toggle}
                    />
                    <Menu onItemTouchTap={this.toggleDrawer}>
                        <MenuItem primaryText="Home" containerElement={<Link to="/home" />}
                                  leftIcon={<ActionHome />}/>
                        <Divider />
                        <MenuItem primaryText="Users" containerElement={<Link to="/users" />}
                                  leftIcon={<ImageTagFaces />}/>
                        <MenuItem primaryText="Leadership Board" containerElement={<Link to="/global-rewards" />}
                                  leftIcon={<HardwareVideogameAsset />}/>
                        <Divider />
                        <MenuItem primaryText="Promotions" containerElement={<Link to="/promotions" />}
                                  leftIcon={<MapsLocalOffer />}/>
                        <MenuItem primaryText="Add payment(Mock)" containerElement={<Link to="/add-payment" />}
                                  leftIcon={<EditorAttachMoney />}/>
                           <MenuItem primaryText="RewardsCard" containerElement={<Link to="/rewards-card" />}
                                leftIcon = {<IconButton />}/>     
                    </Menu>
                </Drawer>
                <div className="main-container">
                    <Paper zDepth={2}>
                        {this.props.children}
                    </Paper>
                </div>
            </div>
        );
    }
}


export default Navigation;



