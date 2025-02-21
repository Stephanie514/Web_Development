# Personal Book Tracker

An interactive web application built with **React, Node.js, and MongoDB** to help users search, add, and track books while setting and managing their reading goals.

## 🚀 Features

- **Book Search** – Find books easily using a search bar.
- **Add Books** – Save books to your personal reading list.
- **Numbered Book List** – Books appear in an ordered list.
- **Reading Goals** – Set and track reading goals for motivation.
- **User-Friendly Interface** – Styled with a visually appealing theme.
- **Real-Time UI Updates** – Books disappear from search results after adding.
- **Database Storage** – MongoDB stores books and user goals.
- **Hover Effects & Animations** – Enhances user experience.
- **Mobile-Responsive** – Works across different devices.

---

## 🛠 Tech Stack

### **Frontend:**
- **React.js** – UI framework
- **CSS & Tailwind** – Styling and layout
- **Axios** – Fetching data from the backend
- **Framer Motion** – Animations and hover effects

### **Backend:**
- **Node.js & Express.js** – Server-side logic
- **MongoDB & Mongoose** – Database and schema management
- **RESTful API** – Handles book search, addition, and goal management


---

## 🔧 Installation & Setup

Follow these steps to run the project locally:

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Stephanie514/Web_Development.git
cd Book-Tracker
```

### **2️⃣ Install Dependencies**
```sh
# Install frontend dependencies
cd Frontend
cd my-app
npm install

# Install backend dependencies
cd Backend
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the `server` directory and add:
```env
MONGO_URI=your_mongodb_connection_string
API_KEY=your_google_books_api_key
```

### **4️⃣ Start the Application**
```sh
# Start the backend server
cd Backend
npm start

# Start the frontend
cd Frontend
cd my-app
npm start
```

The app will be available at `http://localhost:3000`.

---

## 🚀 Deployment Guide

### **📌 Deploy Backend on Render**
1. Push your backend code to GitHub.
2. Go to [Render](https://render.com/) and create a new Web Service.
3. Connect your repository and set the start command to `npm start`.
4. Add environment variables (MongoDB URI, JWT Secret, etc.).
5. Click **Deploy**.

### **📌 Deploy Frontend on Vercel**
1. Push your frontend code to GitHub.
2. Sign in to [Vercel](https://vercel.com/).
3. Click **New Project** and import your repository.
4. Click **Deploy**.

Your site will be live at `https://your-app.vercel.app/`.

---

## 🎯 Future Improvements

- **Dark Mode Toggle** – User preference for light/dark themes.
- **Progress Tracker** – Track reading completion visually.
- **User Profiles** – Customize personal library experience.
- **Book Recommendations** – AI-powered suggestions.
- **Cloud Storage** – Sync reading goals across devices.

---

## 🤝 Contributing

Want to contribute? Follow these steps:

1. **Fork the repository**
2. **Create a new branch** (`feature-branch`)
3. **Make your changes & commit**
4. **Push your changes** and open a **pull request**

---

## 👨‍💻 Author

📌 **Stephanie**  
🔗 GitHub: [Stephanie514](https://github.com/Stephanie514)  

💡 Built with passion for book lovers! 📚🚀