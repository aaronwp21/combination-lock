// src/mocks/handlers.js
import { rest } from "msw";
// import { nanoid } from "nanoid";
import { v4 as uuidv4 } from 'uuid';
import {CARS_ENDPOINT} from './../settings'

const firstCar = {
  _id: 1,
  name: 'Test Car',
  bhp: 1,
  avatar_url: "https://static.thenounproject.com/png/449586-200.png"
}

const isBrowser = typeof window !== "undefined";

const domain = CARS_ENDPOINT;
const baseAPIRoute = `/api`;
const API_Version = `/v1`;
const APIStemURL = `${baseAPIRoute}${API_Version}`;
const endpointFragment = "/cars";
export const fullCarsURL = `${domain}${APIStemURL}${endpointFragment}`;

const CARS_STORAGE_KEY = "cars";

let getCars = () => console.log("trying to use sessionStorage on server");
let setCars = () => console.log("trying to use sessionStorage on server");

if (isBrowser) {
  getCars = () => JSON.parse(sessionStorage.getItem(CARS_STORAGE_KEY));
  setCars = (cars) => sessionStorage.setItem(CARS_STORAGE_KEY, cars);
}

let cars = [firstCar];
sessionStorage.setItem(CARS_STORAGE_KEY, JSON.stringify([cars]));

export const defaultAvatarURL = 'default avatar url'

export const handlers = [
  rest.get(fullCarsURL, (req, res, ctx) => {
    return res(ctx.delay(500), ctx.status(200), ctx.json(cars));
  }),
  rest.post(fullCarsURL, (req, res, ctx) => {
    const newCar = {
      _id: uuidv4(),
      ...req.body,
    };
    if (!req.body.avatar_url) {
      newCar.avatar_url = defaultAvatarURL;
    }
    cars = [...cars, newCar];
    return res(ctx.delay(500), ctx.status(201), ctx.json(newCar));
  }),
  rest.put(`${fullCarsURL}/:id`, (req, res, ctx) => {
    const idx = cars.findIndex(({ _id }) => _id === req.params.id);

    const updatedCar = { ...cars[idx], ...req.body };

    cars = [...cars.slice(0, idx), updatedCar, ...cars.slice(idx + 1)];
    return res(ctx.delay(500), ctx.status(200));
  }),
  rest.delete(`${fullCarsURL}/:id`, (req, res, ctx) => {
    const idx = cars.findIndex(({ _id }) => _id === req.params.id);

    cars = [...cars.slice(0, idx), ...cars.slice(idx + 1)];
    return res(ctx.delay(500), ctx.status(204));
  }),
];
