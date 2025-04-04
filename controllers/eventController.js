import Event from '../models/Event.js'; // Import the Event model
import path from 'path';

export const createEvent = async (req, res) => {
  try {
    // Ensure that the uploaded file is logged and available
    console.log('Uploaded file:', req.file);

    const { eventTitle, eventDescription, eventDate, registrationLink } = req.body;
    const eventImage = req.file ? req.file.path : null; 
    
    if (!eventTitle || !eventDescription || !eventDate || !registrationLink) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'Event image is required' });
    }

    // Get the file path from the uploaded file
    const eventImagePath = req.file.path; // This should be correct now

    // Validate `createdBy` (which comes from the user authentication)
    // if (!req.user || !req.user.id) {
    //   return res.status(400).json({ message: 'User not authenticated' });
    // }

    // Create the event object
    const event = new Event({
      eventTitle,
      eventDescription,
      eventDate,
      registrationLink,
      eventImage, // Save the file path
      // createdBy: req.user.id,      // Store the user ID of the creator
    });

    // Save the event to the database
    await event.save();

    return res.status(201).json({ message: 'Event created successfully', event });
  } catch (error) {
    console.error('Error in createEvent controller:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Get all events
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 }).populate('createdBy', 'name email');
    return res.status(200).json({ message: 'Events fetched successfully', events });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error fetching events' });
  }
};