import React from 'react';
import './Footer.css';

function Footer() {

    return (
        <>
            <footer class="text-center text-lg-start " >

                <div class="container p-4 pb-0" >


                </div>

                <footer class="new_footer_area bg_color">
                    <div class="new_footer_top">

                        <div class="footer_bg">
                            <div class="footer_bg_one"></div>
                            <div class="footer_bg_two"></div>
                        </div>
                    </div>
                    
                </footer>

                <section class="">

                    <div class="row cil">

                        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 class="text-uppercase mb-4 font-weight-bold">
                                Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer
                                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.
                            </p>
                        </div>


                        <hr class="w-100 clearfix d-md-none" />


                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
                            <p>
                                <a>MDBootstrap</a>
                            </p>
                            <p>
                                <a>MDWordPress</a>
                            </p>
                            <p>
                                <a>BrandFlow</a>
                            </p>
                            <p>
                                <a>Bootstrap Angular</a>
                            </p>
                        </div>


                        <hr class="w-100 clearfix d-md-none" />


                        <hr class="w-100 clearfix d-md-none" />


                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                            <p><i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
                            <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                        </div>

                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 ">
                            <h6 class="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                            <div class="f_social_icon">
                                <a href="#" class="fab fa-facebook "></a>
                                <a href="#" class="fab fa-twitter"></a>
                                <a href="#" class="fab fa-linkedin"></a>
                                <a href="#" class="fab fa-pinterest"></a>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="text-center p-3">
                    © 2020 Copyright:
                    <a href="#">All Rights Reserve to AFK ISP </a>
                </div>

            </footer>
        </>
    );
}

export default Footer