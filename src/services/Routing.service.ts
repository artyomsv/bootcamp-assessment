export const AppRouting = {
  ROOT: () => '/',
  ACTORS: () => '/actors',
  ACTORS_BY_ID: (id?: number | string) => `${AppRouting.ACTORS()}/${!!id ? id : ':id'}`,
  MOVIES: () => '/movies',
  MOVIES_BY_ID: (id?: number | string) => `${AppRouting.MOVIES()}/${!!id ? id : ':id'}`,
};
