
import React from 'react'
import Image from 'next/image'
import dbConnect from '@/lib/dbConnect'

const ServicesSection =async () => {
    const serviceColection=dbConnect('services')
    const data=await serviceColection.find({}).toArray()


  return (
    <div className='grid grid-cols-12 gap-4 container mx-auto mt-10'>
        {
            data.map((item)=>{
                return <div className=' col-span-12 md:col-span-6 lg:col-span-4 p-4 h-full border' key={item._id}>
                  <figure className='w-full h-3/4 flex justify-center items-center'>
                    <Image 
                    className='w-full h-full object-fit'
                    src={item.img} width={314} height={208} alt="services"/>
                    </figure>
                    <h4>{item.title}</h4>
                    <h3>Price:{item.price}</h3>

                </div>
            }
        
    )}
      
    </div>
  )
}

export default ServicesSection
