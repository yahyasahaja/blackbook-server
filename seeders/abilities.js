export default [
  {
    'id': 1,
    'hero_id': 1,
    'name': 'Crystal Nova',
    'description': `A burst of damaging frost slows enemy movement and attack rate in the targeted area.
    <br/><br/>ABILITY: Point Target<br/>
    DAMAGE TYPE: Magical<br/>
    PIERCES SPELL IMMUNITY: No<br/>
    RADIUS: 425<br/>
    MOVEMENT SLOW: 20% / 30% / 40% / 50%<br/>
    ATTACK SLOW: 20 / 30 / 40 / 50<br/>
    DURATION: 4.5<br/>`,
    'mana': '130/145/160/175',
    'cooldown': '11/10/9/8',
    'image_url': '/ability/crystal_maiden_crystal_nova_hp1.png',
    'video_url': 'https://youtu.be/hv-wIna71VQ'
  },
  {
    'id': 2,
    'hero_id': 1,
    'name': 'Frostbite',
    'description': `Encases an enemy unit in ice, prohibiting movement and attack, while dealing 50 damage every half-second. Lasts 10 seconds on creeps level 6 or lower.
    <br/><br/>ABILITY: Unit Target <br/>
    AFFECTS: Enemy Units<br/>
    DAMAGE TYPE: Magical<br/>
    PIERCES SPELL IMMUNITY: No<br/>
    DAMAGE PER HALF-SECOND: 50<br/>
    HERO TOTAL DAMAGE: 150 / 200 / 250 / 300<br/>
    CREEP DURATION: 10 / 10 / 10 / 10<br/>
    CREEP TOTAL DAMAGE: 1000<br/>`,
    'mana': '140/145/150/155',
    'cooldown': '9/8/7/6',
    'image_url': '/ability/crystal_maiden_frostbite_hp1.png',
    'video_url': 'https://youtu.be/6FnrLNZxtxQ'
  },
  {
    'id': 3,
    'hero_id': 1,
    'name': 'Arcane Aura',
    'description': `Gives additional mana regeneration to all friendly units on the map. This bonus is increased for Crystal Maiden.
    <br/><br/>ABILITY: Passive<br/>
    AFFECTS: Allies<br/>
    ALLY MANA REGEN: 0.7 / 0.9 / 1.1 / 1.3<br/>
    SELF MANA REGEN: 1.8 / 2.6 / 3.4 / 4.2<br/>`,
    'mana': '/ability/crystal_maiden_brilliance_aura_hp1.png',
    'cooldown': '', 
    'image_url': '',
    'video_url': 'https://youtu.be/JGBd1B3UW38'
  },
  {
    'id': 4,
    'hero_id': 1,
    'name': 'Freezing Field',
    'description': `CHANNELED - Surrounds Crystal Maiden with random icy explosions that slow enemies and deal massive damage. Lasts 10 seconds. Upgradable by Aghanim's Scepter.
    <br/><br/>ABILITY: No Target, Channeled<br/>
    DAMAGE TYPE: Magical<br/>
    PIERCES SPELL IMMUNITY: No<br/>
    RADIUS: 835<br/>
    EXPLOSION RADIUS: 300<br/>
    MOVEMENT SLOW: 30%<br/>
    ATTACK SLOW: 60<br/>`,
    'mana': '200/400/600',
    'cooldown': '110/100/90',
    'image_url': '/ability/crystal_maiden_freezing_field_hp1.png',
    'video_url': 'https://youtu.be/xesyW_27uJc'
  },
]