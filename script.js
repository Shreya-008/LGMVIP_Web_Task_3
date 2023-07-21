const responses = []; // Array to store all the registered responses

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;

  // Create a new response object
  const response = {
    name: name,
    phone: phone,
    email: email,
    address: address
  };

  // Add the new response to the responses array
  responses.push(response);

  // Display all the responses on the side
  displayResponses();

  // Clear form fields after submission
  document.getElementById('registrationForm').reset();
});

function displayResponses() {
  const responseContainer = document.getElementById('submitted-data');
  responseContainer.innerHTML = '';

  // Loop through all the registered responses and display them
  for (const response of responses) {
    const responseDiv = document.createElement('div');
    responseDiv.innerHTML = `
      <h3>Response:</h3>
      <p><strong>Name:</strong> ${response.name}</p>
      <p><strong>Phone Number:</strong> ${response.phone}</p>
      <p><strong>Email:</strong> ${response.email}</p>
      <p><strong>Address:</strong> ${response.address}</p>
      <hr>
    `;
    responseContainer.appendChild(responseDiv);
  }
}


