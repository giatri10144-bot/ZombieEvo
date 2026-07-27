import "./systems/evolution.js";
import "./systems/debug.js";

import { world } from "@minecraft/server";


world.afterEvents.worldLoad.subscribe(() => {


    world.sendMessage(
        "§2[ZombieEvo] §aLoaded v0.1"
    );


});
