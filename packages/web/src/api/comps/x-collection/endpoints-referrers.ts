// utils:
import APIHandler from '../../base';

// >>>> GET, fetching all data:
export const fetchAllDoors = (currPage: number) =>
  APIHandler.get(`/Door/all?page=${currPage}`);

// >>>> POST, create new Door::
export const createDoor = (DoorToCreate: object) =>
  APIHandler.post('Door/new', DoorToCreate);

// >>>> DELETE, delete a specific Door::
export const deleteDoor = (id: string) => APIHandler.delete(`/Door/${id}`);

// >>>> UPDATE, update a specific Door::
export const updateDoor = (id: string, DoorToUpdate: object) =>
  APIHandler.patch(`/Door/${id}`, DoorToUpdate);

// >>>> GET, get Door with its `id`::
export const getSingleDoor = (id: string) => APIHandler.get(`/Door/s/${id}`);
