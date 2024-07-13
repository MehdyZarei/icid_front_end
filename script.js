document.getElementById('dropdownButton').addEventListener('click', function ()
{
    var dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.innerHTML = '';

    fetch('https://y7hqsirgg2.execute-api.us-east-2.amazonaws.com/dev')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.statusCode);
        console.log('test');
    }).catch(error => {
        console.error('Error Fetching data:', error);
    });
    
}
);