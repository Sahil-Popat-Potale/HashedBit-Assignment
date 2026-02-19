import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function BookingForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = Math.floor(Math.random() * 1000000);
    navigate("/success", { state: { ...form, bookingId, movieId: id } });
  };

  return (
    <div className="container glass" style={{ padding: "30px", marginTop:"50px" }}>
      <h1>Book Your Seat</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Name"
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Mobile"
          required
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
