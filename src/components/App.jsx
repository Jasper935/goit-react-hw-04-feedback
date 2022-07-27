import { Component } from 'react';
import { Section } from './Section/Section';
import { Statistic } from './Statistic/Statistic';
import { Feedback } from './Feedback/Feedback';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClick = evt => {
    this.setState(prevState =>{
      return {[evt.target.name]: prevState[evt.target.name] + 1}}
    );
  };

  totalFeedbacks=()=>{
   return Object.values(this.state).reduce((acc, el)=>
    acc+=el ,0)
  }
  percentage=()=>{
   return  Math.round((this.state.good*100)/this.totalFeedbacks())
  }

  render() {
    return (
      <>
        <Section title="Please leave a feedback">
          <Feedback elements={Object.keys(this.state)} onClick={this.onClick} />
        </Section>
        <Section title="Statistics">
          {this.totalFeedbacks()>0?<Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.totalFeedbacks()}
            positivePercentage={this.percentage()}
          />:<p>There is no feedback</p>}
        </Section>
      </>
    );
  }
}
