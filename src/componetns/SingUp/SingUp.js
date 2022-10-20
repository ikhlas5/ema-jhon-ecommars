import React,{ useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const SingUp = () => {
    const [error,setError]=useState(null);
    const{createUser}=useContext(AuthContext);

    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';

    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        const confirm = form.confirm.value;
        if (password.length < 6) {
            setError('Password should be 6 characters or more.');
            return alert(error) ;
        }
        if (password !== confirm) {
            setError('Your Password did not match');
            return alert(error);
        }

       createUser(email,password)
       .then(result=>{
        const user=result.user;
        console.log(user)
        form.reset();
        navigate(from,{replace:true})
       })
       .catch(error => console.error(error));
    }
    return (
        <div className='border bg-gray-400 rounded w-96 mx-auto my-20 md:mx-auto   md:h-[600px] md:w-[500px] pl-[40px] shadow-2xl'>
        <h2 className='font-medium text-3xl text-[#2A414F] text-center mt-5'>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label className='block text-xl mb-2 text-[#2A414F]' htmlFor="email">Email</label>
                <input className='md:w-[415px] md:h-[55px] border rounded pl-2' type="email" name="email" required />
            </div>
            <div className="">
                <label className='block text-xl mb-2 text-[#2A414F]' htmlFor="password">Password</label>
                <input className='md:w-[415px] md:h-[55px] border rounded pl-2' type="password" name="password" required />
            </div>
            <div className="">
                <label className='block text-xl mb-2 text-[#2A414F]' htmlFor="confirm">Confirm Password</label>
                <input className='md:w-[415px] md:h-[55px] border rounded pl-2' type="password" name="confirm" required />
            </div>
            <input className='md:w-[415px] md:h-[55px]
            mt-[45px] bg-[#ff99004d] rounded font-normal text-xl text-[#0E161A] pl-2 mb-5 hover:bg-[#ff990099]' type="submit" value="Sign Up" />
        </form>
        <p>Already Have an Account? <Link className='text-blue-700  ' to='/login'>Login</Link></p>
        {/* <p className='text-red-600'>{error}</p> */}
    </div>
    );
};

export default SingUp;