import React from 'react'

const BrowseCategory = () => {
  return (
    <div>
       <div className="w-screen h-48 md:h-64 flex flex-col justify-center items-center bg-[#F2EFE5]">
        <p className="text-black font-normal text-5xl font-poppins">BrowseCategory</p>
        <div className="mt-4 flex flex-row gap-1 justify-center items-center">
          <p className="text-black text-lg font-medium font-poppins">Home</p>
          <button className="bg-[#F2EFE5] h-[18px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="m6 15l5-5l-5-5l1-2l7 7l-7 7z"
                className="font-medium"
              />
            </svg>
          </button>
          <p className="text-black text-lg font-extralight font-poppins">
          BrowseCategory
          </p>
        </div>
      </div>
    </div>
  )
}

export default BrowseCategory