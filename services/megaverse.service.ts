import axios from "axios";
import { Entity,Direction,Color,Comeths,Soloons, Polyanets } from "@/entities/Planet.entities";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const CANDIDATE_ID = process.env.NEXT_PUBLIC_CANDIDATE_ID;


const createEntity = (item: string, rowIndex: number, colIndex: number) => {
  if (item.includes('COMETH')) {
      const direction = item.split('_')[0].toLowerCase() as Direction;
      return new Comeths({ row: rowIndex, column: colIndex, direction });
  }
  if (item.includes('SOLOON')) {
      const color = item.split('_')[0].toLowerCase() as Color;
      return new Soloons({ row: rowIndex, column: colIndex, color });
  }
  if (item === "POLYANET") {
      return new Polyanets({ row: rowIndex, column: colIndex });
  }
  return null;
}

const parseGoalResponse = (data: any): Entity[] => {
  const entities: Entity[] = []; 
  data.forEach((row: string[], rowIndex: number) => {
      row.forEach((item: string, colIndex: number) => {
          if (item !== "SPACE") {
              const entity = createEntity(item, rowIndex, colIndex);
              if (entity) entities.push(entity);
          }
      });
  });
  return entities;
};

export const fetchGoal = async () => {
  const response = await axios.get(`${BASE_URL}/map/${CANDIDATE_ID}/goal`);
  return response.data.goal;
};

export const getEntitiesFromGoal = async (): Promise<Entity[]> => {
  const goalData = await fetchGoal();
  return parseGoalResponse(goalData);
};


