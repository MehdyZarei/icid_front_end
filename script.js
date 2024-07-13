document.getElementById('dropdownButton').addEventListener('click', function ()
{
    var dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.innerHTML = '';

    fetch('https://y7hqsirgg2.execute-api.us-east-2.amazonaws.com/dev')
    .then(response => console.log(response)).catch(error => {
        console.error('Error Fetching data:', error);
    });
    
}
);