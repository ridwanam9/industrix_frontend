# Industrix Todo App — Full Stack Engineering Challenge

A full-stack Todo Management application built for the Industrix Full Stack Engineer Intern Coding Challenge.
This project includes:

- Fully functional REST API with Express + Sequelize + PostgreSQL
- Responsive React + Ant Design frontend
- CRUD for Todos and Categories
- Search, filtering, pagination
- Complete modal forms (Add/Edit)
- Backend unit testing (Jest + Supertest)
- Clean folder structure and team-friendly setup guide

## 🚀 Features Implemented

### ✅ Todo Management

- Add/Edit/Delete todos
- Mark as completed
- Priority selector (high/medium/low)
- Due date
- Category assignment

### ✅ Category Management

- Add/Delete categories
- Color-coded categories
- Used for filtering

### ✅ Filters

- Keyword search
- Filter by status
- Filter by category
- Filter by priority

### ✅ Pagination

- Backend-driven, limit=10 per page

### ✅ Unit Tests

- CRUD Todos
- CRUD Categories

### ✅ Responsive UI

- Ant Design layout
- Adaptive grid & breakpoints
- Mobile-friendly form modals


## 📦 Tech Stack
### Frontend

- React + TypeScript
- Ant Design
- Axios
- Context API for state management

### Backend

- Express.js
- Sequelize ORM
- PostgreSQL database
- Jest + Supertest (testing)


## 🛠️ Project Setup (from zero)

This section assumes a completely new team member with 0 context.
Follow these steps exactly to run the project locally.

### 🗄️ 1. Setup Backend

```bash
git clone https://github.com/ridwanam9/industrix_backend.git
cd industrix_backend
npm install
```

#### Create PostgreSQL databases:
```bash
createdb industrix_todo
createdb industrix_todo_test
```

#### Configure database credentials

Edit /backend/config/config.json:
```json
{
  "development": {
    "username": "postgres",
    "password": "yourpassword",
    "database": "industrix_todo",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "yourpassword",
    "database": "industrix_todo_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

#### Run migrations (if using sync, skip)

```bash
npx sequelize-cli db:migrate
```

#### Start backend:
```bash
npm run dev
```

Backend runs at:

➡️ http://localhost:5000



### 💻 2. Setup Frontend
```bash
git clone https://github.com/ridwanam9/industrix_frontend.git
cd industrix_frontend
npm install
npm run dev
```

Frontend runs at:

➡️ http://localhost:5173

## ▶️ How to Run the Application

1. Start PostgreSQL

2. Start backend:
```bash
npm run dev
```

3. Start frontend:
```bash
npm run dev
```

4. pen browser:
http://localhost:5173

## 🧪 Running Tests

Backend tests use Jest + Supertest.
```bash
cd industrix_backend
npm test
```

You should see:
```bash
2 test suites passed
8 tests passed
```

## 📘 API Documentation


### Todos API
#### GET /api/todos

Query params:

- page
- search
- status
- priority
- category_id

Response:
```json
{
  "data": [...],
  "pagination": {
    "current_page": 1,
    "total": 30,
    "total_pages": 3
  }
}
```

#### POST /api/todos
```json
{
  "title": "Todo3",
  "description": "Deskripsi test",
  "priority": "high",
  "category_id": 6
}

```
Response:
```bash
{
    "id": 10,
    "title": "Todo3",
    "description": "Deskripsi test",
    "priority": "high",
    "category_id": 6,
    "updatedAt": "2025-11-20T11:30:47.064Z",
    "createdAt": "2025-11-20T11:30:47.064Z",
    "completed": false,
    "due_date": null
}
```

#### GET /api/todos/:id
Response:
```bash
{
    "id": 10,
    "title": "Todo3",
    "description": "Deskripsi test",
    "priority": "high",
    "category_id": 6,
    "updatedAt": "2025-11-20T11:30:47.064Z",
    "createdAt": "2025-11-20T11:30:47.064Z",
    "completed": false,
    "due_date": null
}
```

#### PUT /api/todos/:id
Response
```bash
{
    "id": 10,
    "title": "Todo3 update",
    "description": "Deskripsi test",
    "completed": true,
    "priority": "high",
    "due_date": null,
    "createdAt": "2025-11-20T11:30:47.064Z",
    "updatedAt": "2025-11-20T11:37:38.038Z",
    "category_id": 6
}
```

#### DELETE /api/todos/:id
Response
```bash
Todo Delete
```

#### PATCH /api/todos/:id/complete
Response
```bash
{
    "id": 10,
    "title": "Todo3",
    "description": "Deskripsi test",
    "completed": true,
    "priority": "high",
    "due_date": null,
    "createdAt": "2025-11-20T11:30:47.064Z",
    "updatedAt": "2025-11-20T11:35:40.949Z",
    "category_id": 6
}
```

### Categories API
#### GET /api/categories
```bash
[
    {
        "id": 6,
        "name": "Work",
        "color": null,
        "createdAt": "2025-11-20T05:45:03.464Z",
        "updatedAt": "2025-11-20T05:45:03.464Z"
    },
    {
        "id": 7,
        "name": "Personal",
        "color": null,
        "createdAt": "2025-11-20T05:45:13.669Z",
        "updatedAt": "2025-11-20T05:45:13.669Z"
    },
    {
        "id": 8,
        "name": "Shopping",
        "color": null,
        "createdAt": "2025-11-20T05:45:20.919Z",
        "updatedAt": "2025-11-20T05:45:20.919Z"
    }
]
```
#### POST /api/categories
```json
{
  "name": "Break",
  "color": "#3B82F6"
}
```
Response:
```json
{
    "id": 4,
    "name": "Break",
    "color": "#3B82F6",
    "updatedAt": "2025-11-20T05:14:44.677Z",
    "createdAt": "2025-11-20T05:14:44.677Z"
}
```
#### DELETE /api/categories/:id
Response
```json
Category deleted
```

## 📚 Required Technical Questions
### 📌 Database Design
### 1. What database tables did you create and why?

#### a. Categories

Fields:
- id
- name
- color

Purpose:
- To group todos visually & logically
- Used for filtering

#### b. Todos

Fields:

- title
- description
- priority
- due_date
- completed
- category_id (FK)

Purpose:

- Main entity storing user tasks

Relationships
```lua
Category 1 --- N Todo
```

Reason:
- One category can have many todos
- Todos optionally belong to a category
- Simple & scalable structure

---

### 2. Pagination & Filtering
#### Filtering Query

Example for search + priority:
```bash
where: {
  title: { [Op.iLike]: `%${search}%` },
  priority: priorityFilter || undefined,
}
```
#### Pagination Query
```bash
limit = 10
offset = (page - 1) * limit
```

Efficient because:

- Uses SQL LIMIT + OFFSET
- Only loads needed rows

#### Indexes

If this were production:
- Index on title (text search)
- Index on category_id
- Index on priority


## 📌 Technical Decisions
### 1. Responsive Design

Breakpoints:

- ***<600px*** mobile
- ***<900px*** tablet
- ***>900px*** desktop

Tools:

- Ant Design Grid (Row, Col)
- Responsive modal sizes
- Flex-wrap filter bar

UI adapts by:

- Filters stacking on mobile
- List items collapsing into vertical layout
- Modal width auto-adjusting

### 2. Component Structure
```bash
src/
  components/
    TodoList.tsx
    TodoForm.tsx
    CategoryForm.tsx
  context/
    TodoContext.tsx
    CategoryContext.tsx
  pages/
    Home.tsx
```

State Management:

- Context API
- Pagination + Filters stored in TodoContext
- Components subscribe as needed

Filtering logic centralized → consistent across app.

### 3. Backend Architecture

Structure:
```bash
routes/
controllers/
models/
server.js
app.js
```

- Routes define endpoints
- Controllers contain logic
- Models represent DB tables
- app.js enables testing
- server.js only starts server

#### Error Handling:
```bash
try {
  ...
} catch (err) {
  res.status(500).send(err.message);
}
```

Consistent: All controllers use try/catch.

---

### 4. Data Validation

Validation applied:

#### Frontend:

- Required fields in form
- Priority must be (high/medium/low)
- Category must exist

#### Backend:

Sequelize model-level validation
(e.g., ENUM values)

Reason:

- Two-layer validation prevents corrupted data
- Frontend prevents user error
- Backend enforces integrity



## 📌 Testing & Quality
### 1. What did you choose to test?

We tested the most critical parts:

#### ✔ CRUD for Todos

- create
- list
- update
- toggle complete
- delete

#### ✔ CRUD for Categories

Reason:
These endpoints represent the core functionality & highest risk for bugs.

#### Edge cases:

- Todo not found
- Category not found
- Invalid update
- Empty list

#### Test Structure:

- Fresh database for each suite (sync({ force: true }))
- Supertest to hit API
- Jest assertions for response shape

### 2. If you had more time, what would you improve?
#### Technical debt:

- Add service layer to decouple controller logic
- Global error handler
- Schema validation (Zod/Yup/Joi)

#### Features:

- User authentication
- Drag-and-drop ordering
- Category color picker
- Multi-delete todos

#### Refactor:

- Move filtering logic into separate utility
- Add caching for GET todos