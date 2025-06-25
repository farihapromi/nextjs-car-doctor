'use server';

import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import bcrypt from 'bcrypt';

export const registerUser = async (payload) => {
  const serviceColection = dbConnect(collectionNameObj.serviceColection);
  const userCollection = dbConnect(collectionNameObj.userCollection);
  //valiudation of user
  const { email, password } = payload;
  if (!email || !password) {
    return { succes: false };
  }
  const user = await userCollection.findOne({ email: payload.email });
  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;
    const result = await userCollection.insertOne(payload);
    const { acknowledged, insertedId } = result;
    return { acknowledged, insertedId };
  }

  return { success: false };
};
