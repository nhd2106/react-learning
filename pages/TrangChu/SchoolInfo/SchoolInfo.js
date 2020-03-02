import React from 'react';
const SchoolInfo = () => {
    const backgroudColor = "#F8F9FA"
    return (
        <div className='container' style={{background:backgroudColor}}>
            <div className='row mt-5'>
                <div className='col-md-6'>
                    <img src='https://images.unsplash.com/photo-1565034946487-077786996e27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' width='100%'/>
                </div>
                <div className='col-md-6 mt-2'>
                    <div><h3>Education is Life</h3></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam nisi eos accusantium eligendi velit deleniti nihil ad deserunt rerum incidunt.</p>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='d-flex align-items-center'>
                                <div >
                                <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h3>12,921</h3>
                                    <p>STUDENTS</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div >
                                <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h3>12,921</h3>
                                    <p>STUDENTS</p>
                                </div>
                            </div>
                         
                        </div>
                        <div className='col-md-6'>
                            <div className='d-flex align-items-center'>
                                <div >
                                <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h3>12,921</h3>
                                    <p>STUDENTS</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div >
                                <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h3>12,921</h3>
                                    <p>STUDENTS</p>
                                </div>
                            </div>
                         
                        </div>
                        
                        
                    </div>


                </div>
            </div>
        </div>
    )
}

export default SchoolInfo;
