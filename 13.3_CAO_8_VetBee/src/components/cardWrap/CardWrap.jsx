import PropTypes from 'prop-types';

import './cardWrap.css';

function CardWrap({ children }) {
    return (
        <div className="main-card-wrap">
            {children}
        </div>
    );
}

// Applying PropTypes
CardWrap.propTypes = {
    children: PropTypes.node
};

export default CardWrap;