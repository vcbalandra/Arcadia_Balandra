import cloudinary from 'cloudinary';
import Event from '../models/Event.js'; // Event model

// Set up Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadEventImage = async (req, res) => {
  try {
      if (!req.file) {
          return { error: "No image file uploaded" };
      }

      const formData = new FormData();
      formData.append("file", fs.createReadStream(req.file.path));
      formData.append("upload_preset", "event_images");
      formData.append("api_key", process.env.CLOUD_API_KEY);

      const cloudinaryResponse = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`,
          formData,
          {
              headers: {
                  ...formData.getHeaders(),
              },
          }
      );

      fs.unlinkSync(req.file.path);

      return { imageUrl: cloudinaryResponse.data.secure_url };

  } catch (error) {
      console.error("Cloudinary Upload Error:", error.response?.data || error);
      return { error: "Image upload failed" };
  }
};

export const createEvent = async (req, res) => {
  try {
      const { eventTitle, eventDescription, eventDate } = req.body;
      const createdBy = req.user.id; 
      if (!eventTitle || !eventDescription || !eventDate) {
          return res.status(400).json({ message: "All fields are required" });
      }

      if (!req.file) {
          return res.status(400).json({ message: "Image is required" });
      }
      const cloudinaryResponse = await uploadEventImage(req, res);


      if (cloudinaryResponse.error) {
          return res.status(500).json({ error: cloudinaryResponse.error });
      }

      const imageUrl = cloudinaryResponse.imageUrl;

      const event = new Event({
          eventTitle,
          eventDescription,
          eventDate,
          eventImage: imageUrl,
          createdBy,
      });

      await event.save();

    
      res.status(201).json(event);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
  }
};

export const getEvents = async (req, res) => {
  try {
    
    const events = await Event.find()
      .sort({ createdAt: -1 }) 
      .populate('createdBy', 'name email') 

    return res.status(200).json({
      msg: 'Events fetched successfully',
      events,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Error fetching events' });
  }
};