
let Register = () => {
    return (
        <div className="main2 flex">

            <div className="mx-12 grid place-content-around xl:w-[45%] xl:mx-auto">
            <img className='logo' src='/images/Logo.svg' alt="logo" />
            
            <div className="">
            <p className='text-white text-4xl'>Join or Create a Workspace</p>
            <p className="text-gray-400">Connect with others by joining an existing workspace or create a new one to collaborate with your team.</p>
            </div>

            <form className="grid grid-cols-3 gap-7">
                <input className="text col-span-2 reg-input" placeholder=".artificiul.app" /> <button className='rounded-md log col-start-3'>Join Workspace</button>
            </form>

            <div className='divider flex items-center gap-1'>
              <img className='divider-image grow' src='/images/Divider.svg' alt='divider' />
              <p className='text-gray-400 text-xs'>or</p>
              <img className='divider-image grow'  src='/images/Divider.svg' alt='divider' />
            </div>

            {/* you could've built the divider with html and css */}

            <button className='rounded-md wks p-2'>Create free new workspace</button>

            <div className="flex justify-between text-gray-400">
                <p>Artificium.app © 2023</p>
                <p>Privacy Policy</p>
            </div>
            </div>

            <div className="col-start-3 rightside">
                <img className="" src="/images/splash3.svg" alt='splash3'/>
            </div>
        </div>
    )
}

export default Register;