import axios from "axios";
import {Soloons,Comeths,Entity } from '../entities/Planet.entities'
import { getEntitiesFromGoal } from "./megaverse.service";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const CANDIDATE_ID = process.env.NEXT_PUBLIC_CANDIDATE_ID;

const recreateEntityOnMap = async (entity: Entity) => {
  const endpoint = `${BASE_URL}/${entity.constructor.name.toLowerCase()}`; // Using the entity's class name to determine the endpoint.
  let data: any = {
      row: entity.row,
      column: entity.column,
      candidateId: CANDIDATE_ID
  };

  if (entity instanceof Soloons) {
      data.color = entity.color;
  } else if (entity instanceof Comeths) {
      data.direction = entity.direction;
  }

  await axios.post(endpoint, data);
};

export const recreateGoalOnEmptyMap = async () => {
  const entities = await getEntitiesFromGoal();
  for (const entity of entities) {
      await recreateEntityOnMap(entity);
  }
};