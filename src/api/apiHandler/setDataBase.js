import { getDatabase, ref, set } from 'firebase/database';
import { database } from '../../firebase';

function writeMovieData(movieId, title, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'movies/' + movieId), {
    id: movieId,
    movieName: title,
    movie_picture: imageUrl,
  });
}

export { writeMovieData };
