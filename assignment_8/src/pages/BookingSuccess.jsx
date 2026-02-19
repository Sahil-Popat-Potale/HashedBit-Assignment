import { useLocation, useNavigate } from "react-router-dom";

export default function BookingSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) return <h2>No Booking Found</h2>;

  return (
    <div className="container">
      <div className="glass success-box">
        <h1>Seat Booked 🎉</h1>
        <p><strong>Booking ID:</strong> {data.bookingId}</p>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Mobile:</strong> {data.mobile}</p>
        <button onClick={() => navigate("/")}>Back to Movies</button>
      </div>
    </div>
  );
}
