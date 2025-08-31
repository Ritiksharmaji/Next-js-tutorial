## ------- Next JS tutorial in Hindi #45 How to use MongoDB atlas _ Next.js 13.4 ------
1) ![alt text](image.png)
2) now we need to login in mongoDb atlas and create a new Project
3) ![alt text](image-1.png)
4) ![alt text](image-2.png)
5) ![alt text](image-3.png)
6) ![alt text](image-4.png)
7) ![alt text](image-5.png)
8) password: mongoDb@123 and userName: ritiksharma555598_db_user
9) ![alt text](image-6.png)
10) ![alt text](image-7.png)
11) ![alt text](image-8.png)
12) ![alt text](image-9.png)
13) ![alt text](image-10.png)
14) url: mongodb+srv://ritiksharma555598_db_user:mongoDb@123@cluster0.4tta9ri.mongodb.net/
15) 

## ----------- Next JS tutorial in Hindi #46 Connect MongoDB and Next.js 13.4 ---------
1) ![alt text](image-11.png)
2) create a .env.local file and store the username and password
3) create a connection file from which we can connect the MongoDb to our application for that create a lib folder inside of src folder and in that folder create a file as db.js
4) before write the connect code we should to decide which method we we are going to coonect either using npm install mongodb or npm install mongoose, mongoose has more and good feacture as compare to mongodb, so for that  install the mongoose by write the command as npm install mongoose
5) MONGODB_URI=mongodb+srv://ritiksharma555598_db_user:mongoDb%40123@cluster0.4tta9ri.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 
6) in the above url there is no any db name so when we run the application then it will create a test db and do the operation in that but if we specify the db name as: MONGODB_URI=mongodb+srv://ritiksharma555598_db_user:mongoDb%40123@cluster0.4tta9ri.mongodb.net/productsDB?retryWrites=true&w=majority&appName=Cluster0
 => then it will work in that db either anything operation get, post,put and delete ...
7) ![alt text](image-12.png)
8) ![alt text](image-13.png)

