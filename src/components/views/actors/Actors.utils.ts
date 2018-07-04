import Person from '../../../assets/person.svg';

export const constructPath = (path?: string, width: number = 185) => {
  if (path === null || path === undefined || path.trim().length === 0 || path === 'null') {
    return Person;
  }
  if (path && path.startsWith('http')) {
    return path;
  } else {
    return `/api/image/w${width}${path}`;
  }
};
