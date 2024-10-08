import { NextResponse } from 'next/server'
import { MongoClient,ObjectId  } from 'mongodb';

const uri = process.env.NEXT_PUBLIC_MONGODB_URI; // MongoDB connection string
const client = new MongoClient(uri);


// export async function GET(req) {
//   try {
//     await client.connect();
//     const database = client.db('stock_management');
//     const usersCollection = database.collection('products');

//     const products = await usersCollection.find({}).toArray();
//     return NextResponse.json(products);
//   } catch (error) {
//     return NextResponse.json({ message: 'Internal Server Error', error });
//   } finally {
//     await client.close();
//   }
// }

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

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get('name'); // Get the name query parameter if it exists

    await client.connect();
    const database = client.db('stock_management');
    const productsCollection = database.collection('products');

    // Aggregation pipeline for filtering or fetching all products
    const pipeline = [];

    // Add the $match stage only if a 'name' query is provided
    if (name) {
      pipeline.push({
        $match: {
          name: { $regex: name, $options: 'i' }, // Case-insensitive match for name
        },
      });
    }

    // Fetch all products if no 'name' is provided
    const products = await productsCollection.aggregate(pipeline).toArray();

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error', error });
  } finally {
    await client.close();
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get('id'); // Get product ID from query parameter

    if (!productId) {
      return NextResponse.json({ message: 'Product ID is required' }, { status: 400 });
    }

    await client.connect();
    const database = client.db('stock_management');
    const productsCollection = database.collection('products');
    const result = await productsCollection.deleteOne({ _id: new ObjectId(productId) });

    if (result.deletedCount === 1) {
      return NextResponse.json({ message: 'Product deleted successfully' });
    } else {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error', error }, { status: 500 });
  } finally {
    await client.close();
  }
}


// export async function GET(request) {
//   return NextResponse.json({ name: 'ash gole' }, { status: 500 })
// }
