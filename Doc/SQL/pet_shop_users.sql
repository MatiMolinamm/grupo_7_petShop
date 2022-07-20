-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: pet_shop
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `phone` bigint NOT NULL,
  `email` varchar(100) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `category_id_idx` (`category_id`),
  CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (8,'mate',132465879,'molina.matias.78998787@gmail.com','avatar-1655875402026.png','$2a$10$u/uj.geMVfWsqauPjrDMMOkvNHvt.NYl/SHtGQZI87KOG24hqKG6a',1),(9,'mate',132465879,'molina.matias.78998@gmail.com','avatar-1655875464554.png','$2a$10$uU46tqPhRlSrc1BmGGusr.RD9rhiQFiOvGyHuYNJ/ZgK46RFCe8CC',1),(10,'mate',132465879,'molina.matias.7998@gmail.com','avatar-1655875509853.png','$2a$10$NHfQxu2p/hJ2mJ/d.IqxDepozOKtFfFaroLBaXjyu0mS1Jnb94AY.',1),(11,'mate',132465879,'molina.matias.79898989898@gmail.com','avatar-1655875547715.png','$2a$10$zk20eInHh1UV0kvNO5Te.OVE.LN881BuAQeJnd/zRVptDqpCGAAfS',1),(12,'Matias Molina',7978798798,'7777olina.matias.87@gmail.com','avatar-1655875618326.png','$2a$10$dpFjXtQ4WXNuDISM7gODbuPVHazd6CpdUxyfVG2b3lFa1Qwp5N5Fm',1),(13,'asas',1212121,'luca@gmail.com','avatar-1655875675698.png','$2a$10$1eXq//nEscPF96dPD3dfsOK6uIkyt1q.X74RZRZpkIipfXYKz.IFu',2),(14,'juan1234',1234,'juan1234@gmail.com','avatar-1655875854372.png','$2a$10$lOt1mllPn8HOrCvmmuL9WujJa17Ceob0bPET33yonn5T/heVPSdve',1),(15,'mate',1234,'mate@gmail.com','avatar-1655878830859.jpg','$2a$10$mvXzZjyxhxMyCpmJZ8AHuuvcU6mSntgOsCojBDkeVHdfMUkFopWoa',1),(21,'titi8',888,'titi8@gmail.com','avatar-1656769539126.png','$2a$10$Nd.SCOFo.lqjSRrpGD4HGetWfwJbRLhq3PWIHf0THFvWxDnhRLXX2',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-02 10:50:37