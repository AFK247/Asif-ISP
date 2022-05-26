import React from 'react';
import { Link } from 'react-router-dom';

function PackageCard() {
    return (
        <>
            <div class="container mt-5 ">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card" style={{ width: "20rem" }}>
                            <img src={require('./Carousel/15.png')} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">Lightning</h5>

                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">24 HRS UNLIMITED</li>
                                    <li class="list-group-item">Fiber Optics </li>
                                    <li class="list-group-item">Free Minutes - N/A</li>
                                    <li class="list-group-item">24/7 Customer Care</li>
                                </ul>
                                <Link to='/sign-up' class="btn btn-primary mt-2">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 " style={{ display: 'inline' }}>
                        <div class="card" style={{ width: "20rem" }}>
                            <img src={require('./Carousel/20.png')} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">Lightning</h5>

                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">24 HRS UNLIMITED</li>
                                    <li class="list-group-item">Fiber Optics </li>
                                    <li class="list-group-item">Free Minutes - 300</li>
                                    <li class="list-group-item">24/7 Customer Care</li>
                                </ul>
                                <Link to='/sign-up' class="btn btn-primary mt-2">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 ">
                        <div class="card" style={{ width: "20rem" }}>
                            <img src={require('./Carousel/30.png')} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">Lightning</h5>

                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">24 HRS UNLIMITED</li>
                                    <li class="list-group-item">Fiber Optics </li>
                                    <li class="list-group-item">Free Minutes - 500</li>
                                    <li class="list-group-item">24/7 Customer Care</li>
                                </ul>
                                <Link to='/sign-up' class="btn btn-primary mt-2">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                </div>



                <div class="row mt-5">
                    <div class="col-md-4">
                        <div class="card" style={{ width: "20rem" }}>
                            <img src={require('./Carousel/15.png')} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">Lightning</h5>

                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">24 HRS UNLIMITED</li>
                                    <li class="list-group-item">Fiber Optics </li>
                                    <li class="list-group-item">Free Minutes - N/A</li>
                                    <li class="list-group-item">24/7 Customer Care</li>
                                </ul>
                                <Link to='/sign-up' class="btn btn-primary mt-2">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 " style={{ display: 'inline' }}>
                        <div class="card" style={{ width: "20rem" }}>
                            <img src={require('./Carousel/20.png')} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">Lightning</h5>

                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">24 HRS UNLIMITED</li>
                                    <li class="list-group-item">Fiber Optics </li>
                                    <li class="list-group-item">Free Minutes - 300</li>
                                    <li class="list-group-item">24/7 Customer Care</li>
                                </ul>
                                <Link to='/sign-up' class="btn btn-primary mt-2">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 ">
                        <div class="card" style={{ width: "20rem" }}>
                            <img src={require('./Carousel/30.png')} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">Lightning</h5>

                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">24 HRS UNLIMITED</li>
                                    <li class="list-group-item">Fiber Optics </li>
                                    <li class="list-group-item">Free Minutes - 500</li>
                                    <li class="list-group-item">24/7 Customer Care</li>
                                </ul>
                                <Link to='/sign-up' class="btn btn-primary mt-2">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PackageCard