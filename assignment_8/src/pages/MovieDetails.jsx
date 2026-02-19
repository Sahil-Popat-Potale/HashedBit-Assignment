import { useParams, useNavigate } from "react-router-dom";
import { movies } from "../data";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === parseInt(id));

  return (
    <div className="container glass" style={{ padding:"30px", marginTop:"50px",
      display:"flex", flexDirection:"column", alignItems:"center" }}>
      <h1>{movie.title}</h1>
      <img src={movie.image} className="details-img" />
      <p>{movie.description}</p>
      <button onClick={() => navigate(`/book/${movie.id}`)}>
        Book Seat
      </button>
    </div>
  );
}
