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
    'image_url': 'Abbadon_Curse_of_Avernus.png', 
    'video_url': 'https://youtu.be/83iU74QhxWw'
  },
  {
    'id': 4,
    'hero_id': 1,
    'name': 'Freezing Field',
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
]