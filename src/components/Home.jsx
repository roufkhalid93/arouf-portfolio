import { HiArrowNarrowRight } from 'react-icons/hi'
import Work from '../components/Work'
import me from '../assets/me.jpg'
import me2 from '../assets/me2.jpg'
import { useState } from 'react'

export default function Home() {
    const showWork = () => {
        document.getElementById('work').scrollIntoView({ behavior: 'smooth' })
    }

    const [mainImage, setMainImage] = useState(me)
    const toggleImage = () => {
        setMainImage((prevImage) => (prevImage === me ? me2 : me));
    }

    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 items-center h-full'>
                {/* container  */}
                <div className='md:col-span-2 flex flex-col justify-center'>
                    <p className='text-[#8892b0] text-xl'>
                        Hi, my name is
                    </p>
                    <h1 className='text-4xl sm:text-7xl font-bold text-[#F88379] hover:scale-105 duration-500'>
                        Abdur Rouf
                    </h1>
                    <h2 className='text-3xl sm:text-5xl font-bold text-gray-300'>
                        I'm a Full Stack Developer
                    </h2>
                    <p className='text-[#8892b0] max-w-[700px] my-2'>
                        I'm a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.
                    </p>
                    <div>
                        <button
                            onClick={showWork}
                            className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#F88379] hover:border-[#F88379] hover:text-black'
                        >
                            View Works
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center">
                    <div
                        onClick={toggleImage}
                        className='w-60 h-60 flex items-center justify-center rounded-full overflow-hidden hover:scale-110 hover:shadow-[0_0_20px_10px_#FAA0A0] duration-500'>
                        <img src={mainImage} alt='{/}' />
                    </div>
                </div>
            </div>
        </div>
    )
}
