CREATE TABLE users (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
phone INT NOT NULL,
email VARCHAR(100) NOT NULL,
avatar VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL,
category_id INT NOT NULL
);
ALTER TABLE `pet_shop`.`users` 
ADD UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE;
;
CREATE TABLE `pet_shop`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE);
  CREATE TABLE `pet_shop`.`products` (
  `id` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  `price` INT NOT NULL,
  `packaging` INT NOT NULL,
  `amount` INT NOT NULL,
  `image` VARCHAR(100) NOT NULL,
  `section_id` INT NOT NULL,
  `stock_id` INT NOT NULL,
  PRIMARY KEY (`id`));
  CREATE TABLE `pet_shop`.`section` (
  `category_id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`category_id`));
  CREATE TABLE `pet_shop`.`stock` (
  `id` INT UNSIGNED NOT NULL,
  `product_id` INT NOT NULL,
  `amount` INT NOT NULL,
  PRIMARY KEY (`id`));
  CREATE TABLE `pet_shop`.`user_product` (
  `id` INT UNSIGNED NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`));
  