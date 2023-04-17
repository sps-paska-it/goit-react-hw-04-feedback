import { Button } from './Feedback.styled';

export const Feedback = ({ options, onLeaveFeedback }) => {
    return options.map(nameBtn => {
        return (
            <Button type="button" className="btn" onClick={onLeaveFeedback}>
                {nameBtn}
            </Button>
        );
    });
};
