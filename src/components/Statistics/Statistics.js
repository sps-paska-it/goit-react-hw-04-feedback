import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsStyle } from './Statistics.styled';

export const Statistics = ({
    valueGood,
    valueNeutral,
    valueBad,
    total,
    positiveFeedback,
}) => {
    return (
        <div className="box-result">
            <StatisticsStyle>Good: {valueGood}</StatisticsStyle>
            <StatisticsStyle>Neutral: {valueNeutral}</StatisticsStyle>
            <StatisticsStyle>Bad: {valueBad}</StatisticsStyle>
            <StatisticsStyle>Total: {total}</StatisticsStyle>
            <StatisticsStyle>
                Positive feedback: {positiveFeedback}%
            </StatisticsStyle>
        </div>
    );
};

Statistics.propTypes = {
    valueGood: PropTypes.number.isRequired,
    valueNeutral: PropTypes.number.isRequired,
    valueBad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
};
