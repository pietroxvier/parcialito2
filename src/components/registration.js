// registration.js

export function registerUser(username, email, password) {
    return fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Handle the response as needed
        // Implement any additional logic here
        return data; // You can return the data if needed
      })
      .catch(error => {
        console.error('Error:', error);
        throw error; // Propagate the error
      });
  }
  