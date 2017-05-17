export const fetchCharacters = (location) => {
  return $.ajax({
    method: 'GET',
    url: '/api/characters',
    data: {location}
  });
};
