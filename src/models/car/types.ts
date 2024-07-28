/**
 * car brand
 */
type TMark = string;

/**
 * car model
 */

type TModel = string;

/**
 * engine properties
 */

type TEngine = {
    
    /**
     * power in horses
     */

    power: number;

    /**
     * engine capacity
     */

    volume: number;

    /**
     * @todo maybe ENUM is better
     * transmission type
     */

    transmission: string;

    /**
     * @todo maybe ENUM is better
     * fuel type 
     */

    fuel: string;

}

/**
 * typoe of wheel drive (awd, 4wd, 2wd and etc.)
 */

type TDrive = string;

/**
 * equipment
 */

type TEquipmentName = string;

export type TCarModel = {
    _id: string,
    mark: TMark,
    model: TModel,
    engine: TEngine,
    drive: TDrive,
    equipmentName: TEquipmentName,
    price: number,
    createdAt: string
}

