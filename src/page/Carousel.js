import React from "react";

function Carousel() {
    return (
        <div className="row">
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img 
                            src="https://ik.imagekit.io/tvlk/image/imageResource/2024/06/21/1718957913692-865d014ca5b732887dd61530551261e8.jpeg?tr=q-75" 
                            className="d-block w-100" 
                            alt="..."
                            style={{ maxHeight: '750px', objectFit: 'cover' }} 
                        />
                    </div>
                    <div className="carousel-item">
                        <img 
                            src="https://www.kayak.co.th/rimg/himg/b3/10/90/ice-178163-120191068-424668.jpg?width=1366&height=768&crop=true" 
                            className="d-block w-100" 
                            alt="..."
                            style={{ maxHeight: '750px', objectFit: 'cover' }} 
                        />
                    </div>
                    <div className="carousel-item">
                        <img 
                            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/184305239.jpg?k=2d22fe63ae1f8960e057238c98fb436f7bd9f65854e3a5e918607c5cfa1d0a52&o=&hp=1" 
                            className="d-block w-100" 
                            alt="..."
                            style={{ maxHeight: '750px', objectFit: 'cover' }} 
                        />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
export default Carousel;
