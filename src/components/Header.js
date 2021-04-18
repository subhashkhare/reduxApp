import React from 'react';

const Header = props => {
    return (
        <div className="cart">
                Cart: {props.data.length}
            </div>
    );
};

export default Header;