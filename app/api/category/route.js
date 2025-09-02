import clientPromise from '../../lib/mongodb'; // Adjust path as needed
import { NextResponse } from 'next/server';

export const revalidate = 10;

export async function GET() {
  try {
    const client = await clientPromise; // Connect to MongoDB
    const db = client.db('Power'); // Replace with your database name
    const collection = db.collection('Products'); // Replace with your collection name

    // Get unique categories
    const categories = await collection.distinct("category"); // change field name if needed

    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error fetching categories from MongoDB:', error);
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
}
