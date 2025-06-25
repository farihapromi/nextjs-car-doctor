import React from 'react'
import dbConnect, { collectionNameObj } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb';
import Image from 'next/image';

const ServicesDetails = async({params}) => {
    const p=await params;
      const serviceColection=dbConnect(collectionNameObj.serviceColection)
        const data=await serviceColection.findOne({_id:new ObjectId(p.id)})
  return (
    <div>
        {/* Banner */}
        <section className='flex justify-center'>
          <figure className='relative'>
              <Image src='/assets/images/checkout/checkout.png' 
            width={1137}
            height={300}
            alt={'banner'}/>
            <div className='absolute overlay-bg w-full h-full border-2 border-red-400 top-0'>
                <div>
                    <div className='w-full h-full font-bold ps-20 flex items-center text-2xl'>
                        <h1 className="text-white">Services Details</h1>
                    </div>
                </div>

            </div>
          </figure>
        </section>
        {/* IMage section */}
      <section>
        
      </section>
      
    </div>
  )
}

export default ServicesDetails
