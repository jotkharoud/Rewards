import React, { Component } from 'react';
import RewardsCard from "./RewardsCard";

export default class RewardsPoints extends Component {
  constructor(props) {
    super(props);
      this.state = {
        transitionArr: this.props.transitions
    };
  }

  render() {
    const transitionList = this.state.transitionArr;
    return (
      <div>
        <h2>{this.props.month}</h2>
        <div>
        {transitionList.map((eachTransition, i) => (
          <RewardsCard
          {...eachTransition}
          key={eachTransition.id}
          purchased={eachTransition.purchase}
          />
        ))}
        </div>
      </div>
    )
  }
}

export default RewardsPoints;