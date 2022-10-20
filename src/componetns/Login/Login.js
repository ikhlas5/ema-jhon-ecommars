import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
    const{signIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';

    const handleSubmit=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;

        signIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from,{replace:true})
        })
        .catch(error => console.error(error));
    }
    return (
        <div className='border bg-gray-400 rounded my-20 mx-auto md:h-[600px] md:w-[500px] pl-[40px] shadow-2xl w-96 '>
        <h2 className='font-medium text-3xl text-[#2A414F] text-center mt-5'>Login</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-5">
                <label className='block text-xl mb-2 text-[#2A414F]' htmlFor="email">Email</label>
                <input className='md:w-[415px] md:h-[55px] border rounded pl-2' type="email" name="email" required />
            </div>
            <div className="mb-5">
                <label className='block text-xl mb-2 text-[#2A414F]'  htmlFor="password">Password</label>
                <input className='md:w-[415px] md:h-[55px] border rounded pl-2' type="password" name="password" required />
            </div>
            <input className='md:w-[415px] md:h-[55px]
            mt-[45px] bg-[#ff99004d] rounded font-normal text-xl text-[#0E161A] pl-2 mb-5 hover:bg-[#ff990099]' type="submit" value="Login" />
        </form>
        <p>New to ema john? <Link className='text-blue-700' to='/signup'>Create a New Account</Link></p>
    </div>
    );
};

export default Login;