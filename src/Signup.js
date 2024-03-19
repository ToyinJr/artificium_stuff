import { Link } from 'react-router-dom';

{/* the form is a bit too wide on xl+ screens */}
let Signup = () => {
    return (
        <div className="main2 grid grid-cols-3">

        <div className='col-span-2 mx-12 grid xl:py-10 xl:w-[70%] xl:mx-auto'> {/* added  some styling for xl+ screens,the form was looking a bit too big */}
            <div className='flex justify-between items-start'>
                <img className='logo' src='/images/Logo.svg' alt="logo" />{/* can't find the styling for logo */}
                <p className='text-gray-400'><Link to="/login"><span className='forgot'>Login</span></Link></p>
            </div>

            <p className='text-white text-4xl'>Connect with your team and bring your <br /> creative ideas to life. </p>

            <form className='grid'>
                <div className='flex gap-2 si-form'>
                <div className='grow'>
                    <p className='text-gray-400'>First name</p>
                    <input type='text' className='signup-input' placeholder='Firstname' />
                </div>

                <div className='grow'>
                    <p className='text-gray-400'>Last name</p>
                    <input type='text' className='signup-input' placeholder='Lastname' />
                </div>
                </div>

                <div className='flex gap-2 si-form'>
                <div className='grow'>
                    <p className='text-gray-400'>Password</p>
                    <input type='password' className='signup-input' placeholder='Password' />
                </div>

                <div className='grow'>
                    <p className='text-gray-400'>Repeat password</p>
                    <input type='password' className='signup-input' placeholder='Repeat password' />
                </div>
                </div>

                <div className='flex items-center gap-2'>
                    <input type='checkbox' /> 
                    <p className='text-gray-400'>I agree with the <span className='forgot'>Terms and conditions</span></p>
                </div>

                <Link to='/register'><button className='rounded-md log p-2'>Create free account</button></Link>
            </form>


            <div className='flex justify-between items-end'>
                <p className='text-gray-400'>Artificium.app © 2023</p>
                <p className='text-gray-400'>Privacy Policy</p>
            </div>
        </div>


            <div className="col-start-3 rightside">
                <img className="" src="/images/splash3.svg" alt='splash3'/>
            </div>
        </div>
    )
}

export default Signup;