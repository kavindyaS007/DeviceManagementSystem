-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2023 at 08:29 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `devicedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `device_table`
--

CREATE TABLE `device_table` (
  `device_id` int(11) NOT NULL,
  `device_model` varchar(255) NOT NULL,
  `device_name` varchar(255) NOT NULL,
  `device_status` varchar(255) NOT NULL,
  `enrolled_time` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `device_table`
--

INSERT INTO `device_table` (`device_id`, `device_model`, `device_name`, `device_status`, `enrolled_time`) VALUES
(19, 'Huawei', 'Mate X3', 'ENROLLED', '23:50:47'),
(20, 'Huawei', 'P60 Pro', 'ENROLLED', '23:51:07'),
(21, 'Samsung', 'Galaxy M62', 'ENROLLED', '23:51:53'),
(22, 'Samsung', 'Galaxy M54', 'ENROLLED', '23:52:28'),
(23, 'Nokia', 'C32', 'INACTIVE', '23:53:26'),
(24, 'Nokia', 'C200', 'ACTIVE', '23:53:53'),
(25, 'Apple', 'iPhone 14', 'INACTIVE', '23:54:20'),
(26, 'Apple', 'iPhone 8', 'ACTIVE', '23:54:49'),
(27, 'HTC', 'Desire 20+', 'ENROLLED', '23:55:32'),
(28, 'HTC', 'Desire 22 Pro', 'ACTIVE', '23:58:00'),
(29, 'HTC', 'Wildfire X', 'INACTIVE', '23:56:13'),
(30, 'Sony', 'Xperia 5 IV', 'INACTIVE', '23:57:02'),
(31, 'Sony', 'Xperia 1 IV', 'ENROLLED', '23:57:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `device_table`
--
ALTER TABLE `device_table`
  ADD PRIMARY KEY (`device_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `device_table`
--
ALTER TABLE `device_table`
  MODIFY `device_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
