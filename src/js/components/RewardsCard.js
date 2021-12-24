import React, { Component } from 'react'

export default class RewardsCard extends Component {
  constructor(props) {
    super(props);
      this.state = {
        purchaseN: this.props.purchased,
        rewards1: 0,
        rewards2: 0
    };
  }

  calculateRewards = () => {
    // console.log("purchasereward", this.state.purchaseN);
    let purchasedT = this.props.purchased;
    let totalRewards = 0;
    if(500 < purchasedT && purchasedT < 1000) {
      let getRewards1 = purchasedT - 500;
        totalRewards += getRewards1;
    }
    if(purchasedT > 1000) {
      let getRewards2 = (purchasedT - 1000) * 2;
      totalRewards += getRewards2;
    }

    return totalRewards;
  }
  render() {    

    return (
      <div>
        <p>{this.props.date}</p>
        <p>{this.props.purchase}</p>
        <p>{this.calculateRewards()}</p>
      </div>
    )
  }

}