import PropTypes from 'prop-types';

import './card.css';

function Card({ children }) {
    return (
        <div className="card-wrap">
            {children}
        </div>
    );
}

// Applying PropTypes
Card.propTypes = {
    children: PropTypes.node
};

export default Card;