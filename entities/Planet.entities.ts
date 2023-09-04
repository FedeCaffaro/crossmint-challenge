export type Direction = 'up' | 'down' | 'right' | 'left';
export type Color = 'white' | 'blue' | 'purple' | 'red';

export abstract class Entity {
    row: number;
    column: number;
    abstract endpointName:string;
    constructor(attributes: { row: number, column: number  }) {
        this.row = attributes.row;
        this.column = attributes.column;
    }
}

export class Polyanets extends Entity {
    endpointName = 'polyanets';
}

export class Soloons extends Entity {
    endpointName = 'soloons';
    color: Color;

    constructor(attributes: { row: number, column: number, color: Color }) {
        super(attributes);
        this.color = attributes.color;
    }
}

export class Comeths extends Entity {
    endpointName = 'comeths';
    direction: Direction;

    constructor(attributes: { row: number, column: number, direction: Direction }) {
        super(attributes);
        this.direction = attributes.direction;
    }
}
