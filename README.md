# Hospital-Management-System-Backend

This repository contains the backend for a Hospital Management System Web Application, built using the **MERN** (MongoDB, Express, React, Node.js) stack. The backend provides APIs for managing doctor and patient data, handling appointments, user authentication, and other functionality needed for a smooth appointment booking experience.

## Features

- **User Authentication:** Secure login and registration for patients and doctors.
- **Doctor Management:** Add and manage doctor profiles and their specialties.
- **Appointment Booking:** Allows patients to book, view, and cancel appointments with doctors.
- **Department Management:** Organizes doctors by departments for easy appointment filtering.
- **Data Validation and Error Handling:** Ensures data integrity and provides informative error messages.
- **JWT Authentication:** Secures endpoints with JSON Web Tokens.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: NoSQL database to store doctors, patients, and appointments data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **JWT**: JSON Web Tokens for secure authentication.
- **bcrypt**: For password hashing.
- **dotenv**: For managing environment variables.
- **cookie-parser**: Parses cookies to help in authentication.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/firdoush01/Hospital-Management-System-Backend.git
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following keys:

   ```plaintext
   PORT=4000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=7d
   COOKIE_EXPIRES=7
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

   The backend should now be running on `http://localhost:4000`.


## License

This project is licensed under the MIT License.

---

Feel free to contribute to this project or report any issues.
