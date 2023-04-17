import React, { Component } from 'react';
import { Section } from 'components/Section';
import { Feedback } from 'components/Feedback/Feedback';
import { Statistics } from 'components/Statistics';

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onLeaveFeedback = e => {
        const option = e.target.textContent;
        this.setState(state => ({ [option]: this.state[option] + 1 }));
    };

    render() {
        return (
            <React.Fragment>
                <Section title="Please leave feedback">
                    <Feedback
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.onLeaveFeedback}
                    ></Feedback>
                </Section>
                <Section title="Statistics">
                    <Statistics
                        valueGood={this.state.good}
                        valueNeutral={this.state.neutral}
                        valueBad={this.state.bad}
                    />
                </Section>
            </React.Fragment>
        );
    }
}
