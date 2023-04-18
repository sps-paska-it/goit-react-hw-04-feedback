import { Button } from './Feedback.styled';
import PropTypes from 'prop-types';

export const Feedback = ({ options, onLeaveFeedback }) => {
    return options.map(nameBtn => {
        return (
            <Button type="button" className="btn" onClick={onLeaveFeedback}>
                {nameBtn}
            </Button>
        );
    });
};

Feedback.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
