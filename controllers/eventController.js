import cloudinary from 'cloudinary';
import Event from '../models/Event.js'; // Event model
import multer from 'multer'; // Make sure multer is installed for file handling

// Set up Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer memory storage for handling image upload in memory (no need to save it to disk)
const storage = multer.memoryStorage();
const upload = multer({ dest: 'uploads/' }).single('eventImage'); // Assuming you're uploading 'eventImage' field

// Cloudinary image upload helper function (simplified)
const uploadEventImage = async (file) => {
  try {
    if (!file) {
      throw new Error('No image file uploaded');
    }

    // Cloudinary upload directly from buffer
    const cloudinaryResponse = await cloudinary.uploader.upload_stream(
      { resource_type: 'auto' },
      (error, result) => {
        if (error) {
          throw new Error('Cloudinary upload failed: ' + error.message);
        }
        return result;
      }
    );

    // Pipe the file buffer to Cloudinary
    cloudinaryResponse.end(file.buffer); // 'file.buffer' holds the image data

    return { imageUrl: cloudinaryResponse.secure_url };

  } catch (error) {
    console.error('Cloudinary Upload Error:', error);
    return { error: 'Image upload failed' };
  }
};

// Event creation handler
export const createEvent = async (req, res) => {
  try {
    console.log(req.body);
    
    const { eventTitle, eventDescription, eventDate, registrationLink } = req.body;
    const createdBy = req.user.id;

    // Validate input fields
    if (!eventTitle || !eventDescription || !eventDate || !registrationLink) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Handle image upload (using multer middleware for handling file upload)
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: "Error uploading image" });
      }

      if (!req.file) {
        return res.status(400).json({ message: "Image is required" });
      }

      // Upload the image to Cloudinary
      const cloudinaryResponse = await uploadEventImage(req.file);

      if (cloudinaryResponse.error) {
        return res.status(500).json({ error: cloudinaryResponse.error });
      }

      const imageUrl = cloudinaryResponse.imageUrl;

      // Create new event
      const event = new Event({
        eventTitle,
        eventDescription,
        eventDate,
        eventImage: imageUrl, // Store Cloudinary URL
        registrationLink,
        createdBy,
      });

      await event.save();

      res.status(201).json(event);

    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Fetch events handler
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find()
      .sort({ createdAt: -1 }) // Sort by creation date in descending order
      .populate('createdBy', 'name email'); // Assuming createdBy references a User model

    return res.status(200).json({
      msg: 'Events fetched successfully',
      events,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Error fetching events' });
  }
};