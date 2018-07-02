import Person from '../../../assets/person.svg';

export const constructPath = (path?: string) => {
  if (!path) {
    return Person;
  }
  if (path && path.startsWith('http')) {
    return path;
  } else {
    return '/api/image' + path;
  }
};
