-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 15-Abr-2019 às 02:10
-- Versão do servidor: 5.7.21-log
-- versão do PHP: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clientes`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `usuario` varchar(64) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `rg` varchar(13) NOT NULL,
  `data_nasc` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `tel1` varchar(15) NOT NULL,
  `tel2` varchar(15) NOT NULL,
  `tel3` varchar(15) NOT NULL,
  `tel4` varchar(15) NOT NULL,
  `nivel` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `cliente`
--

INSERT INTO `cliente` (`id`, `nome`, `usuario`, `senha`, `cpf`, `rg`, `data_nasc`, `email`, `tel1`, `tel2`, `tel3`, `tel4`, `nivel`) VALUES
(1, 'Hudson Libério Leão', 'hudsonliberio', '202cb962ac59075b964b07152d234b70', '111.111.111-10', 'MG-11.111.110', '1995-08-28', 'hudsonleaoti@gmail.com', '(37) 99985-5488', '', '', '(37) 3234-2380', 3),
(2, 'Usuário Administrador', 'admin', '202cb962ac59075b964b07152d234b70', '111.111.111-11', 'MG-11.111.111', '1995-08-28', 'hudson@gmail.com', '(37) 99999-9999', '', '', '', 2),
(3, 'Usuário Super Admin', 'superadmin', '202cb962ac59075b964b07152d234b70', '111.111.111-12', 'MG-11.111.112', '1994-08-11', 'superadmin@gmail.com', '(37) 99999-9992', '', '', '', 3),
(4, 'Usuário Normal', 'normal', '202cb962ac59075b964b07152d234b70', '111.111.111-12', 'MG-11.111.113', '1995-08-28', 'normal@gmail.com', '(99) 99999-9993', '', '', '', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
