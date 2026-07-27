import "./systems/evolution.js";

import { world } from "@minecraft/server";


world.afterEvents.worldLoad.subscribe(() => {


    world.sendMessage(
        "§2[ZombieEvo] §aEvolution System Loaded"
    );


});
