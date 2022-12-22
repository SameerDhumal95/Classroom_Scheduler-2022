-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: classroom-scheduler
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: classroom-scheduler
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: classroom_scheduler
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `assignment_info`
--

DROP TABLE IF EXISTS `assignment_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assignment_info` (
  `assignment_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `file` longblob,
  `assign_date` date NOT NULL,
  `submission_date` date NOT NULL,
  `subject_id` int NOT NULL,
  `teacher_id` int NOT NULL,
  PRIMARY KEY (`assignment_id`),
  KEY `assignment_subject_id_idx` (`subject_id`),
  KEY `assignment_teacher_id_idx` (`teacher_id`),
  CONSTRAINT `assignment_subject_id` FOREIGN KEY (`subject_id`) REFERENCES `subject_info` (`subject_id`),
  CONSTRAINT `assignment_teacher_id` FOREIGN KEY (`teacher_id`) REFERENCES `teacher_info` (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment_info`
--

LOCK TABLES `assignment_info` WRITE;
/*!40000 ALTER TABLE `assignment_info` DISABLE KEYS */;
INSERT INTO `assignment_info` VALUES (1,'WPT',NULL,'2022-08-30','2022-08-31',1,1),(2,'DS',NULL,'2022-09-06','2022-09-10',2,3),(3,'DS2',NULL,'2022-08-30','2022-08-31',3,2);
/*!40000 ALTER TABLE `assignment_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classcoordinator_info`
--

DROP TABLE IF EXISTS `classcoordinator_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classcoordinator_info` (
  `classcoordinator_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `middle_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `photo` blob,
  `institute_name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `phone` bigint NOT NULL,
  PRIMARY KEY (`classcoordinator_id`),
  UNIQUE KEY `email_id_UNIQUE` (`email_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classcoordinator_info`
--

LOCK TABLES `classcoordinator_info` WRITE;
/*!40000 ALTER TABLE `classcoordinator_info` DISABLE KEYS */;
INSERT INTO `classcoordinator_info` VALUES (1,'Ravi','Ganesh','Deshmukh',NULL,'IET','ravi@iet.com','ravi','ravi@gmail.com',1234567890),(3,'Sameeer','Namdev','Dhumal',NULL,'ACTS','same@acts.com','sam','sam@gmail.com',1234567890),(4,'Bob','K','Martin',NULL,'ACTS','bob@acts','bob','bob@gmail.com',12345),(5,'Sandy','A','Fernandes',NULL,'Sunbeam','sandy@sunbeam','sandy','sandy@gmail.com',123465),(6,'Shiva','Ram','Krishnan',NULL,'Sunbeam','shiva@sunbeam','pass','shiva@gmail.com',123465),(7,'Vaibhav','R','Naik',NULL,'Vita','vaibhav@vita','123456','vaibhav@gmail',96854231500),(8,'','','',NULL,'','','','',0),(12,'gg','Ganesh','Deshmukh',NULL,'gg','ravi1@iet.com','ravi','ravi1@gmail.com',9595959592),(13,'Vaibhav','','',NULL,'poi','voi@acts','void','sd@gmail.com',1234567890),(14,'Vaibhav','','',NULL,'poi','void@acts','void','vsd@gmail.com',1234567890);
/*!40000 ALTER TABLE `classcoordinator_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daily_timetable`
--

DROP TABLE IF EXISTS `daily_timetable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daily_timetable` (
  `daily_timetable_id` int NOT NULL AUTO_INCREMENT,
  `subject_id` int DEFAULT NULL,
  `teacher_id` int DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `link` longtext,
  `day_id` int DEFAULT NULL,
  PRIMARY KEY (`daily_timetable_id`),
  KEY `daily_daywise_fk1_idx` (`day_id`),
  KEY `daily_subject_fk1_idx` (`subject_id`),
  KEY `daily_teacher_fk1_idx` (`teacher_id`),
  CONSTRAINT `daily_daywise_fk1` FOREIGN KEY (`day_id`) REFERENCES `daywise_timetable` (`day_id`),
  CONSTRAINT `daily_subject_fk1` FOREIGN KEY (`subject_id`) REFERENCES `subject_info` (`subject_id`),
  CONSTRAINT `daily_teacher_fk1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher_info` (`teacher_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily_timetable`
--

LOCK TABLES `daily_timetable` WRITE;
/*!40000 ALTER TABLE `daily_timetable` DISABLE KEYS */;
/*!40000 ALTER TABLE `daily_timetable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daywise_timetable`
--

DROP TABLE IF EXISTS `daywise_timetable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daywise_timetable` (
  `day_id` int NOT NULL AUTO_INCREMENT,
  `timetable_id` int NOT NULL,
  `day` varchar(15) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`day_id`),
  KEY `daywise_timetable_fk1` (`timetable_id`),
  CONSTRAINT `daywise_timetable_fk1` FOREIGN KEY (`timetable_id`) REFERENCES `timetable_week_info` (`timetable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daywise_timetable`
--

LOCK TABLES `daywise_timetable` WRITE;
/*!40000 ALTER TABLE `daywise_timetable` DISABLE KEYS */;
INSERT INTO `daywise_timetable` VALUES (1,1,'Monday','2022-08-30'),(2,1,'Tuesday','2022-08-31'),(3,1,'Wednesday','2022-09-01'),(4,2,'Monday','2022-09-06'),(5,2,'Tuesday','2022-09-07'),(7,3,'Monday','2022-08-30');
/*!40000 ALTER TABLE `daywise_timetable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_info`
--

DROP TABLE IF EXISTS `student_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_info` (
  `student_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `middle_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `photo` blob,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `phone` bigint NOT NULL,
  `classcoordinator_id` int NOT NULL,
  PRIMARY KEY (`student_id`),
  UNIQUE KEY `email_id_UNIQUE` (`email_id`),
  KEY `student_fk1_idx` (`classcoordinator_id`),
  CONSTRAINT `student_fk1` FOREIGN KEY (`classcoordinator_id`) REFERENCES `classcoordinator_info` (`classcoordinator_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_info`
--

LOCK TABLES `student_info` WRITE;
/*!40000 ALTER TABLE `student_info` DISABLE KEYS */;
INSERT INTO `student_info` VALUES (1,'Shubham','Pravin','More',NULL,'shubh@gmail','shubh','shubh@abc',9967845101,1),(2,'Milind','Ragunath','Kondekar',NULL,'rush@gmail','rush1234','rush@gmail',9967845412,1),(4,'Shivani','Ramling','Naiknaware',NULL,'shivani@gmail','shivani1234','shivani@abc',9967845101,3);
/*!40000 ALTER TABLE `student_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subject_info`
--

DROP TABLE IF EXISTS `subject_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subject_info` (
  `subject_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  `duration` int DEFAULT NULL,
  `classcoordinator_id` int DEFAULT NULL,
  PRIMARY KEY (`subject_id`),
  KEY `classcoorinator_fk1_idx` (`classcoordinator_id`),
  CONSTRAINT `classcoorinator_fk1` FOREIGN KEY (`classcoordinator_id`) REFERENCES `classcoordinator_info` (`classcoordinator_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subject_info`
--

LOCK TABLES `subject_info` WRITE;
/*!40000 ALTER TABLE `subject_info` DISABLE KEYS */;
INSERT INTO `subject_info` VALUES (1,'COP',14,1),(2,'OS',15,1),(3,'DataStructure',14,3),(4,'WPT',15,3);
/*!40000 ALTER TABLE `subject_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher_info`
--

DROP TABLE IF EXISTS `teacher_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher_info` (
  `teacher_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `middle_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `photo` blob,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `phone` bigint NOT NULL,
  `classcoordinator_Id` int NOT NULL,
  PRIMARY KEY (`teacher_id`),
  UNIQUE KEY `email_id_UNIQUE` (`email_id`),
  KEY `teacher_fk1_idx` (`classcoordinator_Id`),
  CONSTRAINT `teacher_fk1` FOREIGN KEY (`classcoordinator_Id`) REFERENCES `classcoordinator_info` (`classcoordinator_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher_info`
--

LOCK TABLES `teacher_info` WRITE;
/*!40000 ALTER TABLE `teacher_info` DISABLE KEYS */;
INSERT INTO `teacher_info` VALUES (1,'Prachi','A','Godbole',NULL,'prachiG@gmail','prachi1234','prachiG@gmail',9967845401,1),(2,'Smita','B','Prashant',NULL,'smija@gmail','smija1235','smija@gmail',9762816002,1),(3,'Ram','B','Tambade',NULL,'ram@gmail','ram1235','ram@gmail',9762816002,3);
/*!40000 ALTER TABLE `teacher_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher_subject_info`
--

DROP TABLE IF EXISTS `teacher_subject_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher_subject_info` (
  `teacher_subject_id` int NOT NULL AUTO_INCREMENT,
  `teacher_id` int NOT NULL,
  `subject_id` int NOT NULL,
  PRIMARY KEY (`teacher_subject_id`),
  KEY `TS_subject_fk1_idx` (`subject_id`),
  KEY `TS_teacher_fk1_idx` (`teacher_id`),
  CONSTRAINT `TS_subject_fk1` FOREIGN KEY (`subject_id`) REFERENCES `subject_info` (`subject_id`),
  CONSTRAINT `TS_teacher_fk1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher_info` (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher_subject_info`
--

LOCK TABLES `teacher_subject_info` WRITE;
/*!40000 ALTER TABLE `teacher_subject_info` DISABLE KEYS */;
INSERT INTO `teacher_subject_info` VALUES (1,1,1),(2,1,3),(4,2,2);
/*!40000 ALTER TABLE `teacher_subject_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timetable`
--

DROP TABLE IF EXISTS `timetable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `timetable` (
  `timetable_id` int NOT NULL AUTO_INCREMENT,
  `subject_name` varchar(45) NOT NULL,
  `teacher_id` int NOT NULL,
  `start_time` varchar(45) NOT NULL,
  `end_time` varchar(45) NOT NULL,
  `classcoordinator_id` int DEFAULT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`timetable_id`),
  KEY `timetable_cc_fk1_idx` (`classcoordinator_id`),
  KEY `timetable_teacher_fk1_idx` (`teacher_id`),
  CONSTRAINT `timetable_cc_fk1` FOREIGN KEY (`classcoordinator_id`) REFERENCES `classcoordinator_info` (`classcoordinator_id`),
  CONSTRAINT `timetable_teacher_fk1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher_info` (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timetable`
--

LOCK TABLES `timetable` WRITE;
/*!40000 ALTER TABLE `timetable` DISABLE KEYS */;
INSERT INTO `timetable` VALUES (1,'COP',1,'09:00','10:00',1,'2022-08-30'),(2,'COP',1,'09:00','11:00',1,'2022-08-31'),(3,'DataStructure',2,'08:00','12:00',3,'2022-09-06');
/*!40000 ALTER TABLE `timetable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timetable_week_info`
--

DROP TABLE IF EXISTS `timetable_week_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `timetable_week_info` (
  `timetable_id` int NOT NULL AUTO_INCREMENT,
  `start_date` date NOT NULL,
  `week_no` int DEFAULT NULL,
  `classcoordinator_id` int DEFAULT NULL,
  PRIMARY KEY (`timetable_id`),
  KEY `TW_classcoordinator_fk1_idx` (`classcoordinator_id`),
  CONSTRAINT `TW_classcoordinator_fk1` FOREIGN KEY (`classcoordinator_id`) REFERENCES `classcoordinator_info` (`classcoordinator_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timetable_week_info`
--

LOCK TABLES `timetable_week_info` WRITE;
/*!40000 ALTER TABLE `timetable_week_info` DISABLE KEYS */;
INSERT INTO `timetable_week_info` VALUES (1,'2022-08-30',1,1),(2,'2022-09-06',2,1),(3,'2022-08-30',1,3);
/*!40000 ALTER TABLE `timetable_week_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `view_timetable`
--

DROP TABLE IF EXISTS `view_timetable`;
/*!50001 DROP VIEW IF EXISTS `view_timetable`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_timetable` AS SELECT 
 1 AS `date`,
 1 AS `subject_name`,
 1 AS `start_time`,
 1 AS `end_time`,
 1 AS `teacher_name`,
 1 AS `classcoordinator_id`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `view_timetable`
--

/*!50001 DROP VIEW IF EXISTS `view_timetable`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_timetable` AS select `t`.`date` AS `date`,`t`.`subject_name` AS `subject_name`,`t`.`start_time` AS `start_time`,`t`.`end_time` AS `end_time`,concat(`s`.`first_name`,' ',`s`.`last_name`) AS `teacher_name`,`c`.`classcoordinator_id` AS `classcoordinator_id` from ((`timetable` `t` join `teacher_info` `s`) join `classcoordinator_info` `c`) where ((`t`.`teacher_id` = `s`.`teacher_id`) and (`t`.`classcoordinator_id` = `c`.`classcoordinator_id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-15 16:04:51
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: classroom_scheduler
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `assignment_info`
--

DROP TABLE IF EXISTS `assignment_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assignment_info` (
  `assignment_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `file` longblob,
  `assign_date` date NOT NULL,
  `submission_date` date NOT NULL,
  `subject_id` int NOT NULL,
  `teacher_id` int NOT NULL,
  PRIMARY KEY (`assignment_id`),
  KEY `assignment_subject_id_idx` (`subject_id`),
  KEY `assignment_teacher_id_idx` (`teacher_id`),
  CONSTRAINT `assignment_subject_id` FOREIGN KEY (`subject_id`) REFERENCES `subject_info` (`subject_id`),
  CONSTRAINT `assignment_teacher_id` FOREIGN KEY (`teacher_id`) REFERENCES `teacher_info` (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment_info`
--

LOCK TABLES `assignment_info` WRITE;
/*!40000 ALTER TABLE `assignment_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `assignment_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classcoordinator_info`
--

DROP TABLE IF EXISTS `classcoordinator_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classcoordinator_info` (
  `classcoordinator_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `middle_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `photo` blob,
  `institute_name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `phone` bigint NOT NULL,
  PRIMARY KEY (`classcoordinator_id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classcoordinator_info`
--

LOCK TABLES `classcoordinator_info` WRITE;
/*!40000 ALTER TABLE `classcoordinator_info` DISABLE KEYS */;
INSERT INTO `classcoordinator_info` VALUES (1,'Ravindra','Ganesh','Deshmukh',NULL,'IET','ravi@iet.com','ravi1234','ravi@gmail.com',9004984756),(2,'Snehal','Ramesh','Patil',NULL,'VITA','snehal@vita.com','snehal1234','snehal@gmail.com',9892745456),(3,'Sameer','Namdev','Dhumal',NULL,'ACTS','sameer@acts.com','sameer1234','sam@gmail.com',9967478754),(4,'John',NULL,'Philip',NULL,'SSC','john@ssc.com','john1234','john@gmail.com',7788454562);
/*!40000 ALTER TABLE `classcoordinator_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daily_timetable`
--

DROP TABLE IF EXISTS `daily_timetable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daily_timetable` (
  `daily_timetable_id` int NOT NULL AUTO_INCREMENT,
  `subject_id` int DEFAULT NULL,
  `teacher_id` int DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `link` longtext,
  `day_id` int DEFAULT NULL,
  PRIMARY KEY (`daily_timetable_id`),
  KEY `daily_daywise_fk1_idx` (`day_id`),
  KEY `daily_subject_fk1_idx` (`subject_id`),
  KEY `daily_teacher_fk1_idx` (`teacher_id`),
  CONSTRAINT `daily_daywise_fk1` FOREIGN KEY (`day_id`) REFERENCES `daywise_timetable` (`day_id`),
  CONSTRAINT `daily_subject_fk1` FOREIGN KEY (`subject_id`) REFERENCES `subject_info` (`subject_id`),
  CONSTRAINT `daily_teacher_fk1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher_info` (`teacher_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily_timetable`
--

LOCK TABLES `daily_timetable` WRITE;
/*!40000 ALTER TABLE `daily_timetable` DISABLE KEYS */;
/*!40000 ALTER TABLE `daily_timetable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daywise_timetable`
--

DROP TABLE IF EXISTS `daywise_timetable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daywise_timetable` (
  `day_id` int NOT NULL AUTO_INCREMENT,
  `timetable_id` int NOT NULL,
  `day` varchar(15) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`day_id`),
  KEY `daywise_timetable_fk1` (`timetable_id`),
  CONSTRAINT `daywise_timetable_fk1` FOREIGN KEY (`timetable_id`) REFERENCES `timetable_week_info` (`timetable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daywise_timetable`
--

LOCK TABLES `daywise_timetable` WRITE;
/*!40000 ALTER TABLE `daywise_timetable` DISABLE KEYS */;
INSERT INTO `daywise_timetable` VALUES (1,1,'Monday','2022-08-30'),(2,1,'Tuesday','2022-08-31'),(3,1,'Wednesday','2022-09-01'),(4,2,'Monday','2022-09-06'),(5,2,'Tuesday','2022-09-07'),(7,3,'Monday','2022-08-30');
/*!40000 ALTER TABLE `daywise_timetable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_info`
--

DROP TABLE IF EXISTS `student_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_info` (
  `student_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `middle_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `photo` blob,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `phone` bigint NOT NULL,
  `classcoordinator_id` int NOT NULL,
  PRIMARY KEY (`student_id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  KEY `student_fk1_idx` (`classcoordinator_id`),
  CONSTRAINT `student_fk1` FOREIGN KEY (`classcoordinator_id`) REFERENCES `classcoordinator_info` (`classcoordinator_id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_info`
--

LOCK TABLES `student_info` WRITE;
/*!40000 ALTER TABLE `student_info` DISABLE KEYS */;
INSERT INTO `student_info` VALUES (1,'Shubham','Pravin','More',NULL,'shubh@iet.com','shubh1234','shubh@gmail.com',9666111548,1),(2,'Milind','Ragunath','Kondekar',NULL,'milind@iet.com','milind1234','milind@gmail.com',9967845412,1),(3,'Rushikesh','Kishor','Kadam',NULL,'rushikesh@iet.com','rushikesh1234','rushikesh@gmail.com',9400015487,1),(4,'Pritam','Pankaj','Jadhav',NULL,'pritam@iet.com','pritam1234','pritam@gmail.com',9800014784,1),(5,'Prachi','Rutik','Ghadge',NULL,'prachi@iet.com','prachi1234','prachi@gmail.com',9454584620,1),(6,'Gaurav','Ashok','Hedge',NULL,'gaurav@iet.com','gaurav1234','gaurav@gmail.com',9895921460,1),(7,'Aaysha',NULL,'Chouhan',NULL,'aaysha@iet.com','aaysha1234','aaysha@gmail.com',8800251346,1),(8,'Aditya',NULL,'Tumsare',NULL,'aditya@iet.com','aditya@1234','aditya@gmail.com',8451236774,1),(9,'Sunil','Kunal','Gosavi',NULL,'sunil@iet.com','sunil1234','sunil@gmail.com',8000100456,1),(10,'Himanshu','Aakash','Roy',NULL,'himanshu@iet.com','himanshu1234','himanshu@gmail.com',8700154691,1),(11,'Sarah','','Khan',NULL,'sarah@vita.com','sarah1234','sarah@gmail.com',96854231500,2),(12,'Om','Rajaram','More',NULL,'om@vita.com','om1234','om@gmail.com',9565458515,2),(13,'John','','Wick',NULL,'john@vita.com','john1234','john@gmail.com',9685423150,2),(21,'Kim','John','Fernandes',NULL,'kim@acts.com','kim1234','kim@gmail.com',9565458666,3),(22,'Amol','K','Gawande',NULL,'amol@acts.com','amol1234','amol@gmail.com',7745142344,3),(23,'Sahil','Rajaram','More',NULL,'sahil@acts.com','sahil1234','sahil@gmail.com',9685423150,3),(24,'Shubham',NULL,'More',NULL,'shubham@ssc.com','shubham1234','shubham@gmail.com',7854568969,4),(25,'Sameer',NULL,'Dhumal',NULL,'sameer@ssc.com','sameer1234','sameer@gmail.com',7898545661,4),(26,'Milind',NULL,'Kondekar',NULL,'milind@ssc.com','milind1234','milind@gmail.com',8745636968,4),(27,'Prachi',NULL,'Rathod',NULL,'prachi@ssc.com','prachi1234','prachi@gmail.com',9946565886,4),(28,'Rushikesh',NULL,'Kadam',NULL,'rush@ssc.com','rush1234','rush@gmail.com',7875457999,4),(29,'Gaurav',NULL,'Hadge',NULL,'gaurav@ssc.com','gaurav1234','gaurav@gmail.com',7784587656,4);
/*!40000 ALTER TABLE `student_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subject_info`
--

DROP TABLE IF EXISTS `subject_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subject_info` (
  `subject_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  `duration` int DEFAULT NULL,
  `classcoordinator_id` int DEFAULT NULL,
  PRIMARY KEY (`subject_id`),
  KEY `classcoorinator_fk1_idx` (`classcoordinator_id`),
  CONSTRAINT `classcoorinator_fk1` FOREIGN KEY (`classcoordinator_id`) REFERENCES `classcoordinator_info` (`classcoordinator_id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subject_info`
--

LOCK TABLES `subject_info` WRITE;
/*!40000 ALTER TABLE `subject_info` DISABLE KEYS */;
INSERT INTO `subject_info` VALUES (1,'COP',36,1),(2,'COP Lab',22,1),(3,'Database',30,1),(4,'Database Lab',32,1),(5,'WPT',48,1),(6,'WPT Lab',48,1),(8,'Web Based Technology',46,1),(38,'Data Structure Lab',28,3),(39,'Database',32,3),(40,'Database Lab',32,3),(41,'MS .NET',42,3),(42,'MS .NET Lab',32,3),(43,'Object Oriented Programing',46,3),(44,'Object Oriented Programing Lab',46,3),(45,'Software Dev. Methodology',38,3),(46,'Web Based Technology',46,3),(47,'Web Based Technology Lab',44,3),(49,'COP',36,2),(50,'COP Lab',22,2),(51,'Database',32,2),(52,'MS .NET',32,2),(53,'MS .NET Lab',32,2),(54,'OOPS',46,2),(55,'OOPS Lab',46,2),(56,'Web Programming Technology',48,2),(59,'Web Based Technology Lab',44,1),(60,'SDM',38,1),(61,'SDM Lab',38,1),(62,'Apti',72,1),(63,'English',48,4),(64,'Hindi',56,4),(65,'Marathi',35,4),(66,'Math',40,4),(67,'Science',32,4),(68,'Social Science',42,4);
/*!40000 ALTER TABLE `subject_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher_info`
--

DROP TABLE IF EXISTS `teacher_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher_info` (
  `teacher_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `middle_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) NOT NULL,
  `photo` blob,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `phone` bigint NOT NULL,
  `classcoordinator_id` int NOT NULL,
  PRIMARY KEY (`teacher_id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  KEY `teacher_fk1_idx` (`classcoordinator_id`),
  CONSTRAINT `teacher_fk1` FOREIGN KEY (`classcoordinator_id`) REFERENCES `classcoordinator_info` (`classcoordinator_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher_info`
--

LOCK TABLES `teacher_info` WRITE;
/*!40000 ALTER TABLE `teacher_info` DISABLE KEYS */;
INSERT INTO `teacher_info` VALUES (1,'Prachi','Anil','Godbole',NULL,'prachi@iet.com','prachi1234','prachiG@gmail.com',9967845401,1),(2,'Smija','','Prashant',NULL,'smija@iet.com','smija1234','smija@gmail.com',9762816002,1),(3,'Ram','Balu','Tambade',NULL,'ram@acts.com','ram1234','ram@mail.com',9762816002,3),(4,'Sarah','Amar','Khan',NULL,'sarah@acts.com','sarah1234','sarah@gmail.com',9685423150,3),(5,'Milind','Balaram','Kumar',NULL,'milind@iet.com','milind1234','milind@gmail.com',9685423150,1),(6,'Janhavi','Raj','Deokar',NULL,'janhavi@iet.com','janhavi1234','janhavi@gmail.com',7845697555,1),(7,'Ramesh',NULL,'Jadhav',NULL,'ramesh@iet.com','ramesh1234','ramesh@gmail.com',7738454562,1),(8,'Jeet','Dhumkar','Pawan',NULL,'jeet@iet.com','jeet1234','jeet@gmail.com',9685423150,1),(9,'Sandeep','Dev','Maheshwari',NULL,'sandeep@vita.com','sandeep1234','sandeep@gmail.com',8456912344,2),(10,'Madhura','Raj','Yadav',NULL,'madhura@vita.com','madhura1234','madhura@gmail.com',9000100456,2),(11,'Sudeep','Aakash','Kumar',NULL,'sudeep@iet.com','sudeep1234','sudeep@gmail.com',8456123265,1),(12,'Sneha',NULL,'Parchure',NULL,'sneha@vita.com','sneha1234','sneha@gmail.com',8475123456,2),(13,'Ahmed',NULL,'Qureshi',NULL,'ahmed@vita.com','ahmed1234','ahmed@gmail.com',9001245000,2),(14,'Dheeraj','Dhananjay','Deshmukh',NULL,'dheeraj@vita.com','dheeraj1234','dheeraj@gmail.com',7666125634,2),(15,'Suryakant','Ganpati','Dhumale',NULL,'suryakant@vita.com','suryakant1234','suryakant@gmail.com',8009761234,2),(16,'Shubham',NULL,'Sharma',NULL,'shubham@vita.com','shubham1234','shubham@gmail.com',9000207653,2),(18,'Jaykant','Mangesh','Shikare',NULL,'jaykant@acts.com','jaykant1234','jaykant@gmail.com',9142245555,3),(19,'Hitesh','Kishor','Gujar',NULL,'hitesh@acts.com','hitesh1234','hitesh@gmail.com',8755421347,3),(20,'Mahesh','Ganesh','Bait',NULL,'mahesh@acts.com','mahesh1234','mahesh@gmail.com',8001005454,3),(21,'Karan','Jimesh','Mengade',NULL,'karan@acts.com','karan1234','karan@gmail.com',7738984565,3),(22,'Pravin','Vijay','Das',NULL,'pravin@acts.com','pravin1234','pravin@gmail.com',9045651111,3),(23,'Vijaya','Kumar','Raijade',NULL,'vijaya@acts.com','vijaya1234','vijaya@gmail.com',7444541579,3),(24,'Lahu','','Yadav',NULL,'lahu@acts.com','lahu1234','lahu@gmail.com',8744455123,3),(25,'Aditya','Ganesh','Khurana',NULL,'aditya@ssc.com','aditya1234','aditya@gmail.com',9990045656,4),(26,'Kavya',NULL,'Patil',NULL,'kavya@ssc.com','kavya1234','kavya@gmail.com',7784668124,4),(27,'Sneha','Kumar','Botre',NULL,'sneha@ssc.com','sneha1234','sneha@gmail.com',8800154989,4),(28,'Vijaya',NULL,'Keshav',NULL,'vijaya@ssc.com','vijaya1234','vijaya@gmail.com',7876843996,4);
/*!40000 ALTER TABLE `teacher_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher_subject_info`
--

DROP TABLE IF EXISTS `teacher_subject_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher_subject_info` (
  `teacher_subject_id` int NOT NULL AUTO_INCREMENT,
  `teacher_id` int NOT NULL,
  `subject_id` int NOT NULL,
  PRIMARY KEY (`teacher_subject_id`),
  KEY `TS_subject_fk1_idx` (`subject_id`),
  KEY `TS_teacher_fk1_idx` (`teacher_id`),
  CONSTRAINT `TS_subject_fk1` FOREIGN KEY (`subject_id`) REFERENCES `subject_info` (`subject_id`),
  CONSTRAINT `TS_teacher_fk1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher_info` (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher_subject_info`
--

LOCK TABLES `teacher_subject_info` WRITE;
/*!40000 ALTER TABLE `teacher_subject_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `teacher_subject_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timetable`
--

DROP TABLE IF EXISTS `timetable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `timetable` (
  `timetable_id` int NOT NULL AUTO_INCREMENT,
  `subject_name` varchar(45) NOT NULL,
  `teacher_name` varchar(250) NOT NULL,
  `start_time` varchar(45) NOT NULL,
  `end_time` varchar(45) NOT NULL,
  `classcoordinator_id` int DEFAULT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`timetable_id`),
  KEY `timetable_cc_fk1_idx` (`classcoordinator_id`),
  CONSTRAINT `timetable_cc_fk1` FOREIGN KEY (`classcoordinator_id`) REFERENCES `classcoordinator_info` (`classcoordinator_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timetable`
--

LOCK TABLES `timetable` WRITE;
/*!40000 ALTER TABLE `timetable` DISABLE KEYS */;
INSERT INTO `timetable` VALUES (3,'Web Programming Technology','Ram','12:00','03:00',3,'2022-09-22'),(5,'Web Based Technology','Sarah','01:00','03:00',3,'2022-09-23'),(7,'COP','Madhura','08:00','01:00',2,'2022-09-24'),(10,'Web Based Technology','Prachi','08:00','11:00',1,'2022-06-20'),(11,'Web Based Technology Lab','Milind','02:00','04:00',1,'2022-06-20'),(12,'Aptitude','Ramesh','06:00','08:00',1,'2022-06-20'),(13,'COP','Janhavi','08:00','11:00',1,'2022-06-21'),(14,'COP Lab','Milind','02:00','04:00',1,'2022-06-21'),(15,'Aptitude','Ramesh','06:00','08:00',1,'2022-06-21'),(16,'Web Based Technology','Prachi','08:00','11:00',1,'2022-06-22'),(17,'Web Based Technology Lab','Milind','02:00','04:00',1,'2022-06-22'),(18,'Aptitude','Ramesh','06:00','08:00',1,'2022-06-22'),(19,'COP','Janhavi','08:00','12:00',1,'2022-06-23'),(20,'COP Lab','Milind','02:00','04:00',1,'2022-06-23'),(21,'COP','Janhavi','08:00','01:00',1,'2022-06-24'),(22,'COP Lab','Milind','02:00','04:00',1,'2022-06-24'),(23,'Web Based Technology','Prachi','08:00','11:00',1,'2022-06-25'),(24,'Web Based Technology Lab','Milind','02:00','04:00',1,'2022-06-25'),(25,'Web Based Technology','Prachi','08:00','11:00',1,'2022-06-26'),(26,'Web Based Technology Lab','Milind','02:00','04:00',1,'2022-06-26'),(27,'OOPS','Madhura','08:00','01:00',2,'2022-09-25'),(28,'English','Aditya','08:00','12:00',4,'2022-09-26'),(29,'Marathi','Kavya','12:00','01:00',4,'2022-09-25'),(30,'Math','Sneha','08:00','12:00',4,'2022-09-27'),(31,'English','Aditya','08:00','01:00',4,'2022-09-27');
/*!40000 ALTER TABLE `timetable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timetable_week_info`
--

DROP TABLE IF EXISTS `timetable_week_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `timetable_week_info` (
  `timetable_id` int NOT NULL AUTO_INCREMENT,
  `start_date` date NOT NULL,
  `week_no` int DEFAULT NULL,
  `classcoordinator_id` int DEFAULT NULL,
  PRIMARY KEY (`timetable_id`),
  KEY `TW_classcoordinator_fk1_idx` (`classcoordinator_id`),
  CONSTRAINT `TW_classcoordinator_fk1` FOREIGN KEY (`classcoordinator_id`) REFERENCES `classcoordinator_info` (`classcoordinator_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timetable_week_info`
--

LOCK TABLES `timetable_week_info` WRITE;
/*!40000 ALTER TABLE `timetable_week_info` DISABLE KEYS */;
INSERT INTO `timetable_week_info` VALUES (1,'2022-08-30',1,1),(2,'2022-09-06',2,1),(3,'2022-08-30',1,3);
/*!40000 ALTER TABLE `timetable_week_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `view_timetable`
--

DROP TABLE IF EXISTS `view_timetable`;
