-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 26, 2025 at 06:14 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventory`
--

-- --------------------------------------------------------

--
-- Table structure for table `beverage_stock`
--

CREATE TABLE `beverage_stock` (
  `id` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Stock_Level` varchar(50) NOT NULL,
  `Units` varchar(50) NOT NULL,
  `Price` varchar(50) NOT NULL,
  `Supplier` varchar(50) NOT NULL,
  `Category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `beverage_stock`
--

INSERT INTO `beverage_stock` (`id`, `Name`, `Stock_Level`, `Units`, `Price`, `Supplier`, `Category`) VALUES
(2, 'Calamansi Juice', '12', 'liters', '45', 'Fresh Calamansi Supply', 'Local Juices'),
(3, 'Halo-Halo', '15', 'servings', '180', 'Coca-cola InHouse Preparations', 'Local Dessert'),
(4, 'Iced Tea', '15', 'liters', '35', 'Local Blend Supplier', 'Tea Drinks'),
(5, 'Mango Shake', '10', 'liters', '85', 'Tropiko Flavors', 'Juices/Shakes'),
(6, 'Orange Juice', '10', 'liters', '60', 'Del Monte Philippines', 'Juices'),
(7, 'Softdrinks-assorted', '100', 'bottles', '25', 'Coca-cola Beverages PH', 'Soft Drinks'),
(8, 'Water', '200', 'bottles', '15', 'Wilkins/Natures Springs', 'Water'),
(10, 'Buko Juice', '15', 'Bottle', '50', 'Tropicool Buko Supply', 'Local Juices');

-- --------------------------------------------------------

--
-- Table structure for table `ingredient_stock`
--

CREATE TABLE `ingredient_stock` (
  `id` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Stock_Level` varchar(50) NOT NULL,
  `Units` varchar(50) NOT NULL,
  `Price` varchar(50) NOT NULL,
  `Supplier` varchar(50) NOT NULL,
  `Category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ingredient_stock`
--

INSERT INTO `ingredient_stock` (`id`, `Name`, `Stock_Level`, `Units`, `Price`, `Supplier`, `Category`) VALUES
(3, 'Chicken Wings', '50', 'Kg', '220', 'Farm Fresh Meats', 'Meat'),
(4, 'Flour', '50', 'Kg', '25', 'Golden Grains Corp', 'Dry Goods'),
(5, 'Lemon Pepper', '2', 'Kg', '35', 'Spice House', 'Spices'),
(6, 'Oil', '15', 'Liter', '45', 'Kitchen Essentials', 'Condiments'),
(7, 'Potatoes', '40', 'Kg', '80', 'Fresh Harvest', 'Vegetables'),
(8, 'Salt', '10', 'Kg', '10', 'Pure Salt Traders', 'Spices'),
(9, 'Seasoning', '30', 'Kg', '50', 'Flavor Burst Co.', 'Spices');

-- --------------------------------------------------------

--
-- Table structure for table `non_food_consumable_stock`
--

CREATE TABLE `non_food_consumable_stock` (
  `id` int(11) NOT NULL,
  `Name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Stock_Level` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Units` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Price` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Supplier` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Category` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `non_food_consumable_stock`
--

INSERT INTO `non_food_consumable_stock` (`id`, `Name`, `Stock_Level`, `Units`, `Price`, `Supplier`, `Category`) VALUES
(1, 'Alcohol', '30', 'bottles', '45', 'MedGuard PH', 'Sanitation'),
(2, 'Cooking Gas-LPG Type', '10', 'tanks', '850', 'GasHub', 'Kitchen Utilities'),
(3, 'Dishwashing Liquid-3L', '20', 'gallons', '100', 'Clean Wave PH', 'Cleaning Supplies'),
(4, 'Garbage Bags-XL', '200', 'pieces', '3.50', 'EcoWaste Suppliers', 'Sanitation'),
(5, 'Latex Gloves', '25', 'boxes', '120', 'MedServe PH', 'Kitchen Sanitation'),
(6, 'Liquid Hand Soap', '15', 'bottles', '65', 'Hygiene Pro', 'Cleaning Supplies'),
(7, 'Napkins-100', '40', 'packs', '35', 'CleanServe PH', 'Dining Supplies'),
(8, 'Scrub Pads', '50', 'pieces', '12', 'Kitchen Pro', 'Cleaning Supplies'),
(9, 'Tissue Paper-Rolls', '100', 'rolls', '20', 'Paper Goods Inc.', 'Restroom Supplies');

-- --------------------------------------------------------

--
-- Table structure for table `packaging_supplies_stock`
--

CREATE TABLE `packaging_supplies_stock` (
  `id` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Stock_Level` varchar(50) NOT NULL,
  `Units` varchar(50) NOT NULL,
  `Price` varchar(50) NOT NULL,
  `Supplier` varchar(50) NOT NULL,
  `Category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `packaging_supplies_stock`
--

INSERT INTO `packaging_supplies_stock` (`id`, `Name`, `Stock_Level`, `Units`, `Price`, `Supplier`, `Category`) VALUES
(1, 'Aluminum Foil', '25', 'rolls', '85.50 Php', 'KitchenPro Distributes', 'Kitchen Supplies'),
(2, 'Napkins/100 packs', '30', 'packs', '35.00 Php', 'Clean Serve PH.', 'Supplies/Dining'),
(3, 'Paper Bags/Medium', '200', 'pieces', '2.50 Php', 'EcoPack PH', 'Packaging'),
(4, 'Plastic Cups', '250', 'pieces', '1.80 Php', 'DeliPack', 'Beverage Packaging'),
(5, 'Plastic Food Container', '300', 'pieces', '4.50 Php', 'Manila Packaging Company', 'Packaging'),
(6, 'Plastic Gloves/packs', '40', 'boxes', '120.00 Php', 'MedServe PH', 'Sanitation'),
(7, 'Plastic Utensil Sets', '400', 'sets', '1.00 Php', 'Utensil Supplies Depot', 'Supplies-Utensils'),
(8, 'Sauce Cups', '500', 'pieces', '0.60 Php', 'PackRight Supplies', 'Condiment Packaging'),
(9, 'Take Out Meals Boxes-Biodegradable', '180', 'pieces', '5.00 Php', 'Green Wrap Solutions', 'Packaging');


CREATE TABLE products (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `image` VARCHAR(255) NULL,
  `name` VARCHAR(100) NOT NULL,
  `category` VARCHAR(50),
  `price` DECIMAL(10, 2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE products_availability (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `small` INT NOT NULL,
  `medium` INT NOT NULL,
  `large` INT NOT NULL,
  FOREIGN KEY (`id`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `products` (`id`, `image`, `name`, `category`, `price`) VALUES
(1, '/icons/chicken/Fried Chicken Wings 1.png', 'Fried Chicken Wings', 'chicken', 120.00),
(2, '/icons/chicken/Baked Buffalo Wings 1.png', 'Baked Buffalo Wings', 'chicken', 150.00),
(3, '/icons/chicken/BBQ Chicken Wings 1.png', 'BBQ Chicken Wings', 'chicken', 150.00),
(4, '/icons/chicken/Dry Rub Chicken Wings 1.png', 'Dry Rub Chicken Wings', 'chicken', 150.00),
(5, '/icons/chicken/Honey-Sriracha Chicken Wings 1.png', 'Honey-Sriracha Chicken Wings', 'chicken', 160.00),
(6, '/icons/chicken/Lemon Pepper Wings 1.png', 'Lemon Pepper Chicken Wings', 'chicken', 150.00),
(7, '/icons/fries/Cheese Fries 1.png', 'Cheese Fries', 'fries', 110.00),
(8, '/icons/fries/Belgian Fries 1.png', 'Belgian Fries', 'fries', 90.00),
(9, '/icons/fries/Garlic Fries 1.png', 'Garlic Fries', 'fries', 100.00),
(10, '/icons/fries/Standard Cut 1.png', 'Standard Cut', 'fries', 70.00),
(11, '/icons/fries/Sweet Potato Fries 1.png', 'Sweet Potato Fries', 'fries', 75.00),
(12, '/icons/fries/Truffle Fries 1.png', 'Truffle Fries', 'fries', 160.00),
(13, '/icons/pizza/Ham & Cheese 1.png', 'Ham & Cheese', 'pizza', 70.00),
(14, '/icons/pizza/Hawaiian Pizza 1.png', 'Hawaiian', 'pizza', 80.00),
(15, '/icons/pizza/Vegetarian Pizza 1.png', 'Vegetarian', 'pizza', 80.00),
(16, '/icons/pizza/Pepperoni Pizza 1.png', 'Peperoni', 'pizza', 85.00),
(17, '/icons/pizza/Tomato And Olive 1.png', 'Tomato & Olive', 'pizza', 90.00),
(18, '/icons/pizza/Pacific Veggie 1.png', 'Pacific Veggie', 'pizza', 100.00),
(19, '/icons/drinks/Water Bottle 1.png', 'Bottled Water', 'drinks', 20.00),
(20, '/icons/drinks/Coke 1.png', 'Coke (1.5L)', 'drinks', 120.00),
(21, '/icons/drinks/Ice Tea 1.png', 'Ice Tea (1.5L)', 'drinks', 110.00),
(22, '/icons/drinks/Orange Juice 1.png', 'Orange Juice (1L)', 'drinks', 75.00),
(23, '/icons/drinks/Sprite 1.png', 'Sprite (1.5L)', 'drinks', 120.00),
(24, '/icons/drinks/Sprite Zero 1.png', 'Sprite Zero', 'drinks', 35.00);

INSERT INTO `products_availability` (`id`, `small`, `medium`, `large`) VALUES
(1, 10, 10, 10),
(2, 10, 10, 10),
(3, 10, 10, 10),
(4, 10, 10, 10),
(5, 10, 10, 10),
(6, 10, 10, 10),
(7, 10, 10, 10),
(8, 10, 10, 10),
(9, 10, 10, 10),
(10, 10, 10, 10),
(11, 10, 10, 10),
(12, 10, 10, 10),
(13, 10, 10, 10),
(14, 10, 10, 10),
(15, 10, 10, 10),
(16, 10, 10, 10),
(17, 10, 10, 10),
(18, 10, 10, 10),
(19, 10, 10, 10),
(20, 10, 10, 10),
(21, 10, 10, 10),
(22, 10, 10, 10),
(23, 10, 10, 10),
(24, 10, 10, 10);

CREATE TABLE orders (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `order_type` ENUM('dine-in', 'take-out') DEFAULT 'dine-in',
  `total_amount` DECIMAL(10,2) DEFAULT 0.00,
  `payment_method` ENUM('cash', 'gcash', 'card') DEFAULT 'cash',
  `order_time` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE order_items (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `order_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  `size` ENUM('S', 'M', 'L') DEFAULT 'S',
  `price` DECIMAL(10,2), -- unit price after size multiplier
  FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


--
-- Indexes for dumped tables
--

--
-- Indexes for table `beverage_stock`
--
ALTER TABLE `beverage_stock`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ingredient_stock`
--
ALTER TABLE `ingredient_stock`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `non_food_consumable_stock`
--
ALTER TABLE `non_food_consumable_stock`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `packaging_supplies_stock`
--
ALTER TABLE `packaging_supplies_stock`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `beverage_stock`
--
ALTER TABLE `beverage_stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `ingredient_stock`
--
ALTER TABLE `ingredient_stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `non_food_consumable_stock`
--
ALTER TABLE `non_food_consumable_stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `packaging_supplies_stock`
--
ALTER TABLE `packaging_supplies_stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
