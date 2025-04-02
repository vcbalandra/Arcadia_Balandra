import React, { useState } from "react";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/Dashboard";
import { useNavigate } from "react-router-dom";
 
const CreateEventForm = () => {
    const [eventTitle, setTitle] = useState("");
    const [eventDescription, setDescription] = useState("");
    const [eventDate, setDate] = useState("");
    const [eventImage, setImage] = useState(null);
    const navigate = useNavigate();
 
    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };
 
    const handleCreateEvent = async (event) => {
        event.preventDefault();
 
        const formData = new FormData();
        formData.append("eventTitle", eventTitle);
        formData.append("eventDescription", eventDescription);
        formData.append("eventDate", eventDate);
        if (eventImage) {
            formData.append("eventImage", eventImage);
        }
 
        try {
            const response = await fetch("http://localhost:5200/add-event", {
                method: "POST",
                body: formData,
                credentials: "include",
            });
 
            const data = await response.json();
 
            if (response.ok) {
                toast.success("Event created successfully!");
                navigate('/admin/events');
                //reset form fields
                setTitle("");
                setDescription("");
                setDate("");
                setImage(null);
            } else {
                toast.error(data.message || "Failed to create event!");
            }
        } catch (error) {
            console.error("Error creating event:", error);
            toast.error("Server error while creating event!");
        }
    };
 
    return (
        <Wrapper>
            <Navbar />
            <div className="container">
                <h2>Create New Event</h2>
                <form onSubmit={handleCreateEvent}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            value={eventTitle}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            value={eventDescription}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date</label>
                        <input
                            type="date"
                            className="form-control"
                            value={eventDate}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Event Image</label>
                        <input
                            type="file"
                            className="form-control"
                            onChange={handleFileChange}
                            accept="image/*"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Create Event
                    </button>
                </form>
            </div>
 
        </Wrapper>
    );
};
 
export default CreateEventForm;