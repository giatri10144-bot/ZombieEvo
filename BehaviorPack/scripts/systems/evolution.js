import { system } from "@minecraft/server";
import { Database } from "./database.js";


let tick = 0;


system.runInterval(() => {


    tick++;


    if (tick >= 24000) {


        Database.add(
            "ZE_EVOLUTION_DAY",
            1
        );


        Database.add(
            "ZE_THREAT",
            1
        );


        Database.add(
            "ZE_INFECTION",
            0.2
        );


        tick = 0;


    }


},1);
