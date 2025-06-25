'use server';

import dbConnect, { collectionNameObj } from '@/lib/dbConnect';

export const registerUser = async (payload) => {
  const userCollection = dbConnect(collectionNameObj.userCollection);
  //valiudation of user
  const user = userCollection.findOne({ email: payload.email });
  if (!user) {
    const result = await userCollection.insertOne(payload);
    return result;
  }

  return null;
};
