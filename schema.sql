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
