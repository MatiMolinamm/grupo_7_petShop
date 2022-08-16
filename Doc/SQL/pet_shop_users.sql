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
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (8,'mate',132465879,'molina.matias.78998787@gmail.com','avatar-1655875402026.png','$2a$10$u/uj.geMVfWsqauPjrDMMOkvNHvt.NYl/SHtGQZI87KOG24hqKG6a',1),(9,'mate',132465879,'molina.matias.78998@gmail.com','avatar-1655875464554.png','$2a$10$uU46tqPhRlSrc1BmGGusr.RD9rhiQFiOvGyHuYNJ/ZgK46RFCe8CC',1),(10,'mate',132465879,'molina.matias.7998@gmail.com','avatar-1655875509853.png','$2a$10$NHfQxu2p/hJ2mJ/d.IqxDepozOKtFfFaroLBaXjyu0mS1Jnb94AY.',1),(11,'mate',132465879,'molina.matias.79898989898@gmail.com','avatar-1655875547715.png','$2a$10$zk20eInHh1UV0kvNO5Te.OVE.LN881BuAQeJnd/zRVptDqpCGAAfS',1),(12,'Matias Molina',7978798798,'7777olina.matias.87@gmail.com','avatar-1655875618326.png','$2a$10$dpFjXtQ4WXNuDISM7gODbuPVHazd6CpdUxyfVG2b3lFa1Qwp5N5Fm',1),(13,'asas',1212121,'luca@gmail.com','avatar-1655875675698.png','$2a$10$1eXq//nEscPF96dPD3dfsOK6uIkyt1q.X74RZRZpkIipfXYKz.IFu',2),(14,'juan1234',1234,'juan1234@gmail.com','avatar-1655875854372.png','$2a$10$lOt1mllPn8HOrCvmmuL9WujJa17Ceob0bPET33yonn5T/heVPSdve',1),(15,'mate',1234,'mate@gmail.com','avatar-1655878830859.jpg','$2a$10$mvXzZjyxhxMyCpmJZ8AHuuvcU6mSntgOsCojBDkeVHdfMUkFopWoa',1),(21,'titi8',888,'titi8@gmail.com','avatar-1656769539126.png','$2a$10$Nd.SCOFo.lqjSRrpGD4HGetWfwJbRLhq3PWIHf0THFvWxDnhRLXX2',1),(22,'mm121212',1212,'mm13@gmail.com','avatar-1656771059312.png','$2a$10$ND23RUPNoi7ZAz2ooD3HmuHFTou.aP3N7f8vgLPIdgOKFH2NfZaeS',1),(24,'vicky12',1212,'vicky12@gmail.com','avatar-1656772844564.png','$2a$10$qzDpgLA6bkWbmbeFCGC.EOC1fOA6bTCKyyeAcFEH/TDVV4XuapcGi',1),(25,'vicky121345',1212,'vicky1212@gmail.com','avatar-1656774002804.png','$2a$10$VQNuD8mTlDYWmFoRLNt8Pug/60Mag9vvBAtjkrJuot1n/t6dF9hci',1),(27,'pepecliente',123456,'pepecliente@gmail.com','avatar-1657842436214.png','$2a$10$sddXazpjmyfZD6JC8qYAWuEk9ymjs15ddh0l9ypl/lgzoeeO4Dcfy',2),(28,'matipruebadmin',12345646554,'matipruebadmin@gmail.com','avatar-1658175756242.png','$2a$10$JyhesV01In.QsGmZxrotk.dUYB/wzMjZhEXuulC.cp1yCiXXjA.FO',1),(31,'pepe1',123456,'pepe1@gmail.com','avatar-1659473154157.png','$2a$10$y.pukZIjj5ERF76agtaoLulV/N4SnixWeIucNne9cEKOsN/8w/7TO',1),(33,'juan1234',123456,'juan1@gmail.com','avatar-1660622134820.png','$2a$10$1YDYJBuMHgnPI.n./fvYX.AQd7h10xHQsKxmhgFqiblGJTMtLMZ9e',1),(34,'Juan Numero 0',353444412,'juanNumero01@gmail.com','avatarAdminUser.png','123456',1),(35,'Juan Numero 1',353444413,'juanNumero11@gmail.com','avatarAdminUser.png','123456',1),(36,'Juan Numero 3',353444415,'juanNumero31@gmail.com','avatarAdminUser.png','123456',1),(37,'Juan Numero 2',353444414,'juanNumero21@gmail.com','avatarAdminUser.png','123456',1),(38,'Juan Numero 4',353444416,'juanNumero41@gmail.com','avatarAdminUser.png','123456',1),(39,'Juan Numero 5',353444417,'juanNumero51@gmail.com','avatarAdminUser.png','123456',1),(40,'Juan Numero 6',353444418,'juanNumero61@gmail.com','avatarAdminUser.png','123456',1),(41,'Juan Numero 7',353444419,'juanNumero71@gmail.com','avatarAdminUser.png','123456',1),(42,'Juan Numero 8',353444420,'juanNumero81@gmail.com','avatarAdminUser.png','123456',1),(43,'Juan Numero 9',353444421,'juanNumero91@gmail.com','avatarAdminUser.png','123456',1),(44,'Juan Numero 10',353444422,'juanNumero101@gmail.com','avatarAdminUser.png','123456',1),(45,'Juan Numero 11',353444423,'juanNumero111@gmail.com','avatarAdminUser.png','123456',1),(46,'Juan Numero 12',353444424,'juanNumero121@gmail.com','avatarAdminUser.png','123456',1),(47,'Juan Numero 13',353444425,'juanNumero131@gmail.com','avatarAdminUser.png','123456',1),(48,'Juan Numero 14',353444426,'juanNumero141@gmail.com','avatarAdminUser.png','123456',1),(49,'Juan Numero 15',353444427,'juanNumero151@gmail.com','avatarAdminUser.png','123456',1),(50,'Juan Numero 16',353444428,'juanNumero161@gmail.com','avatarAdminUser.png','123456',1),(51,'Juan Numero 17',353444429,'juanNumero171@gmail.com','avatarAdminUser.png','123456',1),(52,'Juan Numero 18',353444430,'juanNumero181@gmail.com','avatarAdminUser.png','123456',1),(53,'Juan Numero 19',353444431,'juanNumero191@gmail.com','avatarAdminUser.png','123456',1),(54,'Juan Numero 20',353444432,'juanNumero201@gmail.com','avatarAdminUser.png','123456',1),(55,'Juan Numero 21',353444433,'juanNumero211@gmail.com','avatarAdminUser.png','123456',1),(56,'Juan Numero 22',353444434,'juanNumero221@gmail.com','avatarAdminUser.png','123456',1),(57,'Juan Numero 23',353444435,'juanNumero231@gmail.com','avatarAdminUser.png','123456',1),(58,'Juan Numero 24',353444436,'juanNumero241@gmail.com','avatarAdminUser.png','123456',1),(59,'Juan Numero 25',353444437,'juanNumero251@gmail.com','avatarAdminUser.png','123456',1),(60,'Juan Numero 26',353444438,'juanNumero261@gmail.com','avatarAdminUser.png','123456',1),(61,'Juan Numero 27',353444439,'juanNumero271@gmail.com','avatarAdminUser.png','123456',1),(62,'Juan Numero 28',353444440,'juanNumero281@gmail.com','avatarAdminUser.png','123456',1),(63,'Juan Numero 29',353444441,'juanNumero291@gmail.com','avatarAdminUser.png','123456',1),(64,'Juan Numero 30',353444442,'juanNumero301@gmail.com','avatarAdminUser.png','123456',1),(65,'Juan Numero 31',353444443,'juanNumero311@gmail.com','avatarAdminUser.png','123456',1),(66,'Juan Numero 32',353444444,'juanNumero321@gmail.com','avatarAdminUser.png','123456',1),(67,'Juan Numero 33',353444445,'juanNumero331@gmail.com','avatarAdminUser.png','123456',1),(68,'Juan Numero 34',353444446,'juanNumero341@gmail.com','avatarAdminUser.png','123456',1),(69,'Juan Numero 35',353444447,'juanNumero351@gmail.com','avatarAdminUser.png','123456',1),(70,'Juan Numero 36',353444448,'juanNumero361@gmail.com','avatarAdminUser.png','123456',1),(71,'Juan Numero 37',353444449,'juanNumero371@gmail.com','avatarAdminUser.png','123456',1),(72,'Juan Numero 38',353444450,'juanNumero381@gmail.com','avatarAdminUser.png','123456',1),(73,'Juan Numero 39',353444451,'juanNumero391@gmail.com','avatarAdminUser.png','123456',1),(74,'Juan Numero 40',353444452,'juanNumero401@gmail.com','avatarAdminUser.png','123456',1),(75,'Juan Numero 41',353444453,'juanNumero411@gmail.com','avatarAdminUser.png','123456',1),(76,'Juan Numero 42',353444454,'juanNumero421@gmail.com','avatarAdminUser.png','123456',1),(77,'Juan Numero 43',353444455,'juanNumero431@gmail.com','avatarAdminUser.png','123456',1),(78,'Juan Numero 44',353444456,'juanNumero441@gmail.com','avatarAdminUser.png','123456',1),(79,'Juan Numero 45',353444457,'juanNumero451@gmail.com','avatarAdminUser.png','123456',1),(80,'Juan Numero 46',353444458,'juanNumero461@gmail.com','avatarAdminUser.png','123456',1),(81,'Juan Numero 47',353444459,'juanNumero471@gmail.com','avatarAdminUser.png','123456',1),(82,'Juan Numero 48',353444460,'juanNumero481@gmail.com','avatarAdminUser.png','123456',1),(83,'Juan Numero 49',353444461,'juanNumero491@gmail.com','avatarAdminUser.png','123456',1),(84,'Juan Numero 50',353444462,'juanNumero501@gmail.com','avatarAdminUser.png','123456',1);
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

-- Dump completed on 2022-08-16  1:01:10
