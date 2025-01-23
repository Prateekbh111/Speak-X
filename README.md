# QuestionSearch - Full Stack Assignment - LPU 2026

## Objective

Develop a search functionality for a questions database. This project showcases full-stack development skills with a robust backend and a responsive frontend.

## Assignment Overview

The application enables users to search through a database of questions stored in MongoDB. The backend is built using Node.js with gRPC for communication, while the frontend is a Next.js application.

## Folder Structure

```
speakx/
│-- apps/
│   ├── web/      # Next.js frontend (React.js)
│   ├── server/   # gRPC backend (Node.js)
│-- packages/
│   ├── grpc/
│       ├── a.proto # gRPC protocol definitions
```

## Key Features

### Frontend (Next.js)

- A search box to input queries
- Display a list of matching questions
- Show details such as question type and title
- Responsive and user-friendly UI
- Paginated results

### Backend (Node.js with gRPC)

- Stores JSON data in MongoDB
- Implements a gRPC search API for querying questions by title
- Supports various question types

## Setup Instructions

### Prerequisites

- Node.js
- MongoDB

### Steps to Run Locally

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd speak-x
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Setup environment variables:
   - Create a `.env` file in `speakx/apps/web` and `speakx/apps/server` with:
     ```env
     DB_NAME=<your_database_name>
     DB_URI=<your_mongodb_uri>
     NEXT_PUBLIC_GRPC_URL=<grpc_backend_url>
     ```
4. Run the project:
   ```sh
   npm run dev
   ```

### Build Project

```sh
npm run build
```
