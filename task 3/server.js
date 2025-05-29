const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // middleware for JSON

let books = []
let id = 1;

// GET Request for get all books
app.get('/books', (req, res) => {
    res.json(books);
})

// POST Request for Add a new books
app.post('/books', (req, res) => {

    const {title, author} = req.body

    if(!title || !author){
        return res.status(400).json({error: "Title and Author are required!!"})
    }

    const bookDetails = {
        id: id++,
        title,
        author
    }

    books.push(bookDetails)
    res.status(201).json(bookDetails);
})

// PUT Request for Update a book by ID
app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id)
    const {title, author} = req.body

    const book = books.find(b => b.id === bookId)

    if(!book){
        return res.status(404).json({error: "Book not found"})
    }

    if(title) book.title = title;
    if(author) book.author = author;

    res.json(book);
})


// DELETE Request for Delete a book by ID
app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id)
    const index = books.findIndex(b => b.id === bookId)

    if(index === -1){
        return res.status(404).json({error: "Book not found " })
    }

    const deleteBook = books.splice(index , 1)
    res.json(deleteBook[0])
})


// Start Express Server
app.listen(port, () => {
    console.log(`Server is running now at http://localhost:${port}`)
})