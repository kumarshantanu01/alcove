import React from 'react';

const OurDesigners = () => {
    return(
        <>
        <div className="ourdesigners">
            <div className="ourdesigners-leftbox">
                <div className= "ourdesigners-leftbox-images">
                    <div className="ourdesigners-image">
                        {/* <div className="top-ourdesigners-image"> */}
                            <img className="designers-pic" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630409666/alcove/pexels-george-milton-7034741_co8s9a.jpg" alt=""></img>
                            <img className="designers-pic" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630409614/alcove/pexels-teddy-joseph-2955376_zxccoh.jpg" alt=""></img>
                            <img className="designers-pic" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630409611/alcove/pexels-anthony-shkraba-4348405_wng4ab.jpg" alt=""></img>
                        {/* </div> */}
                        {/* <div className="bottom-ourdesigners-image"> */}
                            <img className="designers-pic" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630409801/alcove/pexels-michael-burrows-7147701_x1sbvh.jpg" alt=""></img>
                            <img className="designers-pic" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630410564/alcove/pexels-ekaterina-bolovtsova-4049870_uhpdo9.jpg" alt=""></img>
                            <img className="designers-pic" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630410571/alcove/pexels-tony-schnagl-5588209_qu87y2.jpg" alt=""></img>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <div className="ourdesigners-rightbox">
                <div className="ourdesigners-righttbox-text">
                    <div className="heading-ourdesigners">
                        <h1>OUR</h1>
                        <h1>DESIGNERS</h1>
                    </div>
                    
                    <div className="subheading-ourdesigners">
                        <p>Our role is to ensure the comforts of home are unique to you by offering a seamless interior design service that focuses on bespoke, considered interiors which encapsulate your dreams. We Provide clients with value for money and don’t overcharge, especially in the beginning. Our designers believe in the power of elegant minimalism in a world increasingly saturated with garish colour.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default OurDesigners;