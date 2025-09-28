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
│ ├── main/
│ │ ├── java/com/example/employee/
│ │ │ ├── controller/
│ │ │ ├── model/
│ │ │ ├── repository/
│ │ │ ├── service/
│ │ │ ├── security/
│ │ │ └── EmployeeManagementApplication.java
│ │ └── resources/
│ │ ├── application.properties
│ │ └── static/
│
├── pom.xml
└── README.md

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

