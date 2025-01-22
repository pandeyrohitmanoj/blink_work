
Steps to run the project:

1. create .env files oto both sub folders: backend, frontend
2. content for backend .env:
DB_NAME=db_name
DB_HOST='host_name'
DB_USER=user_name_for_db
DB_PASSWORD='user_password'
DB_PORT=port_number
DB_SERVICE='postgres://db_user_name@db_host:DB_PORT/db_user?sslmode=require'
PORT=8000

3. Content for frontend .env:
NEXT_PUBLIC_BACKEND=http://localhost:8000

4. open the project from the root folder in vs code i.e. blin_work folder, and make sure you have Node.js  insalled and configured.

5. For starting backend in from the root folder type command:
cd backend 
npm i 
npm start

6. For starting frontend in from the root folder type command:
cd frontend
npm i
npm run build & npm start
