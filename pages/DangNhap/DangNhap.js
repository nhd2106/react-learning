import React, { useEffect } from 'react';
import {Formik,Field} from 'formik'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { DangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction';
const  DangNhap =(props) => {
    const dispatch = useDispatch();
    const {userInfo} = useSelector(state => state.quanLyNguoiDungReducer)
    const handleLoginSuccess =  ( ) =>{
        props.history.replace("/")
        console.log(props.history,'dang nhap history');
        
    }

    useEffect(()=>{
        if(Object.keys(userInfo).length !==0){
            props.history.push("/")
        }
    },[userInfo])




    return (
        <div className='container' style={{background:'#F8F9FA'}}>
            <h1>Đăng nhập</h1>
            <Formik 
                initialValues = {{taiKhoan:"", matKhau:""}}
                onSubmit = {values =>{
                    console.log(values);
                    dispatch(DangNhapAction(values,handleLoginSuccess))
                }}
            >
                {({handleSubmit})=>(

                    <Form className='text-left'>
                        <FormGroup >
                            <Label>User</Label>
                            <Input className='form-control' tag={Field} type='text' name='taiKhoan'/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input tag={Field} type='password' name='matKhau'/>
                        </FormGroup>
                        <Button className='btn btn-success' type='submit' onClick={handleSubmit}>
                            Sign In
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default DangNhap;
