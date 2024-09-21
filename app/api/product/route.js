import { NextResponse } from 'next/server'

// export async function GET(request) {
//   return NextResponse.json({ name: 'ash gole' }, { status: 500 })
// }

import { MongoClient } from 'mongodb';

const uri = process.env.NEXT_PUBLIC_MONGODB_URI; // MongoDB connection string
const client = new MongoClient(uri);

export async function GET(req) {
  try {
    await client.connect();
    const database = client.db('demodb');
    const usersCollection = database.collection('users');

    const users = await usersCollection.find({}).toArray();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error', error });

  } finally {
    await client.close();
  }
}
