import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Subscriber from '@/models/Subscriber';


export async function POST(req) {
  try {
    await connectToDatabase();
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json(
        { message: 'This email is already subscribed' },
        { status: 400 }
      );
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    return NextResponse.json(
      { message: 'Subscriber added successfully', subscriber: newSubscriber },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding subscriber:', error);
    return NextResponse.json(
      { message: 'Error adding subscriber', error: error.message },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    await connectToDatabase();
    const subscribers = await Subscriber.find();

    return NextResponse.json(subscribers, { status: 200 });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json(
      { message: 'Error fetching subscribers', error: error.message },
      { status: 500 }
    );
  }
}


export async function PATCH(req) {
  try {
    await connectToDatabase();
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    const updatedSubscriber = await Subscriber.findOneAndUpdate(
      { email },
      { isSubscribed: false },
      { new: true }
    );

    if (!updatedSubscriber) {
      return NextResponse.json(
        { message: 'Subscriber not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Successfully unsubscribed', subscriber: updatedSubscriber },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error unsubscribing user:', error);
    return NextResponse.json(
      { message: 'Error unsubscribing user', error: error.message },
      { status: 500 }
    );
  }
}
