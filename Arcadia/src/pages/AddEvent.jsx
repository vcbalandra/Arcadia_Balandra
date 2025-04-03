import React, { useState } from "react";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/Dashboard";
import { useNavigate } from "react-router-dom";
import customFetch from '../utils/customFetch';
 
const CreateEventForm = () => {
    const [eventTitle, setTitle] = useState("");
    const [registrationLink, setRegistration] = useState("");
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
        formData.append("registrationLink", registrationLink);
        formData.append("eventDescription", eventDescription);
        formData.append("eventDate", eventDate);
        if (eventImage) {
            formData.append("eventImage", eventImage);
        }
    
        // Log FormData to inspect the contents
        for (let pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }
    
        try {
            const response = await customFetch.post("/add-event", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    
            const data = await response.json();
    
            if (response.ok) {
                toast.success("Event created successfully!");
                navigate('/admin/events');
                // Reset form fields
                setTitle("");
                setRegistration("");
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
            <div className="container">
                <h2>Create New Event</h2>
                <form onSubmit={handleCreateEvent} className="form" encType="multipart/form-data">
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
                        <label className="form-label">Registration Link</label>
                        <input
                            type="text"
                            className="form-control"
                            value={registrationLink}
                            onChange={(e) => setRegistration(e.target.value)}
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