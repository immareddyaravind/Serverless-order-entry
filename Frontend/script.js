function submitForm(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const food = document.getElementById('food').value;
    const table = document.getElementById('table').value;

    // Create request object
    const xhr = new XMLHttpRequest();

    // Set up request
    xhr.open('POST', 'https://uhwikf9gf1.execute-api.us-east-1.amazonaws.com/prod/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Set up response handler
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert('Order placed successfully!');
                document.getElementById('name').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('food').value = '';
                document.getElementById('table').value = '';
            } else {
                alert('Order submission failed: ' + xhr.responseText);
            }
        }
    };

    // Send request
    xhr.send(JSON.stringify({
        name: name,
        phone: phone,
        food: food,
        table: table
    }));
}
