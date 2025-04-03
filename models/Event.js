import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema(
  {
    eventTitle: {
      type: String,
      required: [true, 'Please provide an event title'],
      trim: true,
    },
    eventDescription: {
      type: String,
      required: [true, 'Please provide a description'],
    },
    eventImage: {
      type: String, 
      required: [true, 'Please provide an event image'],
    },
    eventDate: {
      type: Date, 
      required: [true, 'Please provide an event Date'],
    },
    registrationLink: {
      type: String, 
      required: [true, 'Please provide an registration link'],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Event', EventSchema);