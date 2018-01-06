import request from 'superagent';

export function getShips() {
  return request.get('https://api.myjson.com/bins/o7ujv');
}
