-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 28, 2021 at 02:24 PM
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
-- Database: `test-case-group-chat`
--

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `chat_id` int(11) NOT NULL,
  `room_chat_name` varchar(100) NOT NULL,
  `room_chat_number` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `message` varchar(255) NOT NULL,
  `chat_created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`chat_id`, `room_chat_name`, `room_chat_number`, `user_id`, `message`, `chat_created_at`) VALUES
(1, 'group asd', 2323, 2, 'hai', '2021-07-28 00:45:04'),
(2, 'group asd', 2323, 2, 'hai', '2021-07-28 00:46:27'),
(3, 'group asd', 2323, 2, 'hai2323', '2021-07-28 00:46:30'),
(4, 'group rifqi', 2323, 2, 'hai2323', '2021-07-28 02:34:25'),
(5, 'Group zxczx', 66290, 2, 'tes', '2021-07-28 07:48:45'),
(6, 'Group zxczx', 66290, 2, 'a', '2021-07-28 07:49:21'),
(7, 'Group zxczx', 66290, 2, 'tes', '2021-07-28 07:50:04'),
(8, 'Group zxczx', 66290, 2, 'apa', '2021-07-28 07:50:07'),
(9, 'Group zxczx', 66290, 2, 'oh', '2021-07-28 07:50:09'),
(10, 'Group zxczx', 66290, 3, 'halo', '2021-07-28 07:59:04'),
(11, 'Group zxczx', 66290, 1, 'apaan', '2021-07-28 07:59:18'),
(12, 'Group zxczx', 66290, 2, 'lagi apa', '2021-07-28 07:59:42'),
(13, 'Group zxczx', 66290, 2, 'gpp', '2021-07-28 07:59:55'),
(14, 'Group zxczx', 66290, 1, 'woy', '2021-07-28 08:00:22'),
(15, 'Group zxczx', 66290, 1, 'asd', '2021-07-28 08:00:24'),
(16, 'Group zxczx', 66290, 3, 'sa', '2021-07-28 08:00:48'),
(17, 'Group zxczx', 66290, 2, 'ya', '2021-07-28 08:00:54'),
(18, 'Group zxczx', 66290, 1, 'apa', '2021-07-28 08:05:03'),
(19, 'Group zxczx', 66290, 1, 'w', '2021-07-28 08:05:07'),
(20, 'Group zxczx', 66290, 1, 'apa', '2021-07-28 08:05:14'),
(21, 'Group zxczx', 66290, 3, 'apa', '2021-07-28 08:06:10'),
(22, 'tes112', 41650, 1, 'hai', '2021-07-28 09:04:20'),
(23, 'tes112', 41650, 1, 'apa kabar', '2021-07-28 09:04:23'),
(24, 'asdsadsa', 97464, 2, 'asdasd', '2021-07-28 09:34:44'),
(25, 'bkasa', 70496, 2, 'wooy', '2021-07-28 09:34:47'),
(26, 'asasd', 90870, 2, 'apa', '2021-07-28 09:34:50'),
(27, 'Group zxczx', 2323, 1, 'apa', '2021-07-28 10:15:23'),
(28, 'Group zxczx', 2323, 3, 'iya', '2021-07-28 10:16:14'),
(29, 'Group zxczx', 2323, 1, 'knpa', '2021-07-28 10:16:19'),
(30, 'Group zxczx', 2323, 2, 'tes', '2021-07-28 10:25:23'),
(31, 'Group zxczx', 2323, 1, 'woy', '2021-07-28 10:27:58'),
(32, 'Group zxczx', 2323, 2, 'woy', '2021-07-28 10:31:49'),
(33, 'Group zxczx', 2323, 2, 'tes', '2021-07-28 10:32:11'),
(34, 'Group zxczx', 2323, 2, 'as', '2021-07-28 10:32:59'),
(35, 'Group zxczx', 2323, 3, 'w', '2021-07-28 10:33:07'),
(36, 'Group zxczx', 2323, 2, '123', '2021-07-28 10:33:26'),
(37, 'Group zxczx', 2323, 1, 'asd', '2021-07-28 10:33:34'),
(38, 'tes 2123', 10742, 3, 'apa', '2021-07-28 10:36:48'),
(39, 'tes 2123', 10742, 2, 'kga', '2021-07-28 10:36:53');

-- --------------------------------------------------------

--
-- Table structure for table `room_chat`
--

CREATE TABLE `room_chat` (
  `room_chat_id` int(11) NOT NULL,
  `room_chat_name` varchar(100) NOT NULL,
  `room_chat_number` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `room_chat_created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `room_chat`
--

INSERT INTO `room_chat` (`room_chat_id`, `room_chat_name`, `room_chat_number`, `user_id`, `room_chat_created_at`) VALUES
(14, 'Group zxczx', 2323, 2, '2021-07-28 10:06:54'),
(15, 'Group zxczx', 2323, 1, '2021-07-28 10:14:03'),
(16, 'Group zxczx', 2323, 3, '2021-07-28 10:16:04'),
(18, 'tes 2123', 10742, 3, '2021-07-28 10:35:46'),
(20, 'asds', 10007, 2, '2021-07-28 10:57:36'),
(21, 'wasasa', 28644, 2, '2021-07-28 10:57:49'),
(22, 'tes', 39585, 1, '2021-07-28 10:59:23'),
(25, 'waas', 24620, 1, '2021-07-28 11:00:43');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(100) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `user_created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_password`, `user_created_at`) VALUES
(1, 'rifqi', 'rifqiimtinan@gmail.com', 'asd', '2021-07-27 13:46:26'),
(2, 'timo', 'timo@gmail.com', 'asd', '2021-07-27 14:54:15'),
(3, 'teguh', 'teguh@gmail.com', 'asd', '2021-07-27 14:54:19'),
(4, 'alfin', 'alfin@gmail.com', 'asd', '2021-07-27 14:54:26'),
(5, 'ricky', 'ricky@gmail.com', 'asd', '2021-07-27 14:54:35'),
(6, 'elaz', 'elaz@gmail.com', 'asd', '2021-07-27 14:54:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`chat_id`);

--
-- Indexes for table `room_chat`
--
ALTER TABLE `room_chat`
  ADD PRIMARY KEY (`room_chat_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `chat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `room_chat`
--
ALTER TABLE `room_chat`
  MODIFY `room_chat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
