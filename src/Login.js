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
        <input className='password-input rounded-lg py-2 px-3 my-2' type='password' placeholder='Password'/> <br /> {/* the css rules applied to password-input can also be done in tailwind */}
    
      <div className='flex justify-between pb-4 pt-4'>
      <div className='flex gap-1 text-white items-center'><input className='' type='checkbox'/> <p>Remember Me</p></div>
      <a href='nowhere'><p className='forgot font-bold'>Forgot Password?</p></a>
      </div>

       <button className='p-2 rounded-md log'>Log in</button>
    </form>


    <div className='divider flex items-center gap-1'>
        <img className='divider-image' src='/images/Divider.svg' alt='divider' />
        <p className='text-gray-400 text-xs'>or continue with</p>
        <img className='divider-image'  src='/images/Divider.svg' alt='divider' />{/*divider image can be replaced with max-w-[37%], i noticed that's embedded in a media query,tailwind also has its own media query system so you should look into that as well */}
    </div>

    <div className='flex justify-between accounts'>{/* accounts can be replaced with bg-[#B6F09C] or you define the background in tailwind config and then you have bg-<name_of_defined_bg_color> */}
        <button className='bg-black self-center rounded-md p-3 px-4 flex gap-2'><img src='/images/Google.svg' alt='google' /> <p className='text-gray-400'>Google Account</p></button>
        <button className='bg-black self-center rounded-md p-3 px-4 flex gap-2'><img src='/images/Apple.svg' alt='apple' /> <p className='text-gray-400'>Apple Account</p></button>
    </div>

     <p className='text-gray-400'>Dont have an account? <Link to="/signup"><span className='forgot'>Sign Up</span></Link></p>
    </div>

    <div className='rightside'>
        <img className="splash" src="/images/splash1.svg" alt="splash1"/> {/* splash can be replaced with max-w-full max-h-full you can also define css classes but then they have  */}
    </div>
    {/* Explore css classes more,right-side could've been replaced with ml-auto */}

    </div>
    )
}

export default Login;