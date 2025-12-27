# System Architecture

The system follows a client-server architecture:

- Frontend (React): User interface
- Backend (Node.js + Express): Business logic and APIs
- Database (PostgreSQL): Stores tenant-specific data
- Docker: Containerizes services

Flow:
User → Frontend → Backend API → Database
