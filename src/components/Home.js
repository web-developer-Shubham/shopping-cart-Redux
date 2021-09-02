import React from 'react'

function Home(props) {
    return (
        <div>
           <h3>Customized shopping Cart </h3>
            <h1>POC on Redux</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://i.ibb.co/JsbJrBB/electricguitar.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home