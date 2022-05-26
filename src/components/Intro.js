import React from 'react';
import './Intro.css';

function Intro() {
    return (
        <>
            <div class="row ">
                <div class='new1 col-md-6  ps-5'>

                    <div class="top--welcome ">
                        Welcome to AFK ISP
                    </div>

                    <div class="top--info">

                        <i class="fa fa-phone ps-3"> </i>+0951172918
                        <i class="fa fa-envelope ps-3"></i>support@afkisp.com.bd

                    </div>
                </div>

                <div class="new2 col-md-6 pe-5" >
                    <ul class="social-icons">
                        <a href="#" target="_blank">BTRC Approved Tariff </a>
                        <a class='ps-3' href="http://blog.amberit.com.bd" >Blog</a>

                        <li><a href="https://www.facebook.com/afk/" target="_blank"><i class="fa-brands fa-facebook-square ps-3"></i></a></li>

                        <li ><a href="https://www.youtube.com/channel/UCIiRPFeZ5GVk2K7Xj_t-vng" target="_blank"><i class="fa-brands fa-youtube ps-3"></i></a></li>
                    </ul>
                </div>

            </div>
        </>
    );
}

export default Intro;