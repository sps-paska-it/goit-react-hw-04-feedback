import PropTypes from 'prop-types';
import { NoStatisticsStyle } from './Notification.styled';

export const Notification = ({ message }) => (
    <NoStatisticsStyle>{message}</NoStatisticsStyle>
);

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};
