# Factorial Calculator Web App

This is a simple web application that calculates the factorial of a number using both iterative and recursive methods. It includes a frontend built with HTML, CSS, and JavaScript, and an optional backend using Node.js and Express.

## Features
- User-friendly UI for inputting a number.
- Calculates factorial using **iterative** and **recursive** methods.
- Validates input to ensure only positive integers are accepted.
- Tooltips to explain the two calculation methods.
- (Optional) Backend API for factorial calculation.
- Fully responsive design.

## Technologies Used
### **Frontend**
- HTML
- CSS
- JavaScript (ES6)
- Fetch API for backend communication

### **Backend (Optional)**
- Node.js
- Express.js
- CORS (for handling cross-origin requests)

## Installation & Setup
### **Frontend (Only)**
1. Clone the repository:
   ```bash
   git clone https://github.com/Stephanie514/Web_Development.git
   cd factorial-calculator
   ```
2. Open `index.html` in a browser.

### **Backend (Optional)**
1. Navigate to the project folder:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   node server.js
   ```
4. The server runs on **http://localhost:5000**.

## API Endpoints (Backend)
### **GET /factorial**
#### **Request Example:**
```http
GET /factorial?number=5&method=iterative
```
#### **Response Example:**
```json
{
  "number": 5,
  "method": "iterative",
  "factorial": 120
}
```

## Deployment
### **Frontend Deployment (Netlify)**
1. Push your frontend code to GitHub.
2. Go to [Netlify](https://www.netlify.com) and create a new site.
3. Connect your GitHub repository.
4. Deploy your site and get a live URL.

### **Backend Deployment (Render)**
1. Push your backend code to GitHub.
2. Go to [Render](https://render.com) and create a new **Web Service**.
3. Connect your GitHub repository.
4. Deploy and get a live API URL.

## Usage
1. Enter a **positive integer** in the input field.
2. Click **Iterative** or **Recursive** to calculate the factorial.
3. View the result displayed below.