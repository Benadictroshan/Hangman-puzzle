const wordList = [
    {
        word: "python",
        hint: "A high-level, interpreted programming language known for its readability and versatility."
    },
    {
        word: "variable",
        hint: "A named location in memory used to store data that can be changed during program execution."
    },
    {
        word: "function",
        hint: "A block of code designed to perform a particular task when called."
    },
    {
        word: "loop",
        hint: "A programming structure that repeats a block of code multiple times."
    },
    {
        word: "conditional",
        hint: "A statement that allows you to execute different code based on certain conditions."
    },
    {
        word: "list",
        hint: "A mutable, ordered collection of elements in Python."
    },
    {
        word: "string",
        hint: "A sequence of characters used to represent text in programming."
    },
    {
        word: "integer",
        hint: "A data type used to represent whole numbers."
    },
    {
        word: "boolean",
        hint: "A data type with two possible values: True or False."
    },
    {
        word: "class",
        hint: "A blueprint for creating objects in object-oriented programming."
    },
    {
        word: "object",
        hint: "An instance of a class containing data and methods."
    },
    {
        word: "library",
        hint: "A collection of pre-written code that you can use in your programs."
    },
    {
        word: "module",
        hint: "A file containing Python code that can be imported into other programs."
    },
    {
        word: "ide",
        hint: "Integrated Development Environment; a software application for writing and testing code."
    },
    {
        word: "debugging",
        hint: "The process of identifying and fixing errors in a program."
    },
    {
        word: "array",
        hint: "A data structure that can store a fixed-size sequential collection of elements of the same type."
    },
    {
        word: "algorithm",
        hint: "A step-by-step procedure or set of rules to solve a problem or task."
    },
    {
        word: "api",
        hint: "Application Programming Interface; a set of rules that allow different software programs to communicate with each other."
    },
    {
        word: "compilation",
        hint: "The process of converting source code into executable code."
    },
    {
        word: "inheritance",
        hint: "A feature of object-oriented programming where a new class derives properties and methods from an existing class."
    },
    {
        word: "polymorphism",
        hint: "The ability of different objects to respond to the same method in different ways."
    },
    {
        word: "encapsulation",
        hint: "The concept of bundling data and methods that operate on that data within one unit or class."
    },
    {
        word: "abstraction",
        hint: "The concept of hiding the complex reality while exposing only the necessary parts."
    },
    {
        word: "recursion",
        hint: "A method where the function calls itself in order to solve smaller instances of the same problem."
    },
    {
        word: "exception",
        hint: "An error that occurs during the execution of a program, often causing the program to terminate."
    },
    {
        word: "tryexcept",
        hint: "A Python construct used to handle exceptions by attempting to execute code and catching errors if they occur."
    },
   
    {
        word: "json",
        hint: "JavaScript Object Notation; a lightweight data interchange format that is easy for humans to read and write."
    },
    {
        word: "git",
        hint: "A version control system for tracking changes in source code during software development."
    },
    {
        word: "commit",
        hint: "An action in Git that saves changes to the local repository."
    },
    {
        word: "push",
        hint: "The action of sending local commits to a remote repository in Git."
    },
    {
        word: "pull",
        hint: "The action of fetching and merging changes from a remote repository in Git."
    },
    {
        word: "server",
        hint: "A computer system that provides services or resources to other computers, often over a network."
    },
    {
        word: "client",
        hint: "A device or program that accesses a service provided by a server."
    },
    {
        word: "socket",
        hint: "An endpoint for sending or receiving data across a computer network."
    },
    {
        word: "http",
        hint: "Hypertext Transfer Protocol; the protocol used for transferring web pages over the internet."
    },
    {
        word: "css",
        hint: "Cascading Style Sheets; a language used for describing the presentation of a document written in HTML or XML."
    },
    {
        word: "html",
        hint: "Hypertext Markup Language; the standard markup language for creating web pages."
    },
    {
        word: "javascript",
        hint: "A programming language commonly used to create interactive effects within web browsers."
    },
    {
        word: "database",
        hint: "An organized collection of data, typically stored and accessed electronically."
    },
    {
        word: "sql",
        hint: "Structured Query Language; a language used to manage and manipulate relational databases."
    },
    {
        word: "encryption",
        hint: "The process of converting data into a coded form to prevent unauthorized access."
    },
    {
        word: "decryption",
        hint: "The process of converting encrypted data back into its original form."
    },
    {
        word: "firewall",
        hint: "A network security system designed to monitor and control incoming and outgoing network traffic."
    },
    {
        word: "cache",
        hint: "A hardware or software component that stores data to serve future requests more quickly."
    },
    {
        word: "cloud computing",
        hint: "The delivery of computing services over the internet, allowing users to access data and applications remotely."
    },
    {
        word: "machine learning",
        hint: "A type of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed."
    },
    {
        word: "data science",
        hint: "An interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge from structured and unstructured data."
    },
    {
        word: "blockchain",
        hint: "A decentralized digital ledger technology used to record transactions across multiple computers."
    },
    {
        word: "algorithmic trading",
        hint: "Using computer algorithms to automatically make trades in financial markets."
    },
    {
        word: "cryptocurrency",
        hint: "A digital or virtual currency that uses cryptography for security."
    },
    {
        word: "virtualization",
        hint: "The creation of a virtual version of something, such as a virtual machine or operating system."
    },

    {
        word: "responsive design",
        hint: "An approach to web design that makes web pages render well on a variety of devices and window or screen sizes."
    },
    {
        word: "frontend",
        hint: "The part of a website or web application that users interact with directly."
    },
    {
        word: "backend",
        hint: "The part of a website or web application that handles the logic, database operations, and server-side processes."
    },
    {
        word: "docker",
        hint: "A platform that uses containers to create, deploy, and run applications in a consistent environment."
    },
    {
        word: "container",
        hint: "A lightweight, portable, and self-sufficient unit for packaging software and its dependencies."
    }
];
