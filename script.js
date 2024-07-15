document.getElementById('dropdownButton').addEventListener('click', function ()
{
    var dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.innerHTML = '';

    const url = new URL('https://y7hqsirgg2.execute-api.us-east-2.amazonaws.com/dev/'); // Replace with your API endpoint
    const params = {'agency': 'DDC', 'version': '01'};
        
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    console.log(url);

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.body.projects);
        console.log('test');
    }).catch(error => {
        console.error('Error Fetching data:', error);
    });
    
}
);