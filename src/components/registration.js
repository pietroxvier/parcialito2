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
      // Check for specific error conditions and throw a more informative error
      if (error.message.includes('Email validation failed')) {
        // If the error message indicates an email validation failure
        throw { message: 'Email validation failed.', field: 'email' };
      } else {
        throw error; // Propagate the original error
      }
    });
}
