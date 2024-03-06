import React, { useState } from "react";
import "./form.css";

const Form = () => {
  // State variables to hold form data and validation errors
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [bookingDate, setBookingDate] = useState("");
  //   const [bookingTime, setBookingTime] = useState("");
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Form Validation
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    }
    if (!bookingDate.trim()) {
      errors.bookingDate = "Booking date is required";
    } else if (new Date(bookingDate) < new Date()) {
      errors.bookingDate = "Booking date must be in the future";
    }

    if (Object.keys(errors).length === 0) {
      // If there are no errors, submit the form
      console.log("Form submitted with data:", {
        name,
        phoneNumber,
        numberOfGuests,
        bookingDate,
      });
      // Reset form fields
      setName("");
      setPhoneNumber("");
      setNumberOfGuests(1);
      setBookingDate("");
    } else {
      // Update errors state to display error messages
      setErrors(errors);
    }
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <div className="left-container">
          <h2>Book Your Table</h2>
        </div>
        <form onSubmit={handleSubmit} className="right-container">
          <div className="form-group form-input">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="form-label">Name:</label>
            {errors.name && <span>{errors.name}</span>}
          </div>
          <br />
          <div className="form-group form-input">
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <label className="form-label">Phone Number:</label>
            {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
          </div>
          <br />
          <div className="form-group">
            <div className="select-list">
              <select name="time" id="time" required>
                <option value>Booking Time:</option>
                <option value="6pm">11:00 AM</option>
                <option value="6pm">12:00 PM</option>
                <option value="6pm">1:00 PM</option>
                <option value="6pm">2:00 PM</option>
                <option value="6pm">3:00 PM</option>
                <option value="6pm">4:00 PM</option>
                <option value="6pm">5:00 PM</option>
                <option value="6pm">6:00 PM</option>
                <option value="6pm">7:00 PM</option>
                <option value="7pm">8:00 PM</option>
              </select>
            </div>
          </div>
          <br />
          <div className="form-group">
            <input
              type="date"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              required
            />
            <label className="form-label">Booking Date:</label>
            {errors.bookingDate && <span>{errors.bookingDate}</span>}
          </div>
          <br />
          <div className="form-group">
            <div className="select-list">
              <select name="time" id="time" required>
                <option value>Select Number of Members</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>
          </div>
          <br />
          <button type="submit" className="btn">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
