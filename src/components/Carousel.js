import React from 'react';
import './Carousel.css';

function Carousel() {
    return (
        <>
            <div class="container">
                <div id="carouselExampleCaptions" class="carousel slide bg-primary" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={require('./Carousel/home.png')} class="d-block w-100" alt="..." />
                            <div class="wen carousel-caption d-none d-md-block">
                                <h2 class="fon">Home Internet</h2>
                                <i class="fas fa-home fa-3x" style={{ color: "violet" }}></i>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={require('./Carousel/pac.png')} class="d-block w-100" alt="..." />
                            <div class="wen carousel-caption d-none d-md-block">
                                <h2 class="fon">Exciting Packages</h2>
                                <i class="fa-solid fa-truck-fast fa-3x" style={{ color: "violet" }}></i>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={require('./Carousel/home.png')} class="d-block w-100" alt="..." />
                            <div class="wen carousel-caption d-none d-md-block">
                                <h2 class="fon">Thir</h2>
                                <p>Some repr</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Carousel;