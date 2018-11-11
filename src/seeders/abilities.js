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
  {
    'id': 25,
    'hero_id': 7,
    'name': 'Purification',
    'description': `Instantly heals a friendly unit and damages all nearby enemy units.<br/>
    </br>ABILITY: Unit Target</br>
    AFFECTS: Allied Units</br>
    DAMAGE TYPE: Pure</br>
    PIERCES SPELL IMMUNITY: No</br>
    DAMAGE RADIUS: 260</br>`,
    'mana': '85/100/115/130',
    'cooldown': '14/13/12/11',
    'image_url': '/ability/omniknight_purification_hp1.png',
    'video_url': 'https://youtu.be/ohj0Wq-YJAQ'
  },
  {
    'id': 26,
    'hero_id': 7,
    'name': 'Repel',
    'description': `Creates a divine barrier around an ally which grants them Spell Immunity and 100% resistance to Magic Damage. DISPEL TYPE: Basic Dispel<br/>
    </br>ABILITY: Unit Target</br>
    AFFECTS: Allied Units</br>
    PIERCES SPELL IMMUNITY: No</br>`,
    'mana': '85',
    'cooldown': '30/26/22/18',
    'image_url': '/ability/omniknight_repel_hp1.png',
    'video_url': 'https://youtu.be/rlLqiwxB4ko'
  },
  {
    'id': 27,
    'hero_id': 7,
    'name': 'Degen Aura',
    'description': `Greatly degenerates the movement and attack capabilities of enemy units that stray too near.
    <br/><br/>ABILITY: Passive, Aura</br>
    AFFECTS: Enemies</br>
    PIERCES SPELL IMMUNITY: No</br>
    RADIUS: 300</br>`,
    'mana': 'passive',
    'cooldown': 'passive', 
    'image_url': '/ability/omniknight_degen_aura_hp1.png', 
    'video_url': 'https://youtu.be/P3yU81TYOYU'
  },
  {
    'id': 28,
    'hero_id': 7,
    'name': 'Guardian Angel',
    'description': `Omniknight summons a Guardian Angel that grants immunity from physical damage. Upgradable by Aghanim's Scepter
    <br/><br/>ABILITY: No Target</br>
    PIERCES SPELL IMMUNITY: Yes</br>
    DURATION: 6 / 7 / 8</br>
    RADIUS: 600</br>
    SCEPTER DURATION: 8 / 9 / 10</br>`,
    'mana': '125/175/250',
    'cooldown': '180/170/160',
    'image_url': '/ability/omniknight_guardian_angel_hp1.png',
    'video_url': 'https://youtu.be/SIBSA30sMz4'
  },
  {
    'id': 29,
    'hero_id': 8,
    'name': 'Storm Hammer',
    'description': `Sven unleashes his magical gauntlet that deals damage and stuns enemy units.<br/>
    </br>ABILITY: Unit Target</br>
    AFFECTS: Enemy Units</br>
    DAMAGE TYPE: Magical</br>
    PIERCES SPELL IMMUNITY: No</br>
    DAMAGE: 100 / 175 / 250 / 325</br>
    RADIUS: 255</br>`,
    'mana': '110/120/130/140',
    'cooldown': '13',
    'image_url': '/ability/sven_storm_hammer_hp1.png',
    'video_url': 'https://youtu.be/-BNx6j67GMM'
  },
  {
    'id': 30,
    'hero_id': 8,
    'name': 'Great Cleave',
    'description': `Sven strikes with great force, cleaving all nearby enemy units with his attack.<br/>
    </br>ABILITY: Passive</br>
    PIERCES SPELL IMMUNITY: Yes</br>
    CLEAVE DAMAGE: 40% / 50% / 60% / 70%</br>`,
    'mana': 'passive',
    'cooldown': 'passive',
    'image_url': '/ability/sven_great_cleave_hp1.png',
    'video_url': 'https://youtu.be/XRI-eUBr_S8'
  },
  {
    'id': 31,
    'hero_id': 8,
    'name': 'Warcry',
    'description': `Sven's Warcry heartens his allies for battle, increasing their movement speed and armor. Lasts 8 seconds.
    <br/><br/>ABILITY: No Target</br>
    BONUS ARMOR: 5 / 10 / 15 / 20</br>
    BONUS SPEED: 12%</br>
    RADIUS: 900</br>
    DURATION: 8</br>`,
    'mana': '25/25/25/25',
    'cooldown': '35/30/25/20', 
    'image_url': '/ability/sven_warcry_hp1.png', 
    'video_url': 'https://youtu.be/npLme9BdTy8'
  },
  {
    'id': 32,
    'hero_id': 8,
    'name': `God's Strength`,
    'description': `Omniknight summons a Guardian Angel that grants immunity from physical damage. Upgradable by Aghanim's Scepter
    <br/><br/>ABILITY: No Target</br>
    PIERCES SPELL IMMUNITY: Yes</br>
    DURATION: 6 / 7 / 8</br>
    RADIUS: 600</br>
    SCEPTER DURATION: 8 / 9 / 10</br>`,
    'mana': '100/150/200',
    'cooldown': '80',
    'image_url': '/ability/sven_gods_strength_hp1.png',
    'video_url': 'https://youtu.be/EbnTUOTMvkg'
  },
  {
    'id': 33,
    'hero_id': 9,
    'name': 'Avalanche',
    'description': `Bombards an area with rocks, stunning and damaging enemy land units.<br/>
    </br>ABILITY: Point Target</br>
    DAMAGE TYPE: Magical</br>
    PIERCES SPELL IMMUNITY: No</br>
    RADIUS: 275 / 275 / 275 / 275</br>
    STUN DURATION: 1</br>`,
    'mana': '120/120/120/120',
    'cooldown': '23/21/19/17',
    'image_url': '/ability/tiny_avalanche_hp1.png',
    'video_url': 'https://youtu.be/t4JvtlBfJug'
  },
  {
    'id': 34,
    'hero_id': 9,
    'name': 'Toss',
    'description': `Grabs the nearest unit in a 275 radius around Tiny, ally or enemy, and launches it at the target unit or rune to deal damage where they land. If the tossed unit is an enemy, it will take an extra 30% damage.<br/>
    </br>ABILITY: Unit Target</br>
    DAMAGE TYPE: Magical</br>
    PIERCES SPELL IMMUNITY: Yes</br>
    RADIUS: 275</br>
    RANGE: 1300</br>
    DAMAGE: 90 / 160 / 230 / 300</br>`,
    'mana': '90/100/110/120',
    'cooldown': '11',
    'image_url': '/ability/tiny_toss_hp1.png',
    'video_url': 'https://youtu.be/4oDiWbybHgM'
  },
  {
    'id': 35,
    'hero_id': 9,
    'name': 'Tree Grab',
    'description': `Grabs a tree to whack enemies on the head for a limited number of times. Grants bonus attack range. Attacks deal more damage (increased vs. buildings) and fully splash on units along the way. The tree can be thrown, expending all the charges, to deal your attack to a unit at a distance.
    <br/><br/>ABILITY: Unit Target</br>
    DAMAGE TYPE: Physical</br>
    PIERCES SPELL IMMUNITY: Yes</br>
    ATTACK COUNT: 5</br>
    BONUS DAMAGE: 25% / 30% / 35% / 40%</br>
    BONUS BUILDING DAMAGE: 80% / 120% / 160% / 200%</br>
    ATTACK RANGE: 350</br>
    SPLASH DAMAGE: 30% / 40% / 50% / 60%	</br>`,
    'mana': '50',
    'cooldown': '24/20/16/12', 
    'image_url': '/ability/tiny_tree_grab_hp1.png', 
    'video_url': 'https://youtu.be/P0uPxATF8XE'
  },
  {
    'id': 36,
    'hero_id': 9,
    'name': `Grow`,
    'description': `Tiny gains craggy mass, increases his power and causes him to shrug off debuffs.
    <br/><br/>ABILITY: Passive</br>
    STATUS RESISTANCE: 30% / 40% / 50%</br>
    BONUS ARMOR: 5 / 10 / 15</br>
    BONUS DAMAGE: 30 / 45 / 60</br>
    ATTACK SPEED REDUCTION: 20 / 35 / 50</br>`,
    'mana': 'passive',
    'cooldown': 'passive',
    'image_url': '/ability/tiny_grow_hp1.png',
    'video_url': 'https://youtu.be/4GB3qojLOHo'
  },
  {
    'id': 37,
    'hero_id': 10,
    'name': 'Wraithfire Blast',
    'description': `Wraith King sears an enemy unit with spectral fire, dealing damage and stunning, then dealing damage over time and slowing the target.<br/>
    </br>ABILITY: Unit Target</br>
    AFFECTS: Enemy Units</br>
    DAMAGE TYPE: Magical</br>
    PIERCES SPELL IMMUNITY: No</br>
    DAMAGE: 100</br>
    STUN DURATION: 1.1 / 1.4 / 1.7 / 2</br>
    MOVEMENT SLOW: 20%</br>`,
    'mana': '95/110/125/140',
    'cooldown': '14/12/10/8',
    'image_url': '/ability/wraith_king_wraithfire_blast.png',
    'video_url': 'https://youtu.be/cjBrHQKjxm4'
  },
  {
    'id': 38,
    'hero_id': 10,
    'name': 'Vampiric Aura',
    'description': `Nearby friendly units restore health based on the damage they deal when attacking enemy units.<br/>
    </br>AABILITY: No Target, Aura, Toggle</br>
    AFFECTS: Allies</br>`,
    'mana': 'passive',
    'cooldown': 'passive',
    'image_url': '/ability/wraith_king_vampiric_aura_hp1.png',
    'video_url': 'https://youtu.be/0ZD6iTDTjcQ'
  },
  {
    'id': 39,
    'hero_id': 10,
    'name': 'Mortal Strike',
    'description': `Wraith King passively gains a chance to deal bonus damage on an attack. Every two kills on an enemy unit adds a skeleton charge.
    <br/><br/>ABILITY: No Target</br>
    AFFECTS: Enemy Heroes</br>
    CRITICAL DAMAGE: 300%</br>
    CRITICAL CHANCE: 9% / 11% / 13% / 15%</br>
    SKELETON DURATION: 90</br>`,
    'mana': '30/45/60/75',
    'cooldown': '50', 
    'image_url': '/ability/wraith_king_mortal_strike_hp1.png', 
    'video_url': 'https://youtu.be/UMPnfE_N0YI'
  },
  {
    'id': 40,
    'hero_id': 10,
    'name': `Reincarnation`,
    'description': `Wraith King's form regroups after death, allowing him to resurrect when killed in battle. Upon death, enemy units in a 900 radius will be slowed. Upgradable by Aghanim's Scepter.
    <br/><br/>ABILITY: Passive</br>
    AFFECTS: Allied Heroes</br>
    PIERCES SPELL IMMUNITY: No</br>
    REINCARNATION TIME: 3 / 3 / 3</br>
    MOVEMENT SLOW: 75%</br>
    ATTACK SPEED SLOW: 75</br>
    SLOW DURATION: 5</br>
    SCEPTER ALLY DEATH DELAY: 7</br>
    SCEPTER DEATH DELAY RADIUS: 1200</br>`,
    'mana': '160',
    'cooldown': '200/120/40',
    'image_url': '/ability/wraith_king_reincarnation_hp1.png',
    'video_url': 'https://youtu.be/3yGidbPrewk'
  },
  {
    'id': 41,
    'hero_id': 11,
    'name': 'Mana Break',
    'description': `Burns an opponent's mana on each attack. Mana Break deals 50% of the mana burned as damage to the target.<br/>
    </br>ABILITY: Passive</br>
    DAMAGE TYPE: Physical</br>
    PIERCES SPELL IMMUNITY: No</br>
    MANA BURNED PER HIT: 28 / 40 / 52 / 64</br>`,
    'mana': 'passive',
    'cooldown': 'passive',
    'image_url': '/ability/antimage_mana_break_hp1.png',
    'video_url': 'https://youtu.be/5n9dPC349Lw'
  },
  {
    'id': 42,
    'hero_id': 11,
    'name': 'Blink',
    'description': `Short distance teleportation that allows Anti-Mage to move in and out of combat.<br/>
    </br>ABILITY: Point Target</br>`,
    'mana': '60',
    'cooldown': '15/12/9/6',
    'image_url': '/ability/antimage_blink_hp1.png',
    'video_url': 'https://youtu.be/HCJe7ilCyXo'
  },
  {
    'id': 43,
    'hero_id': 11,
    'name': 'Spell Shield',
    'description': `Increases Anti-Mage's resistance to magic damage. Upgradable by Aghanim's Scepter.
    <br/><br/>ABILITY: Passive</br>`,
    'mana': 'passive',
    'cooldown': 'passive', 
    'image_url': '/ability/antimage_spell_shield_hp1.png', 
    'video_url': 'https://youtu.be/pQ6OlMLiA-A'
  },
  {
    'id': 44,
    'hero_id': 11,
    'name': `Mana Void`,
    'description': `For each point of mana missing by the target unit, damage is dealt to it and surrounding enemies. The main target is also mini-stunned.
    <br/><br/>ABILITY: Unit Target</br>
    AFFECTS: Enemy Units</br>
    DAMAGE TYPE: Magical</br>
    PIERCES SPELL IMMUNITY: Yes</br>
    DAMAGE: 0.8 / 0.95 / 1.1</br>
    STUN DURATION: 0.3</br>
    RADIUS: 500</br>`,
    'mana': '125/200/275',
    'cooldown': '70',
    'image_url': '/ability/antimage_mana_void_hp1.png',
    'video_url': 'https://youtu.be/qi1_xFE6nBI'
  },
  {
    'id': 45,
    'hero_id': 12,
    'name': 'Frost Arrows',
    'description': `Adds a freezing effect to Drow's attacks, slowing enemy movement. Lasts 1.5 seconds on Heroes, and 7 seconds on creeps.<br/>
    </br>ABILITY: Auto-Cast, Unit Target</br>
    AFFECTS: Enemy Units</br>
    PIERCES SPELL IMMUNITY: No</br>
    DAMAGE: 0 / 0 / 0 / 0</br>
    MOVEMENT SLOW: 16% / 32% / 48% / 64%</br>
    HERO DURATION: 1.5</br>
    CREEP DURATION: 7</br>`,
    'mana': '12/12/12/12',
    'cooldown': '0',
    'image_url': '/ability/drow_ranger_frost_arrows_hp1.png',
    'video_url': 'https://youtu.be/u6dvUwbjI_k'
  },
  {
    'id': 46,
    'hero_id': 12,
    'name': 'Gust',
    'description': `Releases a wave that silences and knocks back enemy units. Knockback distance is relative to how close they are to you.<br/>
    </br>ABILITY: Point Target</br>`,
    'mana': '90',
    'cooldown': '16/15/14/13',
    'image_url': '/ability/drow_ranger_gust_hp1.png',
    'video_url': 'https://www.youtube.com/watch?v=ob79Mz9QdNQ'
  },
  {
    'id': 47,
    'hero_id': 12,
    'name': 'Precision Aura',
    'description': `Adds bonus damage to the physical attack of allied, ranged Hero units based on a percentage of Drow's agility. Affects creeps for 30 seconds when cast.
    <br/><br/>ABILITY: No Target</br>
    AFFECTS: Allies</br>`,
    'mana': '0',
    'cooldown': '100', 
    'image_url': '/ability/drow_ranger_precision_aura_hp1.png', 
    'video_url': 'https://youtu.be/wNzhcuzDmf0'
  },
  {
    'id': 48,
    'hero_id': 12,
    'name': `Marksmanship`,
    'description': `Drow's experiences in battle improve her accuracy and effectiveness in combat, providing a passive bonus to Agility. Grants no bonus if there are enemy heroes within 400 range. Upgradable by Aghanim's Scepter.
    <br/><br/>ABILITY: Passive</br>
    SCEPTER SPLIT COUNT: 2</br>
    SEARCH RANGE: 375</br>
    DAMAGE REDUCTION: 50%</br>`,
    'mana': 'passive',
    'cooldown': 'passive',
    'image_url': '/ability/drow_ranger_marksmanship_hp1.png',
    'video_url': 'https://youtu.be/wfgqVIVWpr8'
  },
  {
    'id': 49,
    'hero_id': 13,
    'name': 'Blade Fury',
    'description': `Causes a bladestorm of destructive force around Juggernaut, rendering him immune to magic and dealing damage to nearby enemy units. DISPEL TYPE: Basic Dispel<br/>
    </br>ABILITY: No Target</br>
    DAMAGE TYPE: Magical</br>
    PIERCES SPELL IMMUNITY: No</br>
    RADIUS: 250</br>`,
    'mana': '120/110/100/90',
    'cooldown': '42/34/26/18',
    'image_url': '/ability/juggernaut_blade_fury_hp1.png',
    'video_url': 'https://youtu.be/0XijKqh4EJI'
  },
  {
    'id': 50,
    'hero_id': 13,
    'name': 'Healing Ward',
    'description': `Summons a Healing Ward which heals all nearby allied units, based on their max health. The Healing Ward moves at 420 movement speed after being summoned. Lasts 25 seconds.
    <br/><br/>ABILITY: Point Target</br>
    MAX HEALTH PER SECOND: 2% / 3% / 4% / 5%</br>`,
    'mana': '140',
    'cooldown': '60', 
    'image_url': '/ability/juggernaut_healing_ward_hp1.png', 
    'video_url': 'https://youtu.be/Wvh64L7ndTs'
  },
  {
    'id': 51,
    'hero_id': 13,
    'name': `Blade Dance`,
    'description': `Gives Juggernaut a chance to deal critical damage on each attack.
    <br/><br/>ABILITY: Passive</br>
    CRITICAL CHANCE: 20% / 25% / 30% / 35%</br>
    CRITICAL DAMAGE: 180%</br>`,
    'mana': 'passive',
    'cooldown': 'passive',
    'image_url': '/ability/juggernaut_blade_dance_hp1.png',
    'video_url': 'https://youtu.be/J0i1IyxpvB0'
  },
  {
    'id': 52,
    'hero_id': 13,
    'name': `Omnislash`,
    'description': `Juggernaut leaps towards the target enemy unit with a damaging attack, and then slashes other nearby enemy units, dealing between 200-225 damage per slash. Juggernaut is invulnerable for the duration. Upgradable by Aghanim's Scepter.
    <br/><br/>ABILITY: Unit Target</br>
    AFFECTS: Enemy Units</br>
    DAMAGE TYPE: Physical</br>
    PIERCES SPELL IMMUNITY: Yes</br>
    SLASH JUMP RADIUS: 425</br>
    SCEPTER COOLDOWN: 70</br>`,
    'mana': '200/275/350',
    'cooldown': '130/120/110',
    'image_url': '/ability/juggernaut_omni_slash_hp1.png',
    'video_url': 'https://youtu.be/T4HOd3lIgyQ'
  },
]