document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    fetch('https://api.hanling.space/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Login successful:', data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
});
var personalButton = document.getElementById('fanhui');
personalButton.addEventListener('click', function() {
    var personalPageURL = 'index.html';
    window.location.href = personalPageURL;
});