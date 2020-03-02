import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div style={{background:'#F8F9FA'}} className='pb-5 pt-5'>
            <div className='container mt-5' >
            <div >
                <h3>Blog</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui neque sint eveniet tempore sapiente.</p>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <div>
                        <div className="card  text-left">
                            <img className="card-img-top" src="https://static.timesofisrael.com/atlantajewishtimes/uploads/2019/09/ED-World-Affairs-Council-foreign-students-9-20-19-640x400.png" alt='hinh-anh.' />
                            <div className="card-body">
                                <h4 className="card-title">Even the all-powerful Pointing has no control about the blind texts</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='col-md-6'>
                    <div className='d-flex'>
                        <div>
                            <figure>
                                <Link>
                                    <img width='150px' src='https://www.wfae.org/sites/wfae/files/styles/medium/public/201808/mentors.jpg'/>
                                </Link>
                            </figure>
                        </div>
                        <div>
                            <h5>
                            Even the all-powerful Pointing has no control about the blind texts
                            </h5>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <figure>
                                <Link>
                                    <img width='150px' src='https://www.wfae.org/sites/wfae/files/styles/medium/public/201808/mentors.jpg'></img>
                                </Link>
                            </figure>
                        </div>
                        <div>
                            <h5>
                            Even the all-powerful Pointing has no control about the blind texts
                            </h5>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <figure>
                                <Link>
                                    <img width='150px' src='https://www.wfae.org/sites/wfae/files/styles/medium/public/201808/mentors.jpg'></img>
                                </Link>
                            </figure>
                        </div>
                        <div>
                            <h5>
                            Even the all-powerful Pointing has no control about the blind texts
                            </h5>
                        </div>
                    </div>
                    

                </div>

            </div>
        </div>
        </div>
    )
}

export default Blogs;
