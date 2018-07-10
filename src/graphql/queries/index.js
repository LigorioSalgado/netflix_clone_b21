import genres from './genres';
import ratings  from './ratings';
import user from './users';
import movies from './movies';

export default {
    ...genres,
    ...ratings,
    ...user,
    ...movies


}