# AuraLux Jewelry Store

![AuraLux Logo](frontend/src/Assets/logo.svg)

AuraLux is a full-featured e-commerce platform specializing in jewelry. Built using the MERN stack (MongoDB, Express, React, Node.js), it offers an elegant, responsive interface for users to browse, filter, and purchase high-quality jewelry, including Rings, Necklaces, Earrings, Bracelets, and Packs.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Sign up, login, and logout functionality using JWT for security.
- **Product Categories**: Users can browse products by category (Rings, Necklaces, Earrings, etc.).
- **Cart Management**: Users can add items to the cart and view the total number of items in the cart.
- **Responsive Design**: The site is fully responsive, ensuring an optimal shopping experience on mobile, tablet, and desktop.
- **Dynamic Filtering**: Category filtering allows users to browse products easily.
- **Order Processing**: Basic checkout functionality (in progress).
- **Admin Dashboard**: A secured area for admins to manage products and categories (in progress).

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using Mongoose ORM)
- **Authentication**: JSON Web Tokens (JWT)
- **State Management**: React Context API

## Installation

To get started with AuraLux, follow the steps below:

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/BKaoukine/AuraLux_store.git
   cd AuraLux_store
   ```
2. Install dependencies for both frontend and backend:

   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Create a .env file in the backend directory:

   ```bash
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
   ```

4. Run the development servers:

   ```bash
    # Run the backend (in backend directory)
    npm run dev

    # Run the frontend (in frontend directory)
    npm start
   ```

5. Open the app at http://localhost:3000.

## Usage

Once the app is running locally, you can:

- **Browse products**: Navigate through different product categories using the navbar.
- **Add items to the cart**: Select products and add them to the cart.
- **User Authentication**: Sign up or log in to manage your account.
- **Admin Features**: Manage product listings from a dashboard.

## API Endpoints

The following are the main API routes used by AuraLux:

**Authentication**

- POST /api/auth/signup: Register a new user
- POST /api/auth/login: Authenticate and log in a user
  **Products**
- GET /api/products: Retrieve all products
- GET /api/products/:id: Retrieve product by ID
  **Cart (Context-Based)**
- Add items to cart, manage items in cart, and view the number of items using the React Context API.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature`').
4. Push to the branch (`git push origin feature-branch`).
5. Create a new pull request.

## License

This project is part of the `ALX SE` program and was created for it. Feel free to use it for learning purposes.
