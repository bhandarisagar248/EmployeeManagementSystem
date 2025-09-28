# 🧑‍💼 Employee Management System

A full-featured **Employee Management System** built using **Spring Boot**, **MySQL**, **JPA**, and **Java BCrypt**. This system allows users to perform CRUD operations on employee data and supports secure user registration and login using password hashing.

---

## 🚀 Features

- 🔐 User Signup & Login (Secure with BCrypt password hashing)
- ➕ Add new employees
- 📝 Update employee details (name, email, phone)
- ❌ Delete employees
- 📃 View all employees
- 📦 Backend built with Spring Boot & JPA
- 🗃️ Data stored in MySQL database

---

## 🛠️ Technologies Used

| Technology    | Description                     |
|---------------|---------------------------------|
| Spring Boot   | Backend framework               |
| Spring Data JPA | ORM layer for database operations |
| MySQL         | Relational database             |
| Java BCrypt   | Password hashing and security   |
| Maven         | Project build tool              |
| Lombok        | Reduces boilerplate code        |

---

## 🏗️ Project Structure

employee-management-system/
│
├── src/
│   └── main/
│       ├── java/
│       │   └── com/example/employee/
│       │       ├── controller/                # Handles incoming HTTP requests
│       │       ├── model/                     # Contains entity classes
│       │       ├── repository/                # JPA repositories for DB access
│       │       ├── service/                   # Business logic layer
│       │       ├── security/                  # Security config and auth logic
│       │       └── EmployeeManagementApplication.java  # Main application class
│       │
│       └── resources/
│           ├── application.properties         # Spring Boot application configs
│           └── static/                        # Static files (if needed for UI)
│
├── pom.xml                                     # Maven configuration file
└── README.md                                   # Project documentation


---

## 📦 Installation & Setup

### Prerequisites:

- Java 17 or higher
- Maven
- MySQL Server

### Steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/employee-management-system.git
   cd employee-management-system

