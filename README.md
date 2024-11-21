# Recipe App

- I've created a simple recipe app that allows users to view a list of recipes, add new recipes, and delete existing
- I've used mongoose, express, and node.js to create the backend of the app
- I've defined a Recipe model using mongoose to store recipe data in a MongoDB database
- I've created routes for GET, POST, and DELETE requests to interact with the Recipe model
- I've used express to handle requests and send responses back to the client

----Notes----
- Cluster - a group of mongoDB servers that work together to provide high availability, scalability and perfomance.
- There are 2 primary types of clusters in MongoDB: Replica Set and Sharded Cluster.
- Replica Set - a group of serves that maintain identical copies of data. It ensures data durability and allows for automatic fallover incase of server failure
- Sharded Cluster - a technique to distribute data across multiple servers in mongoDB cluster, it's designed to handle large data sets and high thru put operations efficiently.
- Express - a lightweight, flexible Node.js web framework that provides a robust set of features for building web applications 
- Also express is used to build single page applications, multipage and hybrid web applications.

# Installation and Instructions
1. Clone the repository
2. Open the terminal and navigate to the project directory e.g . `cd recipe-app`
3. Initialize the project by running `npm init -y`
4. Install the required packages by running `npm install express mongoose cors dotenv`
5. Create a server file - this is where you will write code to connect the mongoDB to the express
6. Run npm run dev to start your express server