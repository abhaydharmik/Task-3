# Task-3


## 📚 Book List REST API

A simple REST API built with Node.js and Express to manage a list of books in memory. It supports all basic CRUD operations: Create, Read, Update, and Delete.

## 🚀 Features

- View all books (`GET /books`)

- Add a new book (`POST /books`)

- Update a book by ID (`PUT /books/:id`)

- Delete a book by ID (`DELETE /books/:id`)

## 🛠️ Technologies Used

- Node.js

- Express.js

- Postman (for testing)


## 📦 Installation


```shell
# Clone the repository or download the code:
git clone <your-repo-url>
cd book-api

# Initialize the project and install dependencies:
npm init -y
npm install express

# Run the server:
node index.js

# The server will start at:
http://localhost:3000
```


## 📘 API Endpoints
### ✅ Get all books
- __URL:__ `/books`

- __Method:__ `GET`

- __Response:__ Array of book objects

### ✅ Add a new book
- __URL:__ `/books`

- __Method:__ `POST`

- __Body:__
```shell
{
  "id": 1,
  "title": "Never Never",
  "author": "Colleen Hoover and Tarryn Fisher"
}

```

- __Response:__ Created book object

### ✅ Update a book by ID
- __URL:__ `/books/:id`

_e.g. /books/1_

- __Method:__ `PUT`

```shell
{
  "id": 1,
  "title": "Never Never",
  "author": "Colleen Hoover and Tarryn Fisher"
}
```

- __Response:__ Created book object

### ✅ Delete a book by ID
- __URL:__ `/books/:id` - 
`e.g. /books/1`

- __Method:__ `DELETE`

- __Response:__ Deleted book object

```shell
{
    "error": "Book not found "
}
```
