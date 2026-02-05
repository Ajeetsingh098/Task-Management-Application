# Task-Management-Application


 A high-performance, full-stack Task Management tool designed to help users organize their daily workflow. This application features a secure user authentication system and a complete CRUD interface for task    handling.

 Live Demo:  [task-management-application-1-a5pl.onrender.com](https://task-management-application-1-a5pl.onrender.com/)

<img width="1912" height="999" alt="Screenshot 2026-02-05 161628" src="https://github.com/user-attachments/assets/ae39bf48-1d2c-4377-8751-362745587abc" />
 <img width="1905" height="938" alt="Screenshot 2026-02-05 161442" src="https://github.com/user-attachments/assets/df08eba0-190f-4404-9827-279c46c25006" />
<img width="1913" height="1029" alt="Screenshot 2026-02-05 161557" src="https://github.com/user-attachments/assets/ad485c60-ec95-4f51-baa5-3f93c3f6801c" />



 Core Features:-

 
                     Full CRUD Functionality:  Create, view, edit, and delete tasks with real-time updates.

                     Secure Authentication:  User registration and login powered by JWT (JSON Web Tokens) and protected routes.

                     Persistent Storage:  Tasks are stored securely in the database and linked specifically to the authenticated user.

                     Responsive Dashboard:  A modern, mobile-friendly UI built with Tailwind CSS.

                     Protected API Endpoints:  Backend routes are shielded to ensure only authorized users can access or modify their data.


 Tech Stack:-

   
                     Frontend:   React.js,Tailwind CSS (Styling),React Router (Navigation & Protected Routes)

                     Backend:    Node.js & Express.js

                     JWT (Authentication)

                      MongoDB (Database)
                      

 Architecture:-

 
                   The app uses a decoupled architecture where the React frontend communicates with the Express backend via RESTful API calls.

                   Client: Handles user interactions and stores the JWT in local storage or cookies.

                   Middleware: A custom auth middleware on the backend verifies the token before allowing access to task routes.

                   Database: Stores user credentials (hashed) and task objects.
                   

 Project Structure:-
 

                        Task-Management-
                                       Application/
                                     
                                       ├── Backend/            # Express server & Auth middleware
                                       │   ├── controllers/    # Task & User logic
                                       │   ├── routes/         # Protected API endpoints
                                       │   └── models/         # MongoDB schemas
                                       ├── Frontend/           # React components & State logic
                                       │   ├── src/components/ # UI elements
                                       │   └── src/context/    # Auth state management
                                       └── README.md
 
 Getting Started
 
                   Clone the repo:

                                      Bash
                                       git clone https://github.com/Ajeetsingh098/Task-Management-Application.git
                                       
Install Dependencies:


                       For Backend: cd Backend && npm install

                       For Frontend: cd Frontend && npm install

                        Environment Variables: Create a .env file in the Backend folder and add:



Code snippet

                       PORT=5000
                       MONGO_URI=your_mongodb_uri
                      JWT_SECRET=your_secret_key
                      Run the App:
                      Backend: npm start
                      Frontend: npm run dev
                      


Author

               Ajeet Singh
