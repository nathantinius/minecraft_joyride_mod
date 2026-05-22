# Joyride Candy Mod

A Minecraft Bedrock add-on that brings Joyride candy into the game. Eat a piece and become temporarily invincible with maxed-out abilities for 5 seconds.

## Candy Items

The mod adds three craftable candy items:

- **Cherry Berry Ropes** — crafted with Sweet Berries + Sugar
- **Sour Watermelon Wedges** — crafted with Melon Slices + Sugar
- **Sour Green Apple Strips** — crafted with Apples + Sugar

All three candies use the same crafting pattern:

```
[] [] S
X [] X
X  X X
```

Where `[]` is empty, `S` = Sugar and `X` = the fruit ingredient.

## What Happens When You Eat One

For 5 seconds you get every buff in the game cranked to the max:

- Resistance (invincible)
- Strength (one-hit everything)
- Speed (super fast)
- Jump Boost (mega jump)
- Regeneration (instant regen)
- Night Vision
- Fire Resistance
- Water Breathing
- Saturation (never hungry)

## Installation

1. Download the [`joyride2.5.mcaddon`](joyride_mod/joyride2.5.mcaddon) file
2. Open it — Minecraft will automatically import the behavior and resource packs
3. Create or edit a world and enable both the **Joyride Candy** behavior pack and resource pack
4. Make sure **Beta APIs** is enabled under Experiments in world settings (required for custom item scripting)

## Requirements

- Minecraft Bedrock Edition 1.21.0+
- Beta APIs experiment must be enabled

## Project Structure

```
joyride_mod/
├── behavior_pack/
│   ├── items/          # Item definitions for each candy
│   ├── recipes/        # Crafting recipes
│   ├── scripts/        # God mode effect script
│   ├── manifest.json
│   └── pack_icon.png
└── resource_pack/
    ├── texts/          # Item display names
    ├── textures/       # Candy item textures
    ├── manifest.json
    └── pack_icon.png
```
