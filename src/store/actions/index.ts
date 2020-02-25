import { createAction } from 'typesafe-actions'


import { WEATHER_GET } from '../constants'


export const weatherGetAction = createAction(WEATHER_GET, resolve => (lat:number, lng: number) => resolve({lat, lng}));
