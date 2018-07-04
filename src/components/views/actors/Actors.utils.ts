import Silent from '../../../assets/silent.svg';

export const constructPath = (path?: string, width: number = 185, unknownImage?: string) => {
  if (path === null || path === undefined || path.trim().length === 0 || path === 'null') {
    return Silent;
  }
  if (path && path.startsWith('http')) {
    return path;
  } else {
    return `/api/image/w${width}${path}`;
  }
};

export const constructPathNoFallBack = (path?: string, width: number = 185, unknownImage?: string) => {
  if (path && path.startsWith('http')) {
    return path;
  }
  return `/api/image/w${width}${path}`;
};
