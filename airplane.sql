-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Nov 22. 10:54
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `airplane`
--
CREATE DATABASE IF NOT EXISTS `airplane` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `airplane`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `airplanes`
--

CREATE TABLE `airplanes` (
  `airplane_id` int(5) NOT NULL,
  `airplane_name` varchar(50) DEFAULT NULL,
  `propulsion` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `courses`
--

CREATE TABLE `courses` (
  `course_id` int(5) NOT NULL,
  `course_name` varchar(100) NOT NULL,
  `user_id` int(5) DEFAULT NULL,
  `airplane_id` int(5) DEFAULT NULL,
  `instructor` varchar(100) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `course_fee` int(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `user_id` int(5) NOT NULL,
  `course_id` int(5) DEFAULT NULL,
  `user_name` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `mothers_name` varchar(100) DEFAULT NULL,
  `address` varchar(150) DEFAULT NULL,
  `birth_day` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users_courses`
--

CREATE TABLE `users_courses` (
  `user_id` int(5) DEFAULT NULL,
  `course_id` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `airplanes`
--
ALTER TABLE `airplanes`
  ADD PRIMARY KEY (`airplane_id`);

--
-- A tábla indexei `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`course_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `airplane_id` (`airplane_id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `course_id` (`course_id`);

--
-- A tábla indexei `users_courses`
--
ALTER TABLE `users_courses`
  ADD KEY `fk_courseid` (`course_id`),
  ADD KEY `fk_userid` (`user_id`);

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `fk_airplaneid` FOREIGN KEY (`airplane_id`) REFERENCES `airplanes` (`airplane_id`);

--
-- Megkötések a táblához `users_courses`
--
ALTER TABLE `users_courses`
  ADD CONSTRAINT `fk_courseid` FOREIGN KEY (`course_id`) REFERENCES `users` (`course_id`),
  ADD CONSTRAINT `fk_userid` FOREIGN KEY (`user_id`) REFERENCES `courses` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
