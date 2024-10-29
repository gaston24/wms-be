# WMS-BE Project

This project is a Node.js application that uses Express.js, Sequelize as an ORM, and MySQL with Docker.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v16 or higher)
- [Docker](https://www.docker.com/get-started)
- [Git](https://git-scm.com/)

## Getting Started

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/wms-be.git
cd wms-be

# Install dependencies
npm install

# ask for .env file

# run docker
docker-compose up -d

# run migrations
npm migrate-run

# run seeders
npm seed-run

# start app
npm run dev


