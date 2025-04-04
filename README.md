# Grocery Store Management System

A full-stack grocery store management system built using the MERN stack, featuring Stripe integration for payments and authentication for clerks.

## Features

- **Inventory Management**: Add, update, and delete products.
- **Sales Tracking**: Monitor daily, weekly, and monthly sales.
- **Clerk Authentication**: Secure login system for clerks to manage operations.
- **Payment Integration**: Seamless payment processing using Stripe.
- **User-Friendly Interface**: Intuitive design for easy navigation.

## Technologies Used

### Frontend
- React.js
- Redux (for state management)
- Tailwind CSS / Material-UI (or your preferred styling library)

### Backend
- Node.js
- Express.js

### Database
- MongoDB (with Mongoose for schema modeling)

### Payment Integration
- Stripe API

### Authentication
- Clerk 
- bcrypt.js (for password hashing)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Grocary_Store.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Grocary_Store
   ```

3. Install dependencies for both the backend and frontend:
   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Frontend:
     ```bash
     cd ../frontend
     npm install
     ```


     ```

4. Start the development servers:
   - Backend:
     ```bash
     cd backend
     npm run dev
     ```
   - Frontend:
     ```bash
     cd ../frontend
     npm start
     ```

5. Access the application:
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:3000`

## Usage

1. **Clerk Authentication**: Log in with your credentials to access the dashboard.
2. **Manage Inventory**: Add, update, or delete products.
3. **Process Payments**: Use Stripe for secure payment processing.
4. **Track Sales**: View detailed sales reports.

## Folder Structure

```
Grocary_Store/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── App.js
└── README.md
```

## Contributing

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any inquiries, please contact [gourabofficial702@gmail.com].