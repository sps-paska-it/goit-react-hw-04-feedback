import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from './Notificatoin';
import { StatisticsStyle } from './Statistics.styled';

export class Statistics extends React.Component {
    countTotalFeedback = () =>
        this.props.valueGood + this.props.valueNeutral + this.props.valueBad;
    countPositiveFeedbackPercentage = () =>
        (this.props.valueGood / this.countTotalFeedback()) * 100;

    render() {
        const { valueGood, valueNeutral, valueBad } = this.props;
        const total = this.countTotalFeedback();
        const positive = this.countPositiveFeedbackPercentage();
        if (total === 0) return <Notification message="There is no feedback" />;
        return (
            <div className="box-result">
                <StatisticsStyle>Good: {valueGood}</StatisticsStyle>
                <StatisticsStyle>Neutral: {valueNeutral}</StatisticsStyle>
                <StatisticsStyle>Bad: {valueBad}</StatisticsStyle>
                <StatisticsStyle>Total: {total}</StatisticsStyle>
                <StatisticsStyle>
                    Positive feedback: {positive}%
                </StatisticsStyle>
            </div>
        );
    }
}

Statistics.propTypes = {
    valueGood: PropTypes.number.isRequired,
    valueNeutral: PropTypes.number.isRequired,
    valueBad: PropTypes.number.isRequired,
};
