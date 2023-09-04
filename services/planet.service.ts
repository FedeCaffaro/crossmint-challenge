import axios from "axios";
import {Soloons, Comeths, Entity} from '../entities/Planet.entities';
import { getEntitiesFromGoal } from "./megaverse.service";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const CANDIDATE_ID = process.env.NEXT_PUBLIC_CANDIDATE_ID;

const recreateEntityOnMap = async (entity: Entity) => {
    try {
        const endpoint = `${BASE_URL}/${entity.constructor.name.toLowerCase()}`; 
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
        console.log(endpoint,data);
        await axios.post(endpoint, data);
    } catch (error) {
        console.error(`Error recreating entity ${entity.constructor.name} at row ${entity.row} and column ${entity.column}:`, error);
    }
};

const deleteEntityOnMap = async (entity: Entity) => {
    try {
        const endpoint = `${BASE_URL}/${entity.constructor.name.toLowerCase()}`; 
        const data: any = {
            row: entity.row,
            column: entity.column,
            candidateId: CANDIDATE_ID
        };
        await axios.delete(endpoint, {
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        });
    } catch (error) {
        console.error(`Error deleting entity ${entity.constructor.name} at row ${entity.row} and column ${entity.column}:`, error);
    }
};

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const recreateGoalOnEmptyMap = async () => {
    try {
        const entities = await getEntitiesFromGoal();
        for (const entity of entities) {
            await recreateEntityOnMap(entity);
            await delay(1000);
        }
    } catch (error) {
        console.error("Error recreating goal on empty map:", error);
    }
};

export const deleteMap = async () => {
    try {
        const entities = await getEntitiesFromGoal();
        for (const entity of entities) {
            await deleteEntityOnMap(entity);
            await delay(1000);
        }
    } catch (error) {
        console.error("Error deleting map entities:", error);
    }
};
