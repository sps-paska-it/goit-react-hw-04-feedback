import React, { Component } from 'react';
import { Section } from 'components/Section';
import { Feedback } from 'components/Feedback/Feedback';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return (good / this.countTotalFeedback()) * 100;
    };

    onLeaveFeedback = e => {
        const option = e.target.textContent;
        this.setState(state => ({ [option]: this.state[option] + 1 }));
    };

    render() {
        const { good, neutral, bad } = this.state;
        const totalFeedback = this.countTotalFeedback();
        const positiveFeedbackPercentage =
            this.countPositiveFeedbackPercentage();
        return (
            <React.Fragment>
                <Section title="Please leave feedback">
                    <Feedback
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.onLeaveFeedback}
                    ></Feedback>
                </Section>
                <Section title="Statistics">
                    {totalFeedback === 0 ? (
                        <Notification message="There is no feedback" />
                    ) : (
                        <Statistics
                            valueGood={good}
                            valueNeutral={neutral}
                            valueBad={bad}
                            total={totalFeedback}
                            positiveFeedback={positiveFeedbackPercentage}
                        />
                    )}
                </Section>
            </React.Fragment>
        );
    }
}
