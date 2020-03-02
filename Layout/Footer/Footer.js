import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='container pb-5'>
            <div className='row mt-5 pt-5 text-left'>
                <div className='col-md-3    '>
                    <h4>Duoc Academy</h4>
                    <p>Perferendis eum illum voluptatibus dolore tempora consequatur minus asperiores temporibus.</p>
                </div>
                {/* ------ */}
                <div  className='col-md-3'>
                    <h4>Quick Link</h4>
                    <div className='row' style={{color:'#A9E7FF'}}>
                        <div className='col-md-6'>
                            <ul className='nav navbar-nav'>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='trang-chu' >Home</Link>
                                </li>
                                <li>
                                    <Link>About Us</Link>
                                </li>
                                <li>
                                    <Link>Courses</Link>
                                </li>
                                <li>
                                    <Link>Pages</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-6'>
                            <ul className='nav navbar-nav'>
                                <li>
                                    <a>Home</a>
                                </li>
                                <li>
                                    <a>About Us</a>
                                </li>
                                <li>
                                    <a>Courses</a>
                                </li>
                                <li>
                                    <a>Pages</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* -------- */}
                <div className='col-md-3'>
                    <h4>Blog</h4>
                    <ul className='nav navbar-nav'>
                        <li>
                            <div>
                                <a>Consectetur Adipisicing Elit</a>
                            </div>
                            <div className='d-flex'>
                                <p>May 29,2020 </p>
                                <p>Admin</p>
                                <i className="fa fa-comment"></i>
                            </div>
                        </li>

                    </ul>
                    <ul className='nav navbar-nav'>
                        <li>
                            <div>
                                <a>Consectetur Adipisicing Elit</a>
                            </div>
                            <div className='d-flex'>
                                <p>May 29,2020 </p>
                                <p>Admin</p>
                                <i className="fa fa-comment"></i>
                            </div>
                        </li>

                    </ul>
                    <ul className='nav navbar-nav'>
                        <li>
                            <div>
                                <a>Consectetur Adipisicing Elit</a>
                            </div>
                            <div className='d-flex'>
                                <p>May 29,2020 </p>
                                <p>Admin</p>
                                <i className="fa fa-comment"></i>
                            </div>
                        </li>

                    </ul>
                    <ul className='nav navbar-nav'>
                        <li>
                            <div>
                                <a>Consectetur Adipisicing Elit</a>
                            </div>
                            <div className='d-flex'>
                                <p>May 29,2020 </p>
                                <p>Admin</p>
                                <i className="fa fa-comment"></i>
                            </div>
                        </li>

                    </ul>
                </div>
{/* contact info */}
            <div className='col-md-3'>
                <h4>Contact Information</h4>
                <div className='d-flex'>
                <i className="fa fa-map-marker" />

                <div  className='text-wrap'> 
                203 Fake St. Mountain View, San Francisco, California, USA
                </div>
                </div>
                <div className='d-flex'>
                <i className="fa fa-mobile"></i>

                <div>
                203 Fake St. Mountain View, San Francisco, California, USA
                </div>
                </div>
                <div className='d-flex'>
                <i className="fa fa-envelope"></i>

                <div>
                203 Fake St. Mountain View, San Francisco, California, USA
                </div>
                </div>
                <div className='d-flex'>
                <i className="fa fa-clock"></i>

                <div>
                203 Fake St. Mountain View, San Francisco, California, USA
                </div>
                </div>
            </div>


            </div>

            <div className='d-flex justify-content-between pt-5'>
                <p>Copyright ©2020 All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by Duoc Ngo</p>
                <p>facebook</p>
            </div>
        </div>
    )
}

export default Footer;
