export const Feedback = ({ options, onLeaveFeedback }) => {
    return options.map(nameBtn => {
        return (
            <button type="button" className="btn" onClick={onLeaveFeedback}>
                {nameBtn}
            </button>
        );
    });
};
