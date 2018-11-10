export default [
  {
    'id': 1,
    'hero_id': 1,
    'name': 'Mist Coil',
    'description': `Abaddon releases a coil of deathly mist that can damage an enemy unit or heal a friendly unit at the cost of some of Abaddon's health.<br/>`,
    'mana': '50',
    'cooldown': '4.50',
    'image_url': '/ability/Abaddon_Mist_Coil.png',
    'video_url': 'https://youtu.be/stcWsFoEfag'
  },
  {
    'id': 2,
    'hero_id': 1,
    'name': 'Aphotic Shield',
    'description': `Summons dark energies around an ally unit, creating a shield that absorbs a set amount of damage before expiring. When the shield is destroyed it will burst and deal damage equal to the amount it could absorb to an area around it. Removes certain types of negative buffs and stuns on cast. DISPEL TYPE: Strong Dispel<br/>
    <br/><br/>ABILITY: Unit Target<br/>
    AFFECTS: Allied Units<br/>
    PIERCES SPELL IMMUNITY: No<br/>
    DURATION: 15<br/>
    BURST RADIUS: 675<br/>`,
    'mana': '115',
    'cooldown': '12/10/8/6',
    'image_url': '/ability/Abaddon_Aphotic Shield.png',
    'video_url': 'https://youtu.be/AUZPOPV0FiU'
  },
  {
    'id': 3,
    'hero_id': 1,
    'name': 'Curse of Avernus',
    'description': `Abaddon strikes an enemy with chilling curse on each attack, causing all units who attack the slowed enemy to gain increased movement speed, along with faster attack speed, for a limited time.
    <br/><br/>ABILITY: Passive<br/>
    PIERCES SPELL IMMUNITY: Yes<br/>
    DEBUFF DURATION: 2.5<br/>
    BUFF DURATION: 4.5<br/>
    MOVE SPEED BONUS: 15%<br/>
    ATTACK SPEED BONUS: 10 / 20 / 30 / 40<br/>`,
    'mana': 'passive',
    'cooldown': 'passive', 
    'image_url': '/ability/Abbadon_Curse_of_Avernus.png', 
    'video_url': 'https://youtu.be/83iU74QhxWw'
  },
  {
    'id': 4,
    'hero_id': 1,
    'name': 'Borrowed Time',
    'description': `When activated, all damage dealt to you will heal instead of harm. Most negative buffs will also be removed. If the ability is not on cooldown, it will automatically activate if your health falls below 400. Upgradable by Aghanim's Scepter. DISPEL TYPE: Strong Dispel.
    <br/><br/>ABILITY: No Target<br/>
    HEALTH THRESHOLD: 400<br/>
    DURATION: 4 / 5 / 6<br/>
    SCEPTER DURATION: 5 / 6 / 7<br/>
    SCEPTER DAMAGE REDIRECT: 50%<br/>
    SCEPTER REDIRECT RANGE: 900`,
    'mana': '0/0/0',
    'cooldown': '60/50/40',
    'image_url': '/ability/Abaddon_Borrowed_Time.png',
    'video_url': 'https://youtu.be/9J7CPbAg9dU'
  },
  {
    'id': 5,
    'hero_id': 2,
    'name': 'Crystal Nova',
    'description': `A burst of damaging frost slows enemy movement and attack rate in the targeted area.<br/>
    </br></br>ABILITY: Point Target</br>
    DAMAGE TYPE: Magical</br>
    PIERCES SPELL IMMUNITY: No</br>
    RADIUS: 425</br>
    MOVEMENT SLOW: 20% / 30% / 40% / 50%</br>
    ATTACK SLOW: 20 / 30 / 40 / 50</br>
    DURATION: 4.5</br>`,
    'mana': '130/145/160/175',
    'cooldown': '11/10/9/8',
    'image_url': '/ability/crystal_maiden_crystal_nova_hp1.png',
    'video_url': 'https://youtu.be/hv-wIna71VQ'
  },
  {
    'id': 6,
    'hero_id': 2,
    'name': 'Frostbite',
    'description': `Encases an enemy unit in ice, prohibiting movement and attack, while dealing 50 damage every half-second. Lasts 10 seconds on creeps level 6 or lower.<br/>
    ABILITY: Unit Target</br>
    AFFECTS: Enemy Units</br>
    DAMAGE TYPE: Magical</br>
    PIERCES SPELL IMMUNITY: No</br>
    DAMAGE PER HALF-SECOND: 50</br>
    HERO TOTAL DAMAGE: 150 / 200 / 250 / 300</br>
    CREEP DURATION: 10 / 10 / 10 / 10</br>
    CREEP TOTAL DAMAGE: 1000</br>`,
    'mana': '140/145/150/155',
    'cooldown': '9/8/7/6',
    'image_url': '/ability/crystal_maiden_frostbite_hp1.png',
    'video_url': 'https://youtu.be/6FnrLNZxtxQ'
  },
  {
    'id': 7,
    'hero_id': 2,
    'name': 'Arcane Aura',
    'description': `Gives additional mana regeneration to all friendly units on the map. This bonus is increased for Crystal Maiden.
    <br/><br/>ABILITY: Passive</br>
    AFFECTS: Allies</br>
    ALLY MANA REGEN: 0.7 / 0.9 / 1.1 / 1.3</br>
    SELF MANA REGEN: 1.8 / 2.6 / 3.4 / 4.2</br>`,
    'mana': 'passive',
    'cooldown': 'passive', 
    'image_url': '/ability/crystal_maiden_arcane_aura_hp1.png', 
    'video_url': 'https://youtu.be/JGBd1B3UW38'
  },
  {
    'id': 8,
    'hero_id': 2,
    'name': 'Freezing Field',
    'description': `CHANNELED - Surrounds Crystal Maiden with random icy explosions that slow enemies and deal massive damage. Lasts 10 seconds. Upgradable by Aghanim's Scepter.
    <br/><br/>ABILITY: No Target, Channeled</br>
    DAMAGE TYPE: Magical</br>
    PIERCES SPELL IMMUNITY: No</br>
    RADIUS: 835</br>
    EXPLOSION RADIUS: 300</br>
    MOVEMENT SLOW: 30%</br>
    ATTACK SLOW: 60</br>`,
    'mana': '200/400/600',
    'cooldown': '110/100/90',
    'image_url': '/ability/crystal_maiden_freezing_field_hp1.png',
    'video_url': 'https://youtu.be/xesyW_27uJc'
  },
  {
    'id': 9,
    'hero_id': 3,
    'name': 'Breathe Fire',
    'description': `Unleashes a breath of fire in front of Dragon Knight that burns enemies and reduces the damage their attacks deal.<br/>
    </br>ABILITY: Unit Target, Point Target</br>
    AFFECTS: Enemy Units</br>
    DAMAGE TYPE: Magical</br>
    PIERCES SPELL IMMUNITY: No</br>
    DAMAGE: 90 / 170 / 240 / 300</br>
    REDUCTION DURATION: 11</br>`,
    'mana': '100/110/120/130',
    'cooldown': '14/13/12/11',
    'image_url': '/ability/dragon_knight_breathe_fire_hp1.png',
    'video_url': 'https://youtu.be/wrZnzBN1CmA'
  },
  {
    'id': 10,
    'hero_id': 3,
    'name': 'Dragon Tail',
    'description': `Dragon Knight smites an enemy unit in melee range with his shield, stunning it while dealing minor damage. When in Elder Dragon Form, the cast range increases to 400.<br/>
    ABILITY: Unit Target</br>
    AFFECTS: Enemy Units</br>
    DAMAGE TYPE: Magical</br>
    PIERCES SPELL IMMUNITY: No</br>
    DAMAGE: 25 / 50 / 75 / 100</br>`,
    'mana': '100/100/100/100',
    'cooldown': '12/11/10/9',
    'image_url': '/ability/dragon_knight_dragon_tail_hp1.png',
    'video_url': 'https://youtu.be/6FnrLNZxtxQ'
  },
  {
    'id': 11,
    'hero_id': 3,
    'name': 'Dragon Blood',
    'description': `The life blood of the Dragon improves health regeneration and strengthens armor.
    <br/><br/>ABILITY: Passive</br>`,
    'mana': 'passive',
    'cooldown': 'passive', 
    'image_url': '/ability/dragon_knight_dragon_blood_hp1.png', 
    'video_url': 'https://youtu.be/mbzF8oyAUfc'
  },
  {
    'id': 12,
    'hero_id': 3,
    'name': 'Elder Dragon Form',
    'description': `Dragon Knight takes the form of one of three powerful elder dragons, increasing his speed, and Dragon Tail's range, while granting him new powers. LEVEL 1 Green Dragon - Corrosive Breath: attacks deal 20 poison damage per second for 5 seconds. Works on structures. LEVEL 2 Red Dragon - Splash Attack: attacks damage all enemy units in a 300 radius, with Corrosive Breath added to the targets. LEVEL 3 Blue Dragon - Frost Breath: slows movement speed by 30% and attack speed by 30 of enemy units in Splash Attack range for 3 seconds, with Corrosive Breath added to the targets.
    <br/><br/>ABILITY: No Target</br>
    PIERCES SPELL IMMUNITY: Yes</br>
    DURATION: 60</br>
    BONUS MOVE SPEED: 30</br>
    BONUS ATTACK RANGE: 350</br>`,
    'mana': '50/50/50',
    'cooldown': '115',
    'image_url': '/ability/dragon_knight_elder_dragon_form_hp1.png',
    'video_url': 'https://youtu.be/3HpgABQ8kpA'
  },
  {
    'id': 13,
    'hero_id': 4,
    'name': 'Fissure',
    'description': `Slams the ground with a mighty totem, creating an impassable ridge of stone while stunning and damaging enemy units along its line.<br/>
    </br>ABILITY: Point Target</br>
    AFFECTS: Enemy Units</br>
    DAMAGE TYPE: Magical</br>
    PIERCES SPELL IMMUNITY: No</br>
    DAMAGE: 110 / 160 / 210 / 260</br>
    FISSURE DURATION: 8</br>
    STUN DURATION: 1 / 1.25 / 1.5 / 1.75</br>`,
    'mana': '125/140/155/170',
    'cooldown': '18/17/16/15',
    'image_url': '/ability/earthshaker_fissure_hp1.png',
    'video_url': 'https://youtu.be/vTbNwc5Tqwc'
  },
  {
    'id': 14,
    'hero_id': 4,
    'name': 'Enchant Totem',
    'description': `Empowers Earthshaker's totem, causing it to deal extra damage on the next attack. Upgradable by Aghanim's Scepter.<br/>
    </br>ABILITY: No Target</br>
    AFFECTS: Enemy Units</br>
    DAMAGE: 0 / 0 / 0 / 0</br>
    BONUS: 100% / 200% / 300% / 400%</br>
    DURATION: 14 / 14 / 14 / 14</br>
    SCEPTER JUMP DISTANCE: 1100</br>`,
    'mana': '35/40/45/50',
    'cooldown': '5',
    'image_url': '/ability/earthshaker_enchant_totem_hp1.png',
    'video_url': 'https://youtu.be/OkSsLAN7mbk'
  },
  {
    'id': 15,
    'hero_id': 4,
    'name': 'Aftershock',
    'description': `Causes the earth to shake underfoot, adding additional damage and stuns to nearby enemy units when Earthshaker casts his abilities.
    <br/><br/>ABILITY: Passive</br>
    DAMAGE TYPE: Magical</br>
    PIERCES SPELL IMMUNITY: No</br>
    DAMAGE: 75 / 100 / 125 / 150</br>
    RADIUS: 300</br>
    DURATION: 0.6 / 0.9 / 1.2 / 1.5</br>`,
    'mana': 'passive',
    'cooldown': 'passive', 
    'image_url': '/ability/earthshaker_aftershock_hp1.png', 
    'video_url': 'https://youtu.be/2xcM8xccDIs'
  },
  {
    'id': 16,
    'hero_id': 4,
    'name': 'Echo Slam',
    'description': `Shockwaves travel through the ground, damaging enemy units. Each enemy hit causes an echo to damage nearby units. Real heroes cause two echoes.
    <br/><br/>ABILITY: No Target</br>
    DAMAGE TYPE: Magical</br>
    PIERCES SPELL IMMUNITY: No</br>
    RADIUS: 600</br>
    INITIAL DAMAGE: 100</br>`,
    'mana': '145/205/265',
    'cooldown': '150/130/110',
    'image_url': '/ability/earthshaker_echo_slam_hp1.png',
    'video_url': 'https://youtu.be/3HpgABQ8kpA'
  },
  {
    'id': 17,
    'hero_id': 5,
    'name': 'Torrent',
    'description': `Summons a rising torrent that, after a short delay, hurls enemy units into the sky, stunning, dealing damage and slowing movement speed.<br/>
    </br>ABILITY: Point Target</br>
    DAMAGE TYPE: Magical</br>
    PIERCES SPELL IMMUNITY: No</br>
    MOVE SLOW: 35%</br>
    SLOW DURATION: 1.75 / 2.5 / 3.25 / 4</br>
    STUN DURATION: 1.6</br>
    DELAY: 1.6 / 1.6 / 1.6 / 1.6</br>`,
    'mana': '90/100/110/12',
    'cooldown': '16/14/12/10',
    'image_url': '/ability/kunkka_torrent_hp1.png',
    'video_url': 'https://youtu.be/2NeN4ToMrfY'
  },
  {
    'id': 18,
    'hero_id': 5,
    'name': 'Tidebringer',
    'description': `Kunkka's legendary sword grants increased damage and cleaves a large area of effect in front of him for a single strike.<br/>
    </br>ABILITY: Auto-Cast, Unit Target</br>
    AFFECTS: Enemy Units</br>
    DAMAGE TYPE: Physical</br>
    PIERCES SPELL IMMUNITY: Yes</br>
    DAMAGE BONUS: 25 / 50 / 75 / 100</br>`,
    'mana': '0',
    'cooldown': '13/10/7/4',
    'image_url': '/ability/kunkka_tidebringer_hp1.png',
    'video_url': 'https://youtu.be/GrJOoGLZyWg'
  },
  {
    'id': 19,
    'hero_id': 5,
    'name': 'X Marks the Spot',
    'description': `Targets a friendly or enemy Hero, marks their position with an X, and returns them to it after several seconds. Kunkka can trigger the return at any time during the duration. Lasts twice as long on allied heroes.
    <br/><br/>ABILITY: Unit Target</br>
    AFFECTS: Heroes</br>
    PIERCES SPELL IMMUNITY: No</br>
    ENEMY DELAY: 4</br>
    ALLIED DELAY: 8</br>
    RANGE: 400 / 600 / 800 / 1000</br>`,
    'mana': '50',
    'cooldown': '26/20/14/8', 
    'image_url': '/ability/kunkka_x_marks_the_spot_hp1.png', 
    'video_url': 'https://youtu.be/uF1OsHjC-tY'
  },
  {
    'id': 20,
    'hero_id': 5,
    'name': 'Ghostship',
    'description': `Summons a ghostly ship that sails through the battle before smashing apart, damaging and stunning all enemies caught near the wreckage. Allied heroes touched by the Ghostship are given a swig of The Admiral's Rum, receiving bonus movement speed and a delayed reaction to incoming damage. Upgradeable by Aghanim's Scepter.
    <br/><br/>ABILITY: Point Target</br>
    DAMAGE TYPE: Magical</br>
    PIERCES SPELL IMMUNITY: No</br>
    DAMAGE: 400 / 500 / 600</br>
    IMPACT DELAY: 3.1</br>
    RANGE: 2000</br>
    WIDTH: 425 / 425 / 425</br>
    RUM BONUS SPEED: 10% / 10% / 10%</br>
    RUM DURATION: 10</br>
    STUN DURATION: 1.4 / 1.4 / 1.4</br>
    DAMAGE DELAYED: 40% / 45% / 50%</br>`,
    'mana': '125/175/225',
    'cooldown': '60/50/40',
    'image_url': '/ability/kunkka_ghostship_hp1.png',
    'video_url': 'https://youtu.be/lfnAIKZ6suE'
  },
  {
    'id': 21,
    'hero_id': 6,
    'name': 'Overwhelming Odds',
    'description': `Turns the enemies' numbers against them, dealing damage and granting you bonus movement speed per unit or per hero. Deals bonus damage to illusions and summoned units as a percent of their current health.<br/>
    </br>ABILITY: Point Target</br>
    DAMAGE TYPE: Magical</br>
    PIERCES SPELL IMMUNITY: No</br>
    BASE DAMAGE: 40 / 60 / 80 / 100</br>
    DAMAGE PER CREEP: 14 / 16 / 18 / 20</br>
    BONUS SPEED (CREEPS): 3%</br>
    BONUS SPEED (HEROES): 9%</br>
    SPEED DURATION: 7</br>
    RADIUS: 330</br>`,
    'mana': '100/110/120/130',
    'cooldown': '15',
    'image_url': '/ability/legion_commander_overwhelming_odds.png',
    'video_url': 'https://youtu.be/Xs5UU9xUQz4'
  },
  {
    'id': 22,
    'hero_id': 6,
    'name': 'Press The Attack',
    'description': `Removes debuffs and disables from the target friendly unit, and grants bonus attack speed and health regen for a short time. DISPEL TYPE: Strong Dispel.<br/>
    </br>ABILITY: Unit Target</br>
    AFFECTS: Allied Units</br>
    PIERCES SPELL IMMUNITY: No</br>
    DURATION: 5</br>
    BONUS ATTACK SPEED: 65 / 90 / 115 / 140</br>
    HP REGEN: 30 / 35 / 40 / 45</br>`,
    'mana': '110',
    'cooldown': '16/15/14/13',
    'image_url': '/ability/legion_commander_press_the_attack.png',
    'video_url': 'https://youtu.be/1xEPC7Eowsg'
  },
  {
    'id': 23,
    'hero_id': 6,
    'name': 'Moment of Courage',
    'description': `When attacked, Legion Commander has a chance to immediately counterattack with bonus lifesteal.
    <br/><br/>ABILITY: Passive</br>
    LIFESTEAL: 55% / 65% / 75% / 85%</br>`,
    'mana': 'passive',
    'cooldown': '2.30/1.80/1.30/0.80', 
    'image_url': '/ability/legion_commander_moment_of_courage.png', 
    'video_url': 'https://youtu.be/WoCIKENH9-c'
  },
  {
    'id': 24,
    'hero_id': 6,
    'name': 'Duel',
    'description': `Legion Commander and the target enemy hero are forced to attack each other for a short duration. Neither hero can use items or abilities. If either hero dies during the duration, the hero winning the Duel gains permanent bonus damage. Upgradable by Aghanim's Scepter.
    <br/><br/>ABILITY: Unit Target</br>
    AFFECTS: Enemy Heroes</br>
    PIERCES SPELL IMMUNITY: Yes</br>
    DURATION: 4 / 4.75 / 5.5</br>
    SCEPTER DURATION: 6 / 7 / 8</br>`,
    'mana': '75/75/75',
    'cooldown': '50',
    'image_url': '/ability/legion_commander_duel.png',
    'video_url': 'https://youtu.be/uK5sUO2zCTU'
  },
]