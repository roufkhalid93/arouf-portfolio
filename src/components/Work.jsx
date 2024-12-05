import workImg from '../assets/projects/workImg.jpeg'
import realestate from '../assets/projects/realestate.jpg'
import carantel from '../assets/projects/carantel.jpg'
import womanicure from '../assets/projects/womanicure.jpg'
import twitterClone from '../assets/projects/twitterClone.jpg'

export default function Work() {
    return (
        <div id='work' name='work' className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#DC143C]'>Work</p>
                    <p className="py-6">Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grid Items */}
                    <div
                        style={{ backgroundImage: `url(${carantel})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider flex justify-center'>
                                Car Rental App
                            </span>
                            <p className='text-2xl font-bold text-red-300 flex justify-center'>
                                (car-ANT-el)
                            </p>
                            <div className='pt-8 text-center'>
                                <a href='https://car-ant-el-app.vercel.app/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-200 text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/roufkhalid93/carANTel-app'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-200 text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                                <a href='https://drive.google.com/file/d/1i651rmbO7djAmxrCdJ_VE-SQxoLnADvr/view?usp=sharing'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-200 text-gray-700 font-bold text-lg'>
                                        Video
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${twitterClone})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider flex justify-center'>
                                Twitter Clone App
                            </span>
                            <p className='text-2xl font-bold text-blue-400 flex justify-center'>
                                (twitter-C)
                            </p>
                            <div className='pt-8 text-center'>
                                <a href='https://twitter-clone-two-peach.vercel.app/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-200 text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/roufkhalid93/twitter-clone'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-200 text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${womanicure})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider flex justify-center'>
                                Salon App
                            </span>
                            <p className='text-2xl font-bold text-yellow-200 flex justify-center'>
                                (WoManicure)
                            </p>
                            <div className='pt-8 text-center'>
                                <a href='https://womanicure.vercel.app/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/roufkhalid93/womanicure'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <div
                        style={{ backgroundImage: `url(${workImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${realestate})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${workImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}