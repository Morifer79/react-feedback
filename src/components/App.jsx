import React from 'react';
import { Container } from './App.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state =>
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));

  countTotalFeedback = ({ good, neutral, bad } = this.state) =>
    good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good } = this.state) =>
    Math.round((good / this.countTotalFeedback()) * 100) || 0;

  render() {
    const addFeedback = this.onLeaveFeedback;
    const options = ['good', 'neutral', 'bad'];
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback;
    const positivePercentage = this.countPositiveFeedbackPercentage;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={addFeedback} />
        </Section>
        <Section title="Statistics">
          {totalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
