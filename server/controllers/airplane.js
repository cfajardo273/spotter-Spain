//import { request, response } from 'express';
import {
  getAllAirplanes,
  getAirplaneById,
  putAirplaneById,
  postAirplaneById,
} from '../models/airplane.js';

export const ListAirplanes = async (request, response) => {
  try {
    const airplanes = await getAllAirplanes();
    response.status(200).send({
      airplanes,
    });
  } catch (error) {
    const { message } = error;
    response.status(500).send({
      message,
    });
  }
};

export const getResourceAirplaneById = async (request, response) => {
  const {
    params: { id },
  } = request;
  try {
    const airplane = await getAirplaneById(id);
    response.status(200).send({
      airplane,
    });
  } catch (error) {
    const { message } = error;
    response.status(500).send({
      message,
    });
  }

};

export const putResourceAriplaneById = async (request, response) => {
  const {
    params: { id },
  } = request;
  try {
    const airplane = await putAirplaneById(id);
    response.status(200).send({
      airplane,
    });
  } catch (error) {
    const { message } = error;
    response.status(500).send({
      message,
    });
  }
};

export const postResourceAirplaneById = async (request, response) => {
  const {
    params: { id },
  } = request;
  try {
    const airplane = await postAirplaneById(id);
    response.status(200).send({
      airplane,
    });
  } catch (error) {
    const { message } = error;
    response.status(500).send({
      message,
    });
  }
};



