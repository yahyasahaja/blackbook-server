-- MySQL dump 10.13  Distrib 5.7.21, for osx10.13 (x86_64)
--
-- Host: localhost    Database: blackbook
-- ------------------------------------------------------
-- Server version	5.7.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Abilities`
--

DROP TABLE IF EXISTS `Abilities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Abilities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `mana` varchar(255) NOT NULL,
  `cooldown` varchar(255) NOT NULL,
  `video_url` varchar(255) DEFAULT NULL,
  `hero_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `hero_id` (`hero_id`),
  CONSTRAINT `abilities_ibfk_1` FOREIGN KEY (`hero_id`) REFERENCES `Heros` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Abilities`
--

LOCK TABLES `Abilities` WRITE;
/*!40000 ALTER TABLE `Abilities` DISABLE KEYS */;
INSERT INTO `Abilities` VALUES (1,'Crystal Nova','/ability/crystal_maiden_crystal_nova_hp1.png','A burst of damaging frost slows enemy movement and attack rate in the targeted area.\n    <br/><br/>ABILITY: Point Target<br/>\n    DAMAGE TYPE: Magical<br/>\n    PIERCES SPELL IMMUNITY: No<br/>\n    RADIUS: 425<br/>\n    MOVEMENT SLOW: 20% / 30% / 40% / 50%<br/>\n    ATTACK SLOW: 20 / 30 / 40 / 50<br/>\n    DURATION: 4.5<br/>','130/145/160/175','11/10/9/8','https://youtu.be/hv-wIna71VQ',1),(2,'Frostbite','/ability/crystal_maiden_frostbite_hp1.png','Encases an enemy unit in ice, prohibiting movement and attack, while dealing 50 damage every half-second. Lasts 10 seconds on creeps level 6 or lower.\n    <br/><br/>ABILITY: Unit Target <br/>\n    AFFECTS: Enemy Units<br/>\n    DAMAGE TYPE: Magical<br/>\n    PIERCES SPELL IMMUNITY: No<br/>\n    DAMAGE PER HALF-SECOND: 50<br/>\n    HERO TOTAL DAMAGE: 150 / 200 / 250 / 300<br/>\n    CREEP DURATION: 10 / 10 / 10 / 10<br/>\n    CREEP TOTAL DAMAGE: 1000<br/>','140/145/150/155','9/8/7/6','https://youtu.be/6FnrLNZxtxQ',1),(3,'Arcane Aura','','Gives additional mana regeneration to all friendly units on the map. This bonus is increased for Crystal Maiden.\n    <br/><br/>ABILITY: Passive<br/>\n    AFFECTS: Allies<br/>\n    ALLY MANA REGEN: 0.7 / 0.9 / 1.1 / 1.3<br/>\n    SELF MANA REGEN: 1.8 / 2.6 / 3.4 / 4.2<br/>','/ability/crystal_maiden_brilliance_aura_hp1.png','','https://youtu.be/JGBd1B3UW38',1),(4,'Freezing Field','/ability/crystal_maiden_freezing_field_hp1.png','CHANNELED - Surrounds Crystal Maiden with random icy explosions that slow enemies and deal massive damage. Lasts 10 seconds. Upgradable by Aghanim\'s Scepter.\n    <br/><br/>ABILITY: No Target, Channeled<br/>\n    DAMAGE TYPE: Magical<br/>\n    PIERCES SPELL IMMUNITY: No<br/>\n    RADIUS: 835<br/>\n    EXPLOSION RADIUS: 300<br/>\n    MOVEMENT SLOW: 30%<br/>\n    ATTACK SLOW: 60<br/>','200/400/600','110/100/90','https://youtu.be/xesyW_27uJc',1);
/*!40000 ALTER TABLE `Abilities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Comments`
--

DROP TABLE IF EXISTS `Comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment` varchar(255) NOT NULL,
  `video_url` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `hero_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `hero_id` (`hero_id`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`hero_id`) REFERENCES `Heros` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comments`
--

LOCK TABLES `Comments` WRITE;
/*!40000 ALTER TABLE `Comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `Comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Heros`
--

DROP TABLE IF EXISTS `Heros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Heros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `bio` text,
  `tips_desc` varchar(255) DEFAULT NULL,
  `tips_video_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Heros`
--

LOCK TABLES `Heros` WRITE;
/*!40000 ALTER TABLE `Heros` DISABLE KEYS */;
INSERT INTO `Heros` VALUES (1,'Crystal Maiden','/hero/crystal_maiden_full.png','Born in a temperate realm, raised with her fiery older sister Lina, Rylai the Crystal Maiden soon found that her innate elemental affinity to ice created trouble for all those around her. Wellsprings and mountain rivers froze in moments if she stopped to rest nearby; ripening crops were bitten by frost, and fruiting orchards turned to mazes of ice and came crashing down, spoiled. When their exasperated parents packed Lina off to the equator, Rylai found herself banished to the cold northern realm of Icewrack, where she was taken in by an Ice Wizard who had carved himself a hermitage at the crown of the Blueheart Glacier. After long study, the wizard pronounced her ready for solitary practice and left her to take his place, descending into the glacier to hibernate for a thousand years. Her mastery of the Frozen Arts has only deepened since that time, and now her skills are unmatched. ','','https://www.youtube.com/watch?v=mzZSmeoKs94');
/*!40000 ALTER TABLE `Heros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Statuses`
--

DROP TABLE IF EXISTS `Statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Statuses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level` int(11) NOT NULL,
  `strength` varchar(20) NOT NULL,
  `attack` varchar(20) NOT NULL,
  `agility` varchar(20) NOT NULL,
  `speed` varchar(20) NOT NULL,
  `intellligence` varchar(20) NOT NULL,
  `armor` varchar(20) NOT NULL,
  `hero_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `hero_id` (`hero_id`),
  CONSTRAINT `statuses_ibfk_1` FOREIGN KEY (`hero_id`) REFERENCES `Heros` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Statuses`
--

LOCK TABLES `Statuses` WRITE;
/*!40000 ALTER TABLE `Statuses` DISABLE KEYS */;
INSERT INTO `Statuses` VALUES (1,1,'18','43','16','277','14','2.66',1),(2,2,'24','60','30','400','21','6.1',1),(3,3,'40','100','50','532','33','8.7',1);
/*!40000 ALTER TABLE `Statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Uploads`
--

DROP TABLE IF EXISTS `Uploads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Uploads` (
  `id` varchar(255) NOT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `mime_type` varchar(255) DEFAULT NULL,
  `encoding` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Uploads`
--

LOCK TABLES `Uploads` WRITE;
/*!40000 ALTER TABLE `Uploads` DISABLE KEYS */;
/*!40000 ALTER TABLE `Uploads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` text NOT NULL,
  `profpic_url` varchar(255) DEFAULT NULL,
  `role` enum('ADMIN','MEMBER') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'Yahya','yahya.sahaja2@gmail.com','$2a$12$xYReT22IFUEN1NP5Cppw7.6uPvZOX574nY1miPALa0EXU0KWd0vH6',NULL,'ADMIN');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-07 10:29:09
