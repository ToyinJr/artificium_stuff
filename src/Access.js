import {Link} from "react-router-dom";
let Access = () => {
    return (
        <div className='main'>

        <div className='leftside grid gap-y-4 xl:py-10 '>
            <img className='logo' src='/images/Logo.svg' alt="logo" />
    
        <div className="m-auto">
            <img src="/images/users.svg" alt="users" />
        </div>

        <div>
            <p className="bold text-4xl xl:text-[2rem] xl:leading-[2rem] pb-2 text-white">Sophia, Kamil, Emily and 2,012 <br /> others are already here!</p>
            <p className="text-gray-400 ">But... it looks like you don't have access to this workspace.</p>
        </div>

        <div className="mx-auto grid content-baseline">
        <Link to='/welcome'><button className='p-2 rounded-md access px-5'>Access request</button></Link>
        <p className="text-center text-gray-400">or</p>
        <div className="place-self-center"><button className='p-2 px-5 rounded-md back text-gray-400'>Back</button></div>
        </div>

        <div className="flex justify-between text-gray-400 items-end">
                <p>Artificium.app © 2023</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    
        <div className='rightside'>
            <img className="splash" src="/images/splash4.svg" alt="splash1"/>
        </div>
    
        </div>
    )
}

export default Access;