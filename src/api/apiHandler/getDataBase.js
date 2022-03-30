import { getDatabase, ref, child, get } from 'firebase/database';
import { database } from '../../firebase';

function getMovies(data, foo) {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `movies`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const arrMovies = Object.values(snapshot.val());
        const movs = arrMovies.map((mov) => ({
          id: mov.id,
          title: mov.movieName,
          img: mov.movie_picture,
        }));
        foo(movs);
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export { getMovies };
