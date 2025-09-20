🩺 HealthMate Frontend

HealthMate is a healthcare management web app designed to help users track health goals, consult doctors, manage appointments, and monitor wellness metrics — all in one place.

This is the frontend (React) part of the project.

🚀 Features

🔐 Authentication (Sign up & Login with JWT)

📊 Dashboard with:

Consult Doctor

Check Symptoms

Appointments

My Wallet

Nearby Clinics

Health Goals & progress tracking

👤 User Profile (editable profile info)

🤖 Chatbot assistant for quick help

📰 Health News & Tips sections

📱 Responsive & mobile-friendly UI

🛠️ Tech Stack

React.js (Frontend framework)

React Router DOM (Navigation)

Lucide React (Icons)

Bootstrap Icons (UI icons)

CSS3 (Custom styles)

Session Storage (Temporary auth storage)

📂 Project Structure
frontend/
│── public/            # Static files (index.html, favicon, etc.)
│── src/
│   ├── assets/        # Images, logos, icons
│   ├── components/    # Reusable UI components
│   ├── pages/         # Full pages (Dashboard, Profile, Login, etc.)
│   ├── styles/        # CSS files for styling
│   ├── utils/         # API + Auth helpers
│   ├── App.jsx        # App routes
│   └── main.jsx       # Entry point
│── package.json       # Dependencies
│── README.md          # Project info

⚙️ Installation & Setup

Clone the repo:

git clone https://github.com/your-username/healthmate-frontend.git
cd healthmate-frontend


Install dependencies:

npm install


Start development server:

npm run dev

🔑 Environment Variables

Create a .env file in the root of your frontend project:

VITE_API_URL=http://localhost:3000/api


This should point to your backend API.

📸 Screenshots (optional)

(Add some screenshots of your dashboard, login page, and profile here)

📌 Roadmap

 Profile editing functionality

 Dark mode toggle

 Notifications system

 PWA support for offline use

🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

📜 License

MIT License © 2025 HealthMate