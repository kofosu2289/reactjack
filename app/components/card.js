import React, { PropTypes } from 'react';

 /**
  * Card component.
  *
  * @class      Info (name)
  * @param      {Object}          props       Component properties
  * @param      {String|Integer}  props.rank  Card's rank
  * @param      {String}          props.suit  Card's suit
  * @return     {ReactElement}    markup
  */
const Card = ({ rank, suit }) => {
    return (
        <div className={`card ${suit}`}>
           <div className="section top">
                <div className="container">
                    <span className="rank">{rank}</span>
                    <span className="suit">{suit}</span>
                </div>
            </div>
            <div className="section center suit">{suit}</div>
            <div className="section bottom">
                <div className="container">
                    <span className="rank">{rank}</span>
                    <span className="suit">{suit}</span>
                </div>
            </div>
        </div>
    );
}

/**
 * Defines property types for this component.
 */
Card.propTypes = {
    rank: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    suit: PropTypes.string.isRequired,
};

export default Card;
