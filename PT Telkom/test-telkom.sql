-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 07, 2021 at 04:10 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test-telkom`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`cart_id`, `product_id`, `user_id`, `quantity`) VALUES
(2, 9, 1, 2),
(3, 10, 1, 2),
(4, 5, 2, 3),
(5, 1, 2, 2),
(7, 8, 1, 2),
(9, 13, 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_city` varchar(100) NOT NULL,
  `product_price` int(100) NOT NULL,
  `product_image` varchar(100) NOT NULL,
  `product_cerated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `product_updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `user_id`, `product_name`, `product_city`, `product_price`, `product_image`, `product_cerated_at`, `product_updated_at`) VALUES
(1, 1, 'Tv', 'Tangerang', 2000000, '2021-08-05T17-03-24.511Z25231.png', '2021-08-05 17:03:24', NULL),
(3, 1, 'Laptop', 'Tangerang Selatan', 6000000, '2021-08-06T08-14-18.251Zbannerm.jpg', '2021-08-06 08:14:18', NULL),
(4, 1, 'HP', 'Jakarta', 3000000, '2021-08-06T08-14-56.974Zimage-1.png', '2021-08-06 08:14:56', NULL),
(5, 1, 'Kulkas', 'Jakarta Selatan', 4500000, '2021-08-06T08-15-26.757Zimage-1.png', '2021-08-06 08:15:26', NULL),
(6, 2, 'Pintu', 'Jakarta Pusat', 1500000, '2021-08-06T08-16-30.718Zclarity_warning-standard-solid.png', '2021-08-06 08:16:30', NULL),
(9, 3, 'Kompor Gas', 'Bekasi', 1500000, '2021-08-06T13-41-17.042Zimage-1.png', '2021-08-06 08:21:17', NULL),
(10, 4, 'Kompor Gas', 'Bekasi', 1500000, '2021-08-06T13-47-23.492Zimage-1.png', '2021-08-06 13:46:52', NULL),
(13, 5, 'Kompor', 'Bekasi', 1500000, '', '2021-08-06 14:02:23', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_email`, `user_name`, `user_password`) VALUES
(1, 'asd@gmail.com', 'Rifqi Ziyad Imtinan', '$2b$10$jcRMqWWd.J5x7/olpp.9bulUY.QSPMLc0FmAkeDsmKMD3JXMBRRMa'),
(2, 'admin@gmail.com', 'admin', '$2b$10$KbuPGdQPrvK745UEu6Leg.0cKQIajilG/HqGkoIoSnsoYcLYOM2i2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
