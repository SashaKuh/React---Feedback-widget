import { BtnFeedback } from './BtnFeedback';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (type) =>{
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1)
        break;
      case 'bad':
        setBad(bad + 1)
        break;
      default:
        break;
    }
  }

  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage = totalFeedback > 0 ? ((good / totalFeedback) * 100).toFixed(2) : 0;

  const feedbackTypes = ['good', 'neutral', 'bad'];


  return(
    <>
        <Section title={'Please leave feedback'}>
          <BtnFeedback
            feedbackTypes={feedbackTypes}
            handleFeedback={handleFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
  )
}