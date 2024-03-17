// import {Link} from "react-router-dom";
let Access2 = () => {
    return (
        <div className='main'>

        <div className='leftside grid grid-cols-2'>
            <img className='logo' src='/images/Logo.svg' alt="logo" />

        <div className="col-span-2">
        <img className="m-auto" src="/images/avatar.svg" alt="avatar" />
            <p className="bold text-4xl pb-2 text-white text-center">Vertexia</p>
            <p className="text-green-300 text-center">vertexia.artificium.app</p>

        <div className="flex justify-evenly items-center pt-5">
          <button><p className="text-gray-400">Change workspace</p></button>
          <button className='p-3 rounded-md access'>Join Now</button>
        </div>

        <div className="flex items-center justify-between gap-4 pt-10">
        <img className="" src="/images/users2.svg" alt="users"/> 
        <p className="text-gray-400">and 873 others have already joined</p>
        </div>
        </div>

        <div className="flex justify-between text-gray-400 self-end col-span-2">
                <p className="">Artificium.app © 2023</p>
                <p className="">Privacy Policy</p>
        </div>
        </div>
    
        <div className='rightside'>
            <img className="splash" src="/images/splash4.svg" alt="splash1"/>
        </div>
    
        </div>
    )
}

export default Access2;