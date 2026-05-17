# Flow Order

A modern point-of-sale (POS) application built with React and Tailwind CSS, designed for speed and ease of use. This application allows cashiers to quickly add items, manage quantities, and finalize orders, while keeping a clear, real-time view of the current cart.

## Features

- **Category Navigation**: Quickly filter products by category using the sidebar.
- **Smart Search**: Find products instantly with intelligent search that matches names, categories, and codes.
- **Real-time Cart**: Add, update, and remove items from the cart with instant visual feedback.
- **Persistent Cart**: Cart data is saved to `localStorage`, so your order isn't lost if you refresh the page.
- **Responsive Design**: Optimized for use on tablets, large phones, and desktops.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18 or higher.
- **npm**: Version 9 or higher (usually comes with Node.js).

## Getting Started

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd flow-order
    ```

2. **Install Dependencies**

    Install both the backend and frontend dependencies:

    ```bash
    # Install backend dependencies
    cd backend
    npm install
    
    # Go back to root and install frontend dependencies
    cd ..
    cd frontend
    npm install
    ```

3. **Start the Application**

    You can run both the backend and frontend in one go using `docker-compose`.

    ```bash
    # Start the application
    docker-compose up --build
    ```

    You can seed the database with categories by running the following command:

    ```bash
    docker exec <container_id> npm run seed
    ```

    Alternatively, you can start them separately:

    ```bash
    # Start backend in one terminal
    cd backend
    npm run dev
    
    # Start frontend in another terminal
    cd frontend
    npm run dev
    ```

    The frontend will be available at `http://localhost:5173`.

## File Structure

- **`src/components/`**: Reusable UI components (Buttons, Modals, Grids).
- **`src/pages/`**: Main pages of the application (Products, Checkout).
- **`src/layouts/`**: Layout components (Sidebar, Header).
- **`src/context/`**: React Context for state management (CartContext, ProductContext).
- **`src/data/`**: Mock data for testing and development.
