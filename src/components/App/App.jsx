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

    onGood = () => {
        this.setState(state => ({ good: this.state.good + 1 }));
    };
    onNeutral = () => {
        this.setState(state => ({ neutral: this.state.neutral + 1 }));
    };
    onBad = () => {
        this.setState(state => ({ bad: this.state.bad + 1 }));
    };

    render() {
        return (
            <React.Fragment>
                <Section title="Please leave feedback">
                    <Feedback
                        onBtnGood={this.onGood}
                        onBtnNeutral={this.onNeutral}
                        onBtnBad={this.onBad}
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
