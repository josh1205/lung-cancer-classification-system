# Lung Cancer Classification System

A comprehensive web-based healthcare application that enables medical professionals to upload CT scans and receive AI-powered lung cancer stage classifications using deep learning technology.

## 🩺 Overview

This system provides a user-friendly interface for doctors and nurses to manage patient CT scans and receive automated lung cancer diagnosis powered by a VGG16 convolutional neural network. The application features role-based access control with different interfaces for medical professionals and administrators

**HIPAA Compliance**: NO HIPPA Complience. This was a senior project where all documents were publicly released anonymously .

## ✨ Features

### 🏥 Medical Professional Features
- **Role-based Authentication**: Login interface for doctors, nurses and admins
- **CT Scan Management**: Upload, view, and manage patient CT scan images
- **AI-Powered Diagnosis**: Automated lung cancer stage classification using VGG16 neural network
- **Patient Dashboard**: Comprehensive view of patient records and scan results
- **Secure File Storage**: HIPAA-compliant storage and retrieval of medical images

### 👨‍💼 Administrative Features
- **User Management**: Add, edit, and delete user accounts
- **Role Assignment**: Assign and manage doctor/nurse roles
- **Admin Dashboard**: Overview of system usage and user activity
- **Access Control**: Manage permissions and system security

### 🤖 AI Classification Features
- **VGG16 Neural Network**: Deep learning model for accurate lung cancer detection
- **Stage Classification**: Automated determination of cancer progression stages
- **Real-time Processing**: Fast analysis and results delivery
- **High Accuracy**: Trained model for reliable medical diagnosis support

## 🛠️ Technology Stack

### Frontend
- **React 18.2** - Modern JavaScript framework for building user interfaces
- **React Router DOM** - Client-side routing and navigation
- **React Bootstrap** - Responsive UI components and styling
- **Bootstrap 5.2** - CSS framework for responsive design
- **Animate.css** - CSS animations and transitions
- **React Bootstrap Icons** - Icon library for UI elements

### Backend & AI
- **Python** - Primary language for machine learning backend
- **TensorFlow** - Deep learning framework for VGG16 model
- **VGG16 CNN** - Convolutional Neural Network for image classification
- **Node.js** - Server runtime environment

### Database & Authentication
- **Firebase Authentication** - Secure user authentication and authorization
- **Cloud Firestore** - NoSQL database for user and patient data
- **Firebase Storage** - Cloud storage for CT scan images
- **Role-based Access Control** - Secure permission management

### Development Tools
- **React Scripts** - Build tools and development server
- **Jest** - Testing framework
- **ESLint** - Code linting and quality assurance

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Python 3.8+
- Firebase project setup
- TensorFlow installation

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/josh1205/lung-cancer-classification-system.git
   cd lung-cancer-classification-system
   ```

2. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the client directory:
   ```env
   REACT_APP_API_KEY=your_firebase_api_key
   REACT_APP_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_PROJECT_ID=your_firebase_project_id
   REACT_APP_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_APP_ID=your_firebase_app_id
   ```

4. **Set up Python backend**
   ```bash
   cd ../backend
   pip install tensorflow numpy pillow flask
   ```

5. **Configure Firebase**
   - Create a Firebase project
   - Enable Authentication (Email/Password)
   - Set up Cloud Firestore
   - Configure Firebase Storage
   - Add your web app configuration

### Running the Application

1. **Start the frontend**
   ```bash
   cd client
   npm start
   ```
   The application will run on `http://localhost:3000`

2. **Start the backend server**
   ```bash
   cd backend
   python app.py
   ```

## 📋 Usage

### For Medical Professionals

1. **Sign In**: Use your credentials to access the system
2. **Upload CT Scans**: Navigate to the upload section and select patient CT images
3. **View Results**: Review AI-generated lung cancer stage classifications
4. **Manage Patients**: Access patient records and historical scan data
5. **Contact Patients**: Communicate diagnosis results securely

### For Administrators

1. **Admin Dashboard**: Access comprehensive system overview
2. **User Management**: Add new doctors and nurses to the system
3. **Role Assignment**: Manage user permissions and access levels
4. **System Monitoring**: Track usage and performance metrics

## 🏗️ Architecture

```
├── Frontend (React)
│   ├── User Authentication
│   ├── Role-based Routing
│   ├── File Upload Interface
│   └── Results Dashboard
│
├── Backend (Python + TensorFlow)
│   ├── VGG16 Neural Network
│   ├── Image Processing
│   └── Classification API
│
└── Database (Firebase)
    ├── User Management
    ├── Patient Records
    └── Image Storage
```

## 🔒 Security Features

- **Firebase Authentication**: Secure user login and session management
- **Role-based Access Control**: Different permissions for doctors, nurses, and admins
- **Encrypted Storage**: Protected storage of sensitive medical images
- **Input Validation**: Comprehensive validation of uploaded files and user inputs