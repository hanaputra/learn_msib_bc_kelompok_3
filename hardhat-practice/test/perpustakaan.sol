// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Library {
    address public admin;

    struct Book {
        string isbn;
        string title;
        uint256 year;
        string author;
    }

    mapping(string => Book) public books;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function addBook(string memory _isbn, string memory _title, uint256 _year, string memory _author) public onlyAdmin {
        require(bytes(books[_isbn].isbn).length == 0, "Book with ISBN already exists");
        Book memory newBook = Book(_isbn, _title, _year, _author);
        books[_isbn] = newBook;
    }

    function updateBook(string memory _isbn, string memory _title, uint256 _year, string memory _author) public onlyAdmin {
        require(bytes(books[_isbn].isbn).length > 0, "Book with ISBN does not exist");
        books[_isbn] = Book(_isbn, _title, _year, _author);
    }

    function removeBook(string memory _isbn) public onlyAdmin {
        require(bytes(books[_isbn].isbn).length > 0, "Book with ISBN does not exist");
        delete books[_isbn];
    }

    function getBook(string memory _isbn) public view returns (string memory, string memory, uint256, string memory) {
        require(bytes(books[_isbn].isbn).length > 0, "Book with ISBN does not exist");
        return (books[_isbn].isbn, books[_isbn].title, books[_isbn].year, books[_isbn].author);
    }
}
