# teadusflow-frontend
This repository contains the teadusflow application frontend code. Adding from my local system to git.

**Full-Stack Internship — Mentor / Trainer Guide**

**Project 01**: Secure User Registration & Login System

**Methodology:** Progressive Learning by Building 

**Target:** B.Tech Final-Year Students 

**Real-World Example**
Use a familiar application:
```text
User opens website
      ↓
Frontend renders UI
      ↓
User submits login
      ↓
API receives request
      ↓
Backend validates credentials
      ↓
Database provides user data
      ↓
Backend responds
      ↓
Frontend displays dashboard

Task 1 - Front end application
- Create Registration page with validations
- Create Login page with valdiations

**TASK 2  — Express Setup:**
**Introduce HTTP servers and REST APIs.**

Client
 ↓ HTTP
Express
 ↓
Route
 ↓
Controller

Explain

**HTTP methods:**
GET
POST
PUT
PATCH
DELETE

**Real-World Mapping**

POST /users

means create.

GET /users/123

means retrieve.

Checkpoint

**Students create:**

GET /api/v1/health

and explain why health checks are useful.

TASK 3 — Backend Architecture

Explain

Routes
 ↓
Controllers
 ↓
Services
 ↓
Repositories
 ↓
Database

Responsibilities

Route:

Where does the request go?

Controller:

What request/response handling is required?

Service:

What business logic is required?

Repository:

How do we access data?

Ask

"Where should password hashing happen?"

Expected:

Service or dedicated security utility, not inside the route definition.

