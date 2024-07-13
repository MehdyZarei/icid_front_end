document.getElementById('dropdownButton').addEventListener('click', function ()
{
    var dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.innerHTML = '';

    fetch('https://vprefzsq6kuof7kult6iz6emea0baeau.lambda-url.us-east-2.on.aws/')
    .then(response => console.log(response)).catch(error => {
        console.error('Error Fetching data:', error);
    });
    
}
);