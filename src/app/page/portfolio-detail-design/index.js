import React from 'react'

export default function index({id, data, DataArray}) {
  return (
    <React.Fragment>
        <div className="overlay h-[400px] lg:top-[96px] sm:top-0 z-20 border-t border-gray-300">

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
                <div className='max-w[650px] w-[100%] m-auto'>
                    <p className='opacity-3 sm:text-left text-center font-sans text-[#223740] mb-3'>
                        Project sample
                    </p>
                    <h1 className='opacity-3 text-[#223740] sm:text-left text-center w-full sm:w-3/4 font-recoletaBold text-4xl md:text-4xl lg:text-4xl xl:text-4xl'>
                        {data.title}
                    </h1>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
