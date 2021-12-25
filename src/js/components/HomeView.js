import React, { Component } from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ActionHome from 'material-ui/svg-icons/action/home';

import Rewardmain from '../../images/Rewardmain.jpeg'
import Rewards from '../../images/Rewards.png'

import PaperToolbar from './PaperToolbar';
import Customer from './Customer';

class HomeView extends Component {

    render() {
        return (
            <div>
                <PaperToolbar title="Home" iconElement={<ActionHome/>}/>
                <Customer />
                <Card className="inner-padding">
                    <CardHeader
                        title="Rewards Program"
                        avatar={Rewards}
                    />
                    <CardMedia>
                        <img src={Rewardmain} alt="Home"/>
                    </CardMedia>
                    <CardTitle title="Advanced Program" subtitle="Redefining Customer rewards" />
                    <CardText>
                      This application is designed for the Rewards program. Customers can choose the rewards according to it.Click on the Menu, to get started.
                    </CardText>
                </Card>
            </div>
        );
    }
}


export default HomeView;
