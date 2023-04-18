#Documentação Listta VIP


Resumo Executivo
O projeto consiste em uma plataforma web que permite o cadastro e verificação de identidade de usuários, categorização e venda de produtos, criação de contas bancárias virtuais, realização de pagamentos, promoções e realização de pedidos em um local físico. O objetivo é conectar clientes e profissionais, oferecendo vantagens para que ambos consumam pelo aplicativo e marquem encontros no local físico do administrador (pub), aumentando assim as vendas. A plataforma conta com diferentes tipos de usuários cadastrados: administrador, clientes, profissionais e funcionários, que possuem diferentes permissões e funcionalidades. A tecnologia utilizada no projeto inclui JavaScript, Node.js, React.js e PostgreSQL, além de dependências externas como Axios, JsonWebToken, Bcryptjs, Cors, Dotenv, Express e Helmet.

Introdução
Esta documentação tem como objetivo apresentar informações sobre a plataforma de vendas "Assim Chamaremos o Projeto", que é um sistema que permite o cadastro de usuários, venda de produtos e realização de pedidos. A plataforma foi desenvolvida utilizando JavaScript, Node.js, React.js e PostgreSQL.

Objetivo Final do Projeto
O objetivo final da plataforma é permitir a venda de produtos pelos usuários, com destaque para os produtos dos usuários pagantes, que terão seus produtos exibidos no topo da lista algumas vezes por dia de acordo com o plano. Além disso, a plataforma possibilita a realização de promoções para chamar clientes para o local físico do administrador, que se trata de um pub, onde o administrador ganha com a consumação no local.


#Front-end do Projeto Lista VIP


Este projeto é responsável pela parte do front-end da plataforma de vendas Lista VIP. Ele foi desenvolvido utilizando React.js.

Dependências Externas Utilizadas
O projeto utiliza as seguintes dependências externas:

@emotion/react: ^11.10.6
@emotion/styled: ^11.10.6
@mui/icons-material: ^5.11.16
@mui/material: ^5.11.15
@vitejs/plugin-react: ^3.1.0
axios: ^0.24.0
react: ^18.2.0
react-dom: ^18.2.0
react-google-recaptcha: ^2.1.0
react-router-dom: ^6.2.2
vite: ^4.1.0

# acompanhantes-back
Back-end do Projeto Lista VIP
Este projeto é responsável pela parte do back-end da plataforma de vendas Lista VIP. Ele foi desenvolvido utilizando Node.js e o banco de dados PostgreSQL.

Dependências Externas Utilizadas
O projeto utiliza as seguintes dependências externas:

bcryptjs: ^2.4.3
cors: ^2.8.5
dotenv: ^10.4.0
express: ^4.17.2
helmet: ^4.6.0
jsonwebtoken: ^8.5.1
pg: ^8.7.1
sequelize: ^6.6.5

TABELAS CRIADAS USANDO O  POSTGRES

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  birthdate DATE,
  phone VARCHAR(20),
  email VARCHAR(255) UNIQUE NOT NULL,
  category VARCHAR(50),
  password VARCHAR(255) NOT NULL,
  confirm_password VARCHAR(255) NOT NULL,
  address TEXT,
  credits INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  plan VARCHAR(255),
  image_url VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  category_id INTEGER REFERENCES categories(id)
);

CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  image_url VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS accounts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  balance DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  deposit_pending DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  deposit_confirmed DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  bonus DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  last_deposit TIMESTAMP,
  last_withdrawal TIMESTAMP,
  last_bonus TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP,
  deleted BOOLEAN NOT NULL DEFAULT FALSE,
  transfer_history JSONB
);
