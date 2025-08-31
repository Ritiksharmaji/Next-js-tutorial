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



## -------------- Next JS tutorial in Hindi #47 POST API with MongoDB in  Next.js 13.4 -----
1) ![alt text](image-14.png)
2) 
- request: http://localhost:3000/products
- ✅ Example POST Request Body (product creation)
```
{
  "name": "iPhone 15 Pro",
  "comapny": "Apple",
  "color": "Titanium Blue with red",
  "description": "Latest Apple flagship with A18 chip",
  "price": 80000,
  "category": "electronics",
  "image": "https://example.com/iphone16.jpg",
  "stock": 40
}


``` 
- respose:
```
{
    "message": "✅ Product created successfully",
    "product": {
        "name": "iPhone 15 Pro",
        "comapny": "Apple",
        "color": "Titanium Blue with red",
        "description": "Latest Apple flagship with A18 chip",
        "price": 80000,
        "category": "electronics",
        "image": "https://example.com/iphone16.jpg",
        "stock": 40,
        "_id": "68b49d5273df4cd3da2726eb",
        "createdAt": "2025-08-31T19:06:58.906Z",
        "updatedAt": "2025-08-31T19:06:58.906Z",
        "__v": 0
    }
}

## ---------- PUT --------
Got it 👍 Since your `PUT` route takes `id` from `params`, the **POST request in Postman** will target your **POST route** (`/api/products`) and send the full product data.

Here’s the correct **Postman request** for **POST (Add new product)**:

---

### 🔹 Method

```
POST
```

### 🔹 URL

```
http://localhost:3000/api/products
```

---

### 🔹 Headers

```
Content-Type: application/json
```

---

### 🔹 Body (Raw → JSON)

```json
{
  "name": "MacBook Air M3",
  "comapny": "Apple",
  "color": "Silver",
  "description": "Ultra-thin laptop with Apple M3 chip",
  "price": 1299,
  "category": "electronics",
  "image": "https://example.com/macbook-air.jpg",
  "stock": 50
}
```

---

✅ This will create a new product and save it in MongoDB.
✅ For `PUT`, you’ll use the same body format but the URL will be:

```
http://localhost:3000/api/products/<PRODUCT_ID>
```

--- Example --------
```
http://localhost:3000/products/68b49d5273df4cd3da2726eb
```
request:
```
{
  "name": "MacBook Air M3",
  "comapny": "Apple",
  "color": "Silver",
  "description": "Ultra-thin laptop with Apple M3 chip",
  "price": 1299,
  "category": "electronics",
  "image": "https://example.com/macbook-air.jpg",
  "stock": 50
}
```

response:
```
{
    "message": "✅ Product updated successfully",
    "product": {
        "_id": "68b49d5273df4cd3da2726eb",
        "name": "MacBook Air M3",
        "comapny": "Apple",
        "color": "Silver",
        "description": "Ultra-thin laptop with Apple M3 chip",
        "price": 1299,
        "category": "electronics",
        "image": "https://example.com/macbook-air.jpg",
        "stock": 50,
        "createdAt": "2025-08-31T19:06:58.906Z",
        "updatedAt": "2025-08-31T19:16:54.755Z",
        "__v": 0
    }
}
```
## ----- to get all product till Created: --------
endpoint: http://localhost:3000/products/
method: GET
resposne:
```
[
    {
        "_id": "68b45e07d1dc8e1ffde20abd",
        "name": "iPhone 16 Pro",
        "comapny": "Apple",
        "color": "Titanium Blue",
        "description": "Latest Apple flagship with A18 chip",
        "price": 1299,
        "category": "electronics",
        "image": "https://example.com/iphone16.jpg",
        "stock": 50,
        "createdAt": "2025-08-31T14:36:55.926Z",
        "updatedAt": "2025-08-31T14:36:55.926Z",
        "__v": 0
    },
    {
        "_id": "68b49d5273df4cd3da2726eb",
        "name": "MacBook Air M3",
        "comapny": "Apple",
        "color": "Silver",
        "description": "Ultra-thin laptop with Apple M3 chip",
        "price": 1299,
        "category": "electronics",
        "image": "https://example.com/macbook-air.jpg",
        "stock": 50,
        "createdAt": "2025-08-31T19:06:58.906Z",
        "updatedAt": "2025-08-31T19:16:54.755Z",
        "__v": 0
    }
]
```

## ------- DELETE Method ---

## 📌 Postman Request for DELETE

### 🔹 Method

```
DELETE
```

### 🔹 URL

```
http://localhost:3000/api/products/<PRODUCT_ID>
```

*(replace `<PRODUCT_ID>` with the actual `_id` from MongoDB)*

---

### 🔹 Headers

```
Content-Type: application/json
```

### 🔹 Body

❌ **Not required** (you just need the ID in the URL).

---

👉 This will remove the product from MongoDB and return the deleted product in response.


## ------ data after deleted in MongoDb -----

```
[
    {
        "_id": "68b45e07d1dc8e1ffde20abd",
        "name": "iPhone 16 Pro",
        "comapny": "Apple",
        "color": "Titanium Blue",
        "description": "Latest Apple flagship with A18 chip",
        "price": 1299,
        "category": "electronics",
        "image": "https://example.com/iphone16.jpg",
        "stock": 50,
        "createdAt": "2025-08-31T14:36:55.926Z",
        "updatedAt": "2025-08-31T14:36:55.926Z",
        "__v": 0
    }
]
```
