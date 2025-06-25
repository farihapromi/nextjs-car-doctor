import React from 'react'
import dbConnect, { collectionNameObj } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb';

const ServicesDetails = async({params}) => {
    const p=await params;
      const serviceColection=dbConnect(collectionNameObj.serviceColection)
        const data=await serviceColection.findOne({_id:new ObjectId(p.id)})
  return (
    <div>
      
      
    </div>
  )
}

export default ServicesDetails
