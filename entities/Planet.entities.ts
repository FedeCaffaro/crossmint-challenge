export type Direction = 'up' | 'down' | 'right' | 'left';
export type Color = 'white' | 'blue' | 'purple' | 'red';

export class Entity {
    row: number;
    column: number;    
    constructor(attributes: { row: number, column: number  }) {
        this.row = attributes.row;
        this.column = attributes.column;
    }
}

export class Polyanets extends Entity {
    static entityName = "POLYANETS";
}

export class Soloons extends Entity {
    static entityName = "SOLOONS";
    color: Color;

    constructor(attributes: { row: number, column: number, color: Color }) {
        super(attributes);
        this.color = attributes.color;
    }
}

export class Comeths extends Entity {
    static entityName = "COMETHS";
    direction: Direction;

    constructor(attributes: { row: number, column: number, direction: Direction }) {
        super(attributes);
        this.direction = attributes.direction;
    }
}
