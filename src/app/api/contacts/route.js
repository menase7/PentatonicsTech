import { NextResponse } from 'next/server';
import Contact from '@/models/Contact';
import connectToDatabase from '@/lib/db';

export async function POST(req) {
  try {
    await connectToDatabase();

    const data = await req.json();

    const { name, email, phoneNumber, message } = data;

    if (!name || !email || !phoneNumber || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    const newContact = new Contact({ name, email, phoneNumber, message });
    await newContact.save();

    return NextResponse.json(
      { message: 'Contact saved successfully', contact: newContact },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { message: `Error saving contact: ${error.message}` },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();

    const contacts = await Contact.find();

    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { message: `Error fetching contacts: ${error.message}` },
      { status: 500 }
    );
  }
}
