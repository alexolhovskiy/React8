import { Link } from 'react-router-dom';
import './footer.scss';

export const Footer=()=>{
    return(<footer className="footer">

        {/* <!--<section className="center footer__top2">
            <div className="footer__top2_item">
                <div className="footer__top2_item_wrap">
                    <img className="footer__top2_item_wrap_img" src="img/f_icon1.png" alt="car" />
                </div>

                <p className="footer__top2_item_text1">
                    Free Delivery
                </p>
                <p className="footer__top2_item_text2">
                    Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
                </p>
            </div>

            <div className="footer__top2_item">
                <div className="footer__top2_item_wrap">
                    <img className="footer__top2_item_wrap_img" src="img/f_icon2.png" alt="percent" />
                </div>
                <p className="footer__top2_item_text1">
                    Sales & discounts
                </p>
                <p className="footer__top2_item_text2">
                    Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
                </p>
            </div>

            <div className="footer__top2_item">
                <div className="footer__top2_item_wrap">
                    <img className="footer__top2_item_wrap_img" src="img/f_icon3.png" alt="crown" />
                </div>
                <p className="footer__top2_item_text1">
                    Quality assurance
                </p>
                <p className="footer__top2_item_text2">
                    Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
                </p>
            </div>
        </section>--> */}
        <section className="center footer__top">

            <div className="footer__top_img">

                <div className="footer__top_img_container">

                    <div className="footer__top_img_container_text">
                        <p className="footer__top_img_container_text_1">
                            30% <span>offer</span>
                        </p>
                        <p className="footer__top_img_container_text_2">
                            for women
                        </p>
                    </div>
                </div>

            </div>

            <div className="footer__top_text">

                <figure className="footer__top_text_item">
                    <div className="footer__top_text_item_img">
                        <img src="img/f_icon1.png" alt="car" />
                    </div>

                    <div className="footer__top_text_item_text">
                        <p className="footer__top_text_item_text_1">
                            Free Delivery
                        </p>
                        <p className="footer__top_text_item_text_2">
                            Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
                        </p>
                    </div>
                </figure>

                <figure className="footer__top_text_item">
                    <div className="footer__top_text_item_img">
                        <img src="img/f_icon2.png" alt="percent" />
                    </div>

                    <div className="footer__top_text_item_text">
                        <p className="footer__top_text_item_text_1">
                            Sales & discounts
                        </p>
                        <p className="footer__top_text_item_text_2">
                            Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
                        </p>
                    </div>
                </figure>

                <figure className="footer__top_text_item">
                    <div className="footer__top_text_item_img">
                        <img src="img/f_icon3.png" alt="crown" />
                    </div>

                    <div className="footer__top_text_item_text">
                        <p className="footer__top_text_item_text_1">
                            Quality assurance
                        </p>
                        <p className="footer__top_text_item_text_2">
                            Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
                        </p>
                    </div>
                </figure>
            </div>
        </section>

        <section className="footer__box">
            <div className="center_t footer__box_middle">


                <figure className="center footer__box_middle_left">

                    <div className="footer__box_middle_left_top">
                        <img src="img/photo.png" alt="photo" />
                    </div>

                    <div className="footer__box_middle_left_down">
                        <div className="footer__box_middle_left_down_wrap">
                            <div className="footer__box_middle_left_down_wrap_text">
                                <p className="footer__box_middle_left_down_wrap_text_1">
                                    "Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum"
                                </p>
                                <p className="footer__box_middle_left_down_wrap_text_2">
                                    Bin Burhan
                                </p>
                                <p className="footer__box_middle_left_down_wrap_text_3">
                                    Dhaka, Bd
                                </p>
                            </div>
                            <div className="footer__box_middle_left_down_wrap_blocks">
                                <div className="block"></div>
                                <div className="block"></div>
                                <div className="block"></div>
                            </div>
                        </div>

                    </div>

                </figure>



                <div className="footer__box_middle_right">

                    <div className="footer__box_middle_right_top">
                        <p className="footer__box_middle_right_top_text1">
                            SUBSCRIBE
                        </p>
                        <p className="footer__box_middle_right_top_text2">
                            FOR OUR NEWLETTER AND PROMOTION
                        </p>
                    </div>


                    <div className="footer__box_middle_right_down">

                        <form method="post" action="#" name="test">
                            <div className="footer__box_middle_right_down_form">
                                <input className="footer__box_middle_right_down_form_input" required type="email" placeholder="Enter Your Email" />

                                <input className="footer__box_middle_right_down_form_submit" type="submit" value="Subscribe" />

                            </div>
                        </form>

                    </div>
                </div>

            </div>

        </section>

        <nav className="center footer__brand">
            <nav className="footer__brand_left">

                <nav className="footer__brand_left_item">
                    <Link to='/' className="footer__brand_left_item_logo">
                        <div className="footer__brand_left_item_logo_img">
                            <img src="img/group_2_18.png" />
                        </div>
                        <p className="footer__brand_left_item_logo_text">BRAN<span className="footer__brand_left_item_logo_text_d">D</span></p>
                    </Link>
                </nav>

                <article className="footer__brand_left_item">
                    <p className="footer__brand_left_item_text">
                        Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.
                    </p>
                    <p className="footer__brand_left_item_text">
                        Efficiently plagiarize 24/365 action items and focused infomediaries.
                        Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
                    </p>
                </article>

            </nav>

            <nav className="footer__brand_right">

                <nav className="footer__brand_right_item">
                    <p className="footer__brand_right_item_title">COMPANY</p>
                </nav>
                <nav className="footer__brand_right_item">
                    <p className="footer__brand_right_item_title">INFORMATION</p>
                </nav>
                <nav className="footer__brand_right_item">
                    <p className="footer__brand_right_item_title">SHOP CATEGORY</p>
                </nav>


                <nav className="footer__brand_right_item">
                <Link to='/'>Home</Link>
                </nav>
                <nav className="footer__brand_right_item">
                <Link to='/'>Tearms & Condition</Link>
                </nav>
                <nav className="footer__brand_right_item">
                <Link to='/'>Men</Link>
                </nav>


                <nav className="footer__brand_right_item">
                <Link to='/'>Shop</Link>
                </nav>
                <nav className="footer__brand_right_item">
                <Link to='/'>Privacy Policy</Link>
                </nav>
                <nav className="footer__brand_right_item">
                <Link to='/'>Women</Link>
                </nav>


                <nav className="footer__brand_right_item">
                <Link to='/'>About</Link>
                </nav>
                <nav className="footer__brand_right_item">
                <Link to='/'>How to Buy</Link>
                </nav>
                <nav className="footer__brand_right_item">
                <Link to='/'>Child</Link>
                </nav>


                <nav className="footer__brand_right_item">
                <Link to='/'>How It Works</Link>
                </nav>
                <nav className="footer__brand_right_item">
                <Link to='/'>How to Sell</Link>
                </nav>
                <nav className="footer__brand_right_item">
                <Link to='/'>Apparel</Link>
                </nav>


                <nav className="footer__brand_right_item">
                <Link to='/'>Contact</Link>
                </nav>
                <nav className="footer__brand_right_item">
                <Link to='/'>Promotion</Link>
                </nav>
                <nav className="footer__brand_right_item">
                <Link to='/'>Brows All</Link>
                </nav>


            </nav>

        </nav>

        <nav className="center footer__down">

            <div className="footer__down_left">
                <p>
                    C 2017 Brand All Rights Reserved.
                </p>
            </div>

            <nav className="footer__down_right">
            <Link to='/' className="footer__down_right_button">
                    <svg className="footer__down_right_button_icon" width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.08836 8.28L9.50686 5.61602H6.89022V3.88729C6.89022 3.15847 7.25574 2.44806 8.42765 2.44806H9.61722V0.179975C9.61722 0.179975 8.53772 0 7.50561 0C5.35073 0 3.9422 1.27593 3.9422 3.5857V5.61602H1.54688V8.28H3.9422V14.72H6.89022V8.28H9.08836Z" fill="black" />
                    </svg>

                </Link>
                <Link to='/' className="footer__down_right_button">
                    <svg className="footer__down_right_button_icon" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_190_1610)">
                            <path d="M8.13677 4.68162C6.02163 4.68162 4.31555 6.38494 4.31555 8.49666C4.31555 10.6084 6.02163 12.3117 8.13677 12.3117C10.2519 12.3117 11.958 10.6084 11.958 8.49666C11.958 6.38494 10.2519 4.68162 8.13677 4.68162ZM8.13677 10.9769C6.76991 10.9769 5.65248 9.86463 5.65248 8.49666C5.65248 7.12869 6.76658 6.01639 8.13677 6.01639C9.50695 6.01639 10.6211 7.12869 10.6211 8.49666C10.6211 9.86463 9.50363 10.9769 8.13677 10.9769ZM13.0056 4.52557C13.0056 5.02029 12.6065 5.41541 12.1143 5.41541C11.6188 5.41541 11.223 5.01697 11.223 4.52557C11.223 4.03416 11.6221 3.63572 12.1143 3.63572C12.6065 3.63572 13.0056 4.03416 13.0056 4.52557ZM15.5364 5.42869C15.4799 4.2367 15.2072 3.18084 14.3325 2.31092C13.4612 1.441 12.4036 1.16873 11.2097 1.10897C9.9792 1.03924 6.29101 1.03924 5.0605 1.10897C3.8699 1.16541 2.81233 1.43768 1.93768 2.3076C1.06302 3.17752 0.793639 4.23338 0.733776 5.42537C0.663937 6.65389 0.663937 10.3361 0.733776 11.5646C0.790313 12.7566 1.06302 13.8125 1.93768 14.6824C2.81233 15.5523 3.86658 15.8246 5.0605 15.8844C6.29101 15.9541 9.9792 15.9541 11.2097 15.8844C12.4036 15.8279 13.4612 15.5556 14.3325 14.6824C15.2039 13.8125 15.4766 12.7566 15.5364 11.5646C15.6063 10.3361 15.6063 6.65721 15.5364 5.42869ZM13.9468 12.8828C13.6874 13.5336 13.1852 14.0349 12.53 14.2972C11.5489 14.6857 9.22094 14.5961 8.13677 14.5961C7.05259 14.5961 4.72128 14.6824 3.74353 14.2972C3.09169 14.0383 2.58951 13.5369 2.32678 12.8828C1.93768 11.9033 2.02747 9.57908 2.02747 8.49666C2.02747 7.41424 1.941 5.0867 2.32678 4.11053C2.58619 3.45975 3.08837 2.95838 3.74353 2.69608C4.72461 2.3076 7.05259 2.39725 8.13677 2.39725C9.22094 2.39725 11.5523 2.31092 12.53 2.69608C13.1818 2.95506 13.684 3.45643 13.9468 4.11053C14.3359 5.09002 14.2461 7.41424 14.2461 8.49666C14.2461 9.57908 14.3359 11.9066 13.9468 12.8828Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_190_1610">
                                <rect width="14.8991" height="17" fill="white" transform="translate(0.68396)" />
                            </clipPath>
                        </defs>
                    </svg>

                </Link>
                <Link to='/' className="footer__down_right_button">
                    <svg className="footer__down_right_button_icon" width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_190_1618)">
                            <path d="M6.7402 0.203125C3.55552 0.203125 0.408081 2.34063 0.408081 5.8C0.408081 8 1.63726 9.25 2.38221 9.25C2.68951 9.25 2.86643 8.3875 2.86643 8.14375C2.86643 7.85313 2.13079 7.23438 2.13079 6.025C2.13079 3.5125 4.03043 1.73125 6.48878 1.73125C8.60259 1.73125 10.167 2.94062 10.167 5.1625C10.167 6.82187 9.50585 9.93437 7.3641 9.93437C6.59121 9.93437 5.93006 9.37187 5.93006 8.56563C5.93006 7.38438 6.74951 6.24062 6.74951 5.02187C6.74951 2.95312 3.83487 3.32812 3.83487 5.82812C3.83487 6.35313 3.90006 6.93437 4.13286 7.4125C3.70451 9.26875 2.82919 12.0344 2.82919 13.9469C2.82919 14.5375 2.91299 15.1188 2.96886 15.7094C3.0744 15.8281 3.02163 15.8156 3.18304 15.7563C4.74744 13.6 4.69157 13.1781 5.39928 10.3562C5.78107 11.0875 6.76814 11.4812 7.55034 11.4812C10.8468 11.4812 12.3274 8.24688 12.3274 5.33125C12.3274 2.22813 9.66415 0.203125 6.7402 0.203125Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_190_1618">
                                <rect width="11.9193" height="16" fill="white" transform="translate(0.408081)" />
                            </clipPath>
                        </defs>
                    </svg>

                </Link>
                <Link to='/' className="footer__down_right_button">
                    <svg className="footer__down_right_button_icon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_190_1614)">
                            <path d="M14.4181 4.74107C14.4281 4.88319 14.4281 5.02535 14.4281 5.16747C14.4281 9.50247 11.1509 14.4974 5.16096 14.4974C3.31558 14.4974 1.60132 13.9593 0.159302 13.0253C0.421495 13.0558 0.673569 13.0659 0.94585 13.0659C2.46851 13.0659 3.8702 12.5482 4.98953 11.6649C3.5576 11.6345 2.3576 10.6903 1.94415 9.39081C2.14585 9.42125 2.34751 9.44156 2.5593 9.44156C2.85172 9.44156 3.14418 9.40094 3.41643 9.32991C1.92401 9.02531 0.80465 7.70553 0.80465 6.11163V6.07103C1.23825 6.31469 1.74249 6.46697 2.2769 6.48725C1.39959 5.89841 0.824826 4.89335 0.824826 3.75628C0.824826 3.14716 0.98614 2.58878 1.26851 2.10147C2.87187 4.09131 5.28195 5.39078 7.98443 5.53294C7.93403 5.28928 7.90376 5.0355 7.90376 4.78169C7.90376 2.97457 9.35586 1.5025 11.1609 1.5025C12.0987 1.5025 12.9457 1.89844 13.5407 2.53803C14.2768 2.39591 14.9827 2.12178 15.6079 1.74616C15.3659 2.5076 14.8516 3.14719 14.176 3.55325C14.8315 3.48222 15.4668 3.29944 16.0516 3.04566C15.608 3.69538 15.0533 4.27403 14.4181 4.74107Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_190_1614">
                                <rect width="15.8924" height="16" fill="white" transform="translate(0.159302)" />
                            </clipPath>
                        </defs>
                    </svg>

                </Link>

                <Link to='/' className="footer__down_right_button">
                    <svg className="footer__down_right_button_icon" width="17" height="16" version="1.0" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 1261.000000 1280.000000"
                         preserveAspectRatio="xMidYMid meet">
                        <metadata>
                            Created by potrace 1.15, written by Peter Selinger 2001-2017
                        </metadata>
                        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                           fill="#000000" stroke="none">
                            <path d="M6010 11369 c-756 -72 -1387 -257 -1955 -574 -1058 -590 -1918 -1593
              -2337 -2725 -81 -218 -138 -411 -189 -635 -20 -89 -24 -108 -52 -275 -16 -90
              -30 -202 -47 -362 -15 -148 -12 -638 5 -812 66 -656 219 -1193 504 -1771 327
              -662 759 -1210 1324 -1678 591 -490 1258 -829 2012 -1021 116 -30 171 -41 295
              -61 265 -41 1015 -51 1435 -20 628 48 818 90 1380 312 335 132 675 301 780
              388 44 36 136 104 206 150 230 156 452 378 758 760 290 362 440 595 611 949
              349 724 450 1287 450 2508 0 451 -6 563 -43 753 l-24 120 -2344 0 -2344 0 3
              -265 c1 -146 5 -368 7 -495 3 -126 10 -450 16 -720 5 -269 12 -496 14 -502 3
              -10 106 -13 462 -14 510 -2 1079 -13 913 -19 -101 -3 -103 -3 -45 -11 65 -8
              138 -22 198 -39 20 -5 52 -14 70 -19 179 -48 356 -174 421 -300 61 -116 67
              -297 17 -436 -13 -36 -95 -199 -108 -215 -6 -8 -30 -40 -53 -70 -38 -53 -198
              -220 -210 -220 -3 0 -21 -14 -40 -30 -107 -93 -325 -219 -520 -302 -224 -94
              -475 -160 -760 -199 -116 -16 -531 -16 -650 0 -281 38 -527 103 -765 201 -161
              66 -541 278 -575 320 -3 3 -21 17 -40 30 -19 13 -37 27 -40 30 -3 3 -15 13
              -27 21 -69 47 -288 256 -388 369 -90 103 -265 346 -265 370 0 5 -3 10 -7 10
              -5 0 -13 10 -19 23 -22 45 -59 112 -64 117 -9 8 -53 103 -115 245 -72 165
              -153 450 -184 645 -6 36 -16 101 -23 145 -17 112 -17 593 0 720 13 96 52 302
              71 375 38 147 53 194 96 305 39 102 51 128 112 250 31 61 61 120 67 132 6 13
              14 23 19 23 4 0 7 4 7 10 0 8 66 118 87 145 5 6 30 40 56 77 26 36 53 72 59
              80 7 7 31 36 52 63 41 51 310 325 320 325 3 0 16 10 29 23 13 12 50 42 81 67
              32 25 63 50 69 55 59 51 272 182 417 257 330 169 654 267 1013 303 364 37 698
              -1 1137 -131 146 -44 204 -62 224 -70 13 -5 17 -4 12 4 -4 6 16 2 43 -10 29
              -11 48 -25 44 -31 -3 -6 -1 -7 6 -3 15 10 197 -87 336 -178 61 -40 150 -108
              198 -152 49 -43 100 -88 113 -99 l25 -19 445 444 c644 643 974 1002 974 1059
              0 41 -166 197 -365 342 -681 496 -1306 768 -2065 899 -163 28 -228 36 -478 60
              -120 12 -728 11 -852 -1z m1550 -2289 c8 -5 11 -10 5 -10 -5 0 -17 5 -25 10
              -8 5 -10 10 -5 10 6 0 17 -5 25 -10z m-3933 -2272 c-3 -8 -6 -5 -6 6 -1 11 2
              17 5 13 3 -3 4 -12 1 -19z m-20 -240 c-2 -13 -4 -3 -4 22 0 25 2 35 4 23 2
              -13 2 -33 0 -45z m0 -380 c-2 -13 -4 -3 -4 22 0 25 2 35 4 23 2 -13 2 -33 0
              -45z m20 -200 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m3210
              -2514 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-124 -11 c-7 -2
              -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m-335 -10 c-10 -2 -26 -2 -35
              0 -10 3 -2 5 17 5 19 0 27 -2 18 -5z m175 0 c-29 -2 -77 -2 -105 0 -29 2 -6 3
              52 3 58 0 81 -1 53 -3z" />
                            <path d="M7620 9036 c0 -2 7 -7 16 -10 8 -3 12 -2 9 4 -6 10 -25 14 -25 6z" />
                        </g>
                    </svg>

                </Link>
            </nav>
        </nav>

    </footer>);
}