import React from 'react'


const catagoryItems = [
  { id:1, title:"Tshirt",  image:"../public/images/image1.jpeg"},
  { id:2, title:"band",  image:"../public/images/image2.png"},
  { id:3, title:"caps",  image:"../public/images/image3.jpg"},
  { id:4, title:"shoes", image:"../public/images/image4.jpeg"},
]

const Category = () => {
  return (
    <div className='section-container py-16'>
      <div className='text-center'>
      <p className='text-green uppercase tracking-wide font-medium text-lg'>customer favaorites</p>
      <h2 className='text-4x1 md:text-5x1 font-bold my-2 md:leading-sung leading-sung'>Popular Catagories</h2>
    </div>

    {/*category card*/}
    <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12'>
      {
        catagoryItems.map((item,i) => (
          <div key={i} className='shadow-lg rounded-md bg-white  py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all '>
            <div className='flex w-full mx-auto items-center justify-center'>
              <img src={item.image} alt="" className='bg-[#c1f1c6] p-5 rounded-full w-28 h-28'/>
              </div>
              <div className='mt-5 space-y-1'>
                <h5>{item.title}</h5>
                <p>{item.des}</p>
                </div>
                </div>


        ))
      }

    </div>
    </div>
  )
}

export default Category