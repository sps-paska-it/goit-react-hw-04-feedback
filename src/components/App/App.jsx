import { useState } from 'react';
import { Section } from 'components/Section';
import { Feedback } from 'components/Feedback/Feedback';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

export const App = () => {
    const options = ['good', 'neutral', 'bad'];
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const countTotalFeedback = () => good + neutral + bad;

    const positiveFeedbackPercentage = () =>
        (good / countTotalFeedback()) * 100;

    const leaveFeedback = option => {
        switch (option) {
            case options[0]:
                setGood(state => state + 1);
                break;
            case options[1]:
                setNeutral(state => state + 1);
                break;
            case options[2]:
                setBad(state => state + 1);
                break;
            default:
                break;
        }
    };
    return (
        <>
            <Section title="Please leave feedback">
                <Feedback
                    options={options}
                    onLeaveFeedback={leaveFeedback}
                ></Feedback>
            </Section>
            <Section title="Statistics">
                {countTotalFeedback() === 0 ? (
                    <Notification message="There is no feedback" />
                ) : (
                    <Statistics
                        valueGood={good}
                        valueNeutral={neutral}
                        valueBad={bad}
                        total={countTotalFeedback()}
                        positiveFeedback={positiveFeedbackPercentage()}
                    />
                )}
            </Section>
        </>
    );
};

// import React, { Component } from 'react';
// import { Section } from 'components/Section';
// import { Feedback } from 'components/Feedback/Feedback';
// import { Statistics } from 'components/Statistics';
// import { Notification } from 'components/Notification';

// export class App extends Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0,
//     };

//     countTotalFeedback = () => {
//         const { good, neutral, bad } = this.state;
//         return good + neutral + bad;
//     };
//     countPositiveFeedbackPercentage = () => {
//         const { good } = this.state;
//         return (good / this.countTotalFeedback()) * 100;
//     };

//     onLeaveFeedback = e => {
//         const option = e.target.textContent;
//         this.setState(state => ({ [option]: this.state[option] + 1 }));
//     };

//     render() {
//         const { good, neutral, bad } = this.state;
//         const totalFeedback = this.countTotalFeedback();
//         const positiveFeedbackPercentage =
//             this.countPositiveFeedbackPercentage();
//         return (
//             <React.Fragment>
//                 <Section title="Please leave feedback">
//                     <Feedback
//                         options={Object.keys(this.state)}
//                         onLeaveFeedback={this.onLeaveFeedback}
//                     ></Feedback>
//                 </Section>
//                 <Section title="Statistics">
//                     {totalFeedback === 0 ? (
//                         <Notification message="There is no feedback" />
//                     ) : (
//                         <Statistics
//                             valueGood={good}
//                             valueNeutral={neutral}
//                             valueBad={bad}
//                             total={totalFeedback}
//                             positiveFeedback={positiveFeedbackPercentage}
//                         />
//                     )}
//                 </Section>
//             </React.Fragment>
//         );
//     }
// }
