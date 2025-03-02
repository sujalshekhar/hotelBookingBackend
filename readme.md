# 🚀 Node.js Sequelize Project Setup

This project is a **Node.js** backend using **Sequelize ORM** with support for repository-service pattern, and database migrations.

## 📂 Project Structure

```
/src
│── /config            # Database & environment configurations
│── /controllers       # Request handlers
│── /migrations        # Database migrations
│── /models           # Sequelize models
│── /repositories      # Data access layer
│── /routes           # API routes
│── /seeders          # Seeder files for sample data
│── /services         # Business logic layer
│── /validations      # Request validations
│── index.js        # Server entry point
│── .env.example     # Environment variable template
│── package.json     # Project dependencies & scripts
```

---

## ⚙️ Prerequisites  
Ensure you have the following installed:  
- **Node.js** (v16 or later)  
- **NPM** (or **Yarn**)  
- **PostgreSQL / MySQL / MSSQL** (Ensure the DB is running)  
- **Sequelize CLI** (`npx sequelize-cli`)  

---

## 🚀 Setup Instructions  

### **1️⃣ Clone the Repository**  
```sh
git clone <your-repo-url>
cd your-project
```

### **2️⃣ Install Dependencies**  
```sh
npm install
```

### **3️⃣ Configure Environment Variables**  
1. Copy `.env.example` to `.env`:  
   ```sh
   cp .env.example .env
   ```
2. Update `.env` with your database credentials:  
   ```ini
   DB_USERNAME=your-db-user
   DB_PASSWORD=your-db-password
   DB_NAME=your-db-name
   DB_HOST=127.0.0.1
   DB_DIALECT=postgres # or mysql, mssql
   ```

---

## 🔧 Database Setup  

### **4️⃣ Create Database**  
```sh
npx sequelize-cli db:create
```

### **5️⃣ Run Migrations**  
```sh
npx sequelize-cli db:migrate
```

### **6️⃣ Seed Sample Data (Optional)**  
```sh
npx sequelize-cli db:seed:all
```

---

## ▶️ Running the Server  
```sh
npm start
```
or  
```sh
node src/index.js
```

The API will be available at `http://localhost:3000/`

---

## 🎯 API Versioning  
This project supports multiple API versions:  

| Version | Base URL |
|---------|----------|
| **v1**  | `/api/v1/` |
| **v2**  | `/api/v2/` |

Example routes:  
- `GET /api/v1/users`  
- `POST /api/v2/products`  

---

## 🛠️ Running Migrations & Seeders  

### **Rollback Last Migration**  
```sh
npx sequelize-cli db:migrate:undo
```

### **Undo All Migrations**  
```sh
npx sequelize-cli db:migrate:undo:all
```

### **Undo Seeders**  
```sh
npx sequelize-cli db:seed:undo --seed <seed-file-name>
```

---

## 🐳 Docker Support (Optional)  
If you want to run the database inside a Docker container, you can use:  

```sh
docker-compose up -d
```
Ensure you have a `docker-compose.yml` file configured.  

---

## 📜 License  
This project is licensed under the **MIT License**.  

---

### 🎉 Now you're all set! Happy coding! 🚀

