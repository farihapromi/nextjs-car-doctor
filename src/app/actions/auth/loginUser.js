'use server';
import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import bcrypt from 'bcrypt';

export const loginUser = async (payload) => {
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
