import React from 'react';
import { Notification } from './Notificatoin';

export class Statistics extends React.Component {

    countTotalFeedback= () => this.props.valueGood + this.props.valueNeutral + this.props.valueBad;
    countPositiveFeedbackPercentage=()=> this.props.valueGood / this.countTotalFeedback() * 100;
    

    render() {
        const {valueGood, valueNeutral, valueBad} = this.props;
        const total = this.countTotalFeedback();
        const positive = this.countPositiveFeedbackPercentage();
        if (total === 0) return <Notification message="There is no feedback"/>;
        return(
        <div>
            <div className="box-result">
                <p>Good: {valueGood}</p>
                <p>Neutral: {valueNeutral}</p>
                <p>Bad: {valueBad}</p>
                <p>Total: {total}</p>
                <p>Positive feedback: {positive}%</p>
            </div>
        </div>
    )}
};