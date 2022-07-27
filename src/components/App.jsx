import {  useState } from 'react';

import { Section } from './Section/Section';
import { Statistic } from './Statistic/Statistic';
import { Feedback } from './Feedback/Feedback';
export const App =()=> {
 const [good, setGood ]= useState(0) 
 const [neutral, setNeutral] = useState(0) 
 const [bad, setBad] = useState(0)  
 
  
 const onClick = evt => {
switch(evt.target.name){
  case 'good':  setGood(prev=>prev+1)
  break;
  case 'neutral': setNeutral((prev=>prev+1))
  break;
  case 'bad': setBad((prev=>prev+1))
  break;
  default: return
}


    
  };

  const totalFeedbacks=()=>{
   return good+neutral+bad
  }
  const percentage=()=>{
   return  Math.round((good*100)/totalFeedbacks())
  }

  
    return (
      <>
        <Section title="Please leave a feedback">
          <Feedback elements={['good', 'neutral', 'bad']} onClick={onClick} />
        </Section>
        <Section title="Statistics">
          {totalFeedbacks()>0?<Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks()}
            positivePercentage={percentage()}
          />:<p>There is no feedback</p>}
        </Section>
      </>
    );
  
}
