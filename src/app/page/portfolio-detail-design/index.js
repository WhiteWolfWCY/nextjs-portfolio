import React from 'react'

export default function index({id, data, DataArray}) {
  return (
    <React.Fragment>
        <div className="
        overlay lg:top-[96px] sm:top-0 z-20 border-t border-gray-300"
        style={{
            height: "400px"
        }}
        >
            
        </div>
        <div className='relative '>
            <img 
            src={data.images[0]} 
            alt="bg photo"
            className='h-[400px] lg:mt-24 sm:mt-0 object-fill'
            style={{
                backgroundSize: 'cover',
            }}
            width={"100%"}
            />
        </div>
        <div className='absolute z-30 top-[42px] sm:top-[200px] sm:left-[65px] justify-center items-center w-full px-10 sm:w-3/4 xl:w-1/2 sm:px-0 sm:text-left '>
            <div className='container m-auto'>
                <div className='max-w-[650px] w-[100%] m-auto'>
                    <p className='opacity-3 sm:text-left text-center font-sans text-[#223740] mb-3'>
                        Project sample
                    </p>
                    <h1 className='opacity-3 text-[#223740] sm:text-left text-center w-full sm:w-3/4 font-recoletaBold text-4xl md:text-4xl lg:text-4xl xl:text-4xl'>
                        {data.title}
                    </h1>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-12 relative space-x-0 lg:space-x-8'
            style={{
                background: "linear-gradient(90deg, rgba(238, 247, 251, 1) 58%, rgba(255, 255, 255, 1) 52%)"
            }}
        >
            <div className='col-span-12 lg:col-span-8 mb-20 scroll lg:px-0 sm:px-20'>
                {
                    data.images.map((item, index)=>(
                        <div key={index} className='flex justify-center lg:justify-end items-center'>
                            <img src={item}
                            alt="portfolio photos" 
                            height='auto'
                            width={800}
                            className='mt-20 rounded-lg '
                            />
                            
                        </div>
                    ))
                }
            </div>
            <div className='col-span-12 lg:col-span-4 lg:px-0 sm:px-20'>
                <div className='mt-10 sm:mt-24 w-full lg:max-w-[300px] lg:px-1 px-3 sticky top-36 pb-14'>
                    <h1 className='text-3xl mb-4 text-[#48AFDE] '>
                        {data.name}
                    </h1>
                    <p className='text-[14px] font-sans mb-4 text-[#223740]'>
                        {data.des}
                    </p>
                    <p id="highlight"
                    className='my-2 text-dark text-[20px] font-sans'
                    >Project Descriptions</p>
                    <p className='text-[14px] font-sans mb-4 text-[#223740]'>
                        {data.des1}
                    </p>
                    <div className='flex flex-wrap'>
                        <h1 className='mr-5 text-[14px] bg-[#63c5f1] lg:bg-[#EEF7FB] px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#6A787D]'>
                            SKILL
                        </h1>
                        <h1 className='mr-5 text-[14px] bg-[#63c5f1] lg:bg-[#EEF7FB] px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#6A787D]'>
                            SKILL
                        </h1>
                        <h1 className='mr-5 text-[14px] bg-[#63c5f1] lg:bg-[#EEF7FB] px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#6A787D]'>
                            SKILL
                        </h1>
                        <h1 className='mr-5 text-[14px] bg-[#63c5f1] lg:bg-[#EEF7FB] px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#6A787D]'>
                            SKILL
                        </h1>
                        <h1 className='mr-5 text-[14px] bg-[#63c5f1] lg:bg-[#EEF7FB] px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#6A787D]'>
                            SKILL
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
