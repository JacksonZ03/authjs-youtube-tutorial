CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TYPE AuthRole AS ENUM ('USER', 'ADMIN');

CREATE TABLE
  users (
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    name VARCHAR(255),
    email VARCHAR(255),
    "emailVerified" TIMESTAMPTZ,
    image TEXT,
    role AuthRole NOT NULL DEFAULT 'USER',
    PRIMARY KEY (id)
  );

CREATE TABLE
  accounts (
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    "userId" uuid NOT NULL,
    type VARCHAR(255) NOT NULL,
    provider VARCHAR(255) NOT NULL,
    "providerAccountId" VARCHAR(255) NOT NULL,
    refresh_token TEXT,
    access_token TEXT,
    expires_at BIGINT,
    id_token TEXT,
    scope TEXT,
    session_state TEXT,
    token_type TEXT,
    PRIMARY KEY (id)
  );

CREATE TABLE
  verification_token (
    identifier TEXT NOT NULL,
    expires TIMESTAMPTZ NOT NULL,
    token TEXT NOT NULL,
    PRIMARY KEY (identifier, token)
  );
