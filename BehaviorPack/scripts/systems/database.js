import { world } from "@minecraft/server";


export class Database {


    static get(key, defaultValue = 0) {

        let value = world.getDynamicProperty(key);


        if (value === undefined) {

            world.setDynamicProperty(
                key,
                defaultValue
            );

            return defaultValue;
        }


        return value;

    }



    static set(key, value) {

        world.setDynamicProperty(
            key,
            value
        );

    }



    static add(key, amount) {

        let current = this.get(key, 0);

        this.set(
            key,
            current + amount
        );

    }

}
