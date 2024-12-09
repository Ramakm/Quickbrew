# Project Setup and Instructions

This project is divided into two parts: **Frontend** and **Backend**. Follow the steps below to set up and run the project.

## Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **npm** or **yarn**

## Project Structure

```plaintext
project-root/
├── frontend/    # React frontend application
├── backend/     # Express backend application
```

## Setup Instructions

### 1. Cloning the Repository

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Installing Dependencies

**For the Frontend:**

1. Open a terminal.
2. Change directory to the `frontend` folder:

   ```bash
   cd frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

**For the Backend:**

1. Open another terminal.
2. Change directory to the `backend` folder:

   ```bash
   cd backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### 3. Running the Applications

**To Run the Frontend:**

1. In the terminal for the `frontend` folder, start the development server:

   ```bash
   npm run dev
   ```

2. The frontend application should now be running on `http://localhost:3000` (or another port specified in the terminal).

**To Run the Backend:**

1. In the terminal for the `backend` folder, start the server:

   ```bash
   npm run dev
   ```

2. The backend application should now be running on `http://localhost:5000` (or another port specified in the terminal).

### Notes

- Make sure both the frontend and backend servers are running simultaneously for the project to work properly.
- Update environment variables in the `.env` file inside the `backend` folder as needed.
