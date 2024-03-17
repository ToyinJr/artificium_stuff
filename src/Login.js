import './form.css';
import { Link } from 'react-router-dom';

let Login = () => {
    return (
    <div className='main'>

    <div className='leftside grid gap-y-4'>
        <img className='logo' src='/images/Logo.svg' alt="logo" />

    <form className=''>
        <p className='bold text-4xl pb-2 text-white'>Let's get <span className='creative font-bold'>creative!</span></p>
        <p className='pb-2 text-gray-400'>Log in to Artificium to start creating magic.</p>
        <input className='email-input rounded-lg py-2 px-3 my-2' type='email' placeholder='Enter email'/> <br />
        <input className='password-input rounded-lg py-2 px-3 my-2' type='password' placeholder='Password'/> <br />
    
      <div className='flex justify-between pb-4 pt-4'>
      <div className='flex gap-1 text-white items-center'><input className='' type='checkbox'/> <p>Remember Me</p></div>
      <a href='nowhere'><p className='forgot font-bold'>Forgot Password?</p></a>
      </div>

       <button className='p-2 rounded-md log'>Log in</button>
    </form>


    <div className='divider flex items-center gap-1'>
        <img className='divider-image' src='/images/Divider.svg' alt='divider' />
        <p className='text-gray-400 text-xs'>or continue with</p>
        <img className='divider-image'  src='/images/Divider.svg' alt='divider' />
    </div>

    <div className='flex justify-between accounts'>
        <button className='bg-black self-center rounded-md p-3 px-4 flex gap-2'><img src='/images/Google.svg' alt='google' /> <p className='text-gray-400'>Google Account</p></button>
        <button className='bg-black self-center rounded-md p-3 px-4 flex gap-2'><img src='/images/Apple.svg' alt='apple' /> <p className='text-gray-400'>Apple Account</p></button>
    </div>

     <p className='text-gray-400'>Dont have an account? <Link to="/signup"><span className='forgot'>Sign Up</span></Link></p>
    </div>

    <div className='rightside'>
        <img className="splash" src="/images/splash1.svg" alt="splash1"/>
    </div>

    </div>
    )
}

export default Login;