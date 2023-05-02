const fs = require('fs');

// Create a file named "hello.txt" with the content "Hello Node"
fs.writeFile('task3/welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('welcome.txt has been created!');
});

// Read and log the data from "hello.txt"
fs.readFile('task3/welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
