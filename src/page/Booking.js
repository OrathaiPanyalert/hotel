import React from "react";
import "./Booking.css";

function Booking() {
  return (
    <div className="card booking-card">
      <h1>Booking</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea id="address" name="address" required></textarea>
        </div>
        <button type="submit" className="submit-button">Book Now</button>
      </form>
    </div>
  );
}

export default Booking;