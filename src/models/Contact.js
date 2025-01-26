import mongoose from 'mongoose';

const { Schema } = mongoose;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'Please provide a valid email address'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required'],
      match: [/^\d{10,15}$/, 'Please provide a valid phone number'],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;
