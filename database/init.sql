CREATE TABLE tenants (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  max_users INT DEFAULT 5,
  max_projects INT DEFAULT 5
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  tenant_id INT REFERENCES tenants(id),
  email TEXT UNIQUE,
  password TEXT,
  role TEXT
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  tenant_id INT REFERENCES tenants(id),
  name TEXT
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  project_id INT REFERENCES projects(id),
  title TEXT,
  status TEXT
);

-- Seed Data
INSERT INTO tenants (name) VALUES ('Demo Tenant');

INSERT INTO users (tenant_id, email, password, role)
VALUES
(1, 'super@admin.com', '$2b$10$hash', 'super_admin'),
(1, 'admin@tenant.com', '$2b$10$hash', 'tenant_admin'),
(1, 'user@tenant.com', '$2b$10$hash', 'user');

INSERT INTO projects (tenant_id, name)
VALUES (1, 'Demo Project');

INSERT INTO tasks (project_id, title, status)
VALUES (1, 'Initial Task', 'OPEN');
