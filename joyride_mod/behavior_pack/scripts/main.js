import { world, system } from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
  itemComponentRegistry.registerCustomComponent("joyride:god_mode", {
    onConsume(event) {
      const player = event.source;
      const duration = 100; // 5 seconds (20 ticks per second)
      const max = 255;       // max amplifier

      // GOD MODE
      player.addEffect("resistance", duration, { amplifier: max });    // invincible
      player.addEffect("strength", duration, { amplifier: max });      // one-hit everything
      player.addEffect("speed", duration, { amplifier: 4 });           // super fast but not uncontrollable
      player.addEffect("jump_boost", duration, { amplifier: 4 });      // mega jump
      player.addEffect("regeneration", duration, { amplifier: max });  // instant regen
      player.addEffect("night_vision", duration, { amplifier: 0 });    // see in the dark
      player.addEffect("fire_resistance", duration, { amplifier: 0 }); // lava? what lava?
      player.addEffect("water_breathing", duration, { amplifier: 0 }); // breathe underwater
      player.addEffect("saturation", duration, { amplifier: max });    // never hungry

      player.sendMessage("§d§l★ You are GOATED for 5 Seconds... BWAK IN! ★");
    }
  });
});
