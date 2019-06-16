# Learning NodeJS

This repository is used solely for learning NodeJS.

## Lesson 12 :gear:

### Creating a Server

#### `http` module

- `http.createServer((request,response) => {})` is used to create a server
- `server.listen([port],[ip])` is used to listen requests and response on the specified port and ip
- `res.writeHead([status-code], {"Content-Type":[type-of-content]})` is used to specify the header including the status code and content type of the response
- `res.end([content])` is used to give the content at the end of a response
