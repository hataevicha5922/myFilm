import { getDatabase, ref, child, get } from 'firebase/database';
import { database } from '../../firebase';

const getData = ref(getDatabase());
get(child(getData, `movies`));

export { getData };
