import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb';

const uri = process.env.NEXT_PUBLIC_MONGODB_URI; // MongoDB connection string
const client = new MongoClient(uri);


export async function GET(req) {
  try {
    await client.connect();
    const database = client.db('stock_management');
    const usersCollection = database.collection('products');

    const products = await usersCollection.find({}).toArray();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error', error });
  } finally {
    await client.close();
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, price, quantity } = body;

    if (!name || !price || !quantity) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    await client.connect();
    const database = client.db('stock_management');
    const usersCollection = database.collection('products');

    const newProduct = { name, price, quantity };
    const result = await usersCollection.insertOne(newProduct);

    return NextResponse.json({ message: 'Product added', productId: result.insertedId }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error', error }, { status: 500 });
  } finally {
    await client.close();
  }
}



// export async function GET(request) {
//   return NextResponse.json({ name: 'ash gole' }, { status: 500 })
// }
