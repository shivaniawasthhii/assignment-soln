const cities = ['Kiev', 'Prague', 'Zurich', 'Amsterdam', 'Barcelona', 'Berlin'];
const availableTickets = [
  'Kiev-Prague',
  'Prague-Zurich',
  'Zurich-Amsterdam',
  'Amsterdam-Barcelona',
  'Barcelona-Berlin',
  'Berlin-Kiev',
  'Berlin-Amsterdam',
];

function findTravelRoute() {
  const route = ['Kiev'];

  while (route.length < cities.length) {
    const currentCity = route[route.length - 1];
    const nextCity = findNextCity(currentCity, route);

    if (nextCity) {
      route.push(nextCity);
    } else {
      return [];
    }
  }

  return route;
}

function findNextCity(currentCity, visitedCities) {
  for (const ticket of availableTickets) {
    const [start, end] = ticket.split('-');
    if (start === currentCity && !visitedCities.includes(end)) {
      return end;
    }
  }
  return null;
}

const sonRoute = findTravelRoute();

if (sonRoute.length > 0) {
  console.log('Your son\'s travel route:');
  console.log(sonRoute.join(' -> '));
} else {
  console.log('No valid route found.');
}
