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
        <div className="card">
            <div className="rank">{rank}</div>
            <div className="suit">{suit}</div>
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
