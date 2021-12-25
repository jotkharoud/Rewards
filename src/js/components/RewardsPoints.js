import React, { Component } from 'react';
import RewardsCard from "./RewardsCard";

export default class RewardsPoints extends Component {
  constructor(props) {
    super(props);
      this.state = {
        transit: this.props.transitions
    };
  }

  render() {
    const List = this.state.transit;
    return (
      <div>
        <h2>{this.props.month}</h2>
        <div>
        {List.map((eachTransition, i) => (
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