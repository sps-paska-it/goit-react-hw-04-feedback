export const Feedback = ({onBtnGood, onBtnNeutral, onBtnBad}) => {
    return (
        <div>
            <div className="box-btn">
                <button type="button" className="btn" onClick={onBtnGood}>Good</button>
                <button type="button" className="btn" onClick={onBtnNeutral}>Neutral</button>
                <button type="button" className="btn" onClick={onBtnBad}>Bad</button>
            </div>
        </div>
    );
};