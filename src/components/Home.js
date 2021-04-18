import React from 'react';

const Home = props => {

    console.log('Home: ', props.data.length)
    return (
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img alt="" src="https://4.imimg.com/data4/BB/RH/MY-15241145/multimedia-mobile-phone-500x500.jpg" />
                </div>
                <div className="txt-wrapper item">
                    <span>Price : 1000</span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>props.addToCardHandler({
                        name: 'phone', price: 1000
                    })}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Home;