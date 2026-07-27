import { system, world } from "@minecraft/server";
import { Database } from "./database.js";


world.afterEvents.scriptEventReceive.subscribe((event) => {


    if (event.id !== "ze:debug") return;


    const day = Database.get(
        "ZE_EVOLUTION_DAY",
        1
    );


    const threat = Database.get(
        "ZE_THREAT",
        0
    );


    const infection = Database.get(
        "ZE_INFECTION",
        0
    );


    const message = 
`§2===== ZombieEvo =====

§aEvolution Day: §f${day}

§cThreat: §f${threat}

§5Infection: §f${infection}%

§2====================`;


    world.sendMessage(message);


});
