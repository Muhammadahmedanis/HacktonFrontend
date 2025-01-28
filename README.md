
# Beneficiary Management System
MERN Beneficiary Management System is a comprehensive web application designed to streamline the process of handling beneficiary requests, token management, and status tracking. It involves four main stakeholders: User, Receptionist, Department Staff, and Admin.

## Features

- **User:** The applicant who seeks assistance through the system by filling out a registration form.

- **Receptionist:**  Generates a unique token for the applicant's registration and assigns it to the relevant department for further processing. The receptionist also monitors and updates the status of the applicant's query (whether completed or rejected).

- **Department Staff:** Accesses the token and resolves the applicant's query, providing feedback on whether the issue has been resolved or rejected.

- **Admin:** Has access to all the activities within the system. Admin can view comprehensive data on the number of beneficiaries served today, track how many queries have been completed or rejected, and visualize the information through charts and tables for easy analysis.

## Technology Used

- Frontend: React, TailwindCSS
- Database: MongoDB
- Backend: Node.js, Express.js

## Repository

#### [GitHub Repository](https://github.com/Muhammadahmedanis/HacktonFrontend)

## Installation and Setup

##### To run the project locally, follow these steps:

  1. Clone the Frontend Repository:
```bash
  git clone https://github.com/Muhammadahmedanis/HacktonFrontend.git
```
```bash
  cd Frontend
```

 2. install dependencies for Frontend
```bash
  npm install
```

  3. Clone the Backend Repository:
```bash
  git clone https://github.com/Muhammadahmedanis/HackthonBackend.git
```
```bash
  cd Backend
```

 4. install dependencies for Brontend
```bash
  npm install
```

 5. Set up Environment Variables:
- Create a .env file based on env.example and configure database connection details, JWT secret, etc.

 6. Start the Application:
  - Start the backend:
```bash
  cd .\backend\
  npm run dev
```
  - Start the frontend:
```bash
  cd .\frontend\
  npm run dev
```

 7. ** Access the Application: ** Open http://localhost:5173 in your browser.

## Contribution

#### Contributions are welcome! Please fork this repository and submit a pull request with your enhancements or fixes.
