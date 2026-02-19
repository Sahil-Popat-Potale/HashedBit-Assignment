import { movies } from "../data";
import { Link } from "react-router-dom";

export default function Movies() {
  return (
    <div className="container">
      <h1>Now Showing</h1>
      <div className="grid">
        {movies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            className="card glass"
          >
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
