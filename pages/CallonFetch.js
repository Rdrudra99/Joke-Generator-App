import React from 'react'
import customuseFetch from './customeUseFetch'
export const CallonFetch = () => {
    const [data,error,loading,refatch] = customuseFetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit");
    console.log(data);
    if (loading) {
        return (
            <div>
                <h1 className='flex justify-center align-center animated-spin rounded-full h-32 w-32 border-b-2 border-[#2952e3]'>Loading...</h1>
            </div>
        )
    }
    if (error) { 
        console.log(error);
    }
  return (
    <div>
        <h1 className='text-6xl font-bold '>{data?.setup}</h1>
        <h1 className='text-6xl font-bold text-blue-600 mt-8'>{data?.delivery}</h1>
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full tex-sm px-5 py-2.5 text-center mt-9 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={refatch}>Click Me</button>
    </div>
  )
}

export default CallonFetch;
