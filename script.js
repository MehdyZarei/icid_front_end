document.getElementById('dropdownButton').addEventListener('click', function ()
{
    var dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.innerHTML = '';

    const url = new URL('https://y7hqsirgg2.execute-api.us-east-2.amazonaws.com/dev/'); // Replace with your API endpoint
    const params = {'agency': 'DDC', 'version': '01'};
        
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    // console.log(url);

    fetch(url)
    .then(response => response.json())
    .then(data => {
            data.projects.forEach(item => {
                console.log(item);
                var a = document.createElement('a');
                a.textContent = item;
                dropdownContent.appendChild(a);
            });
            // console.log(data.projects);
        })
    .catch(error => {
        console.error('Error Fetching data:', error);
    });   
});


document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('myModal');
    const openModalButton = document.getElementById('openModalButton');
    const closeButton = document.querySelector('.close');
    const cancelButton = document.getElementById('cancelButton');
    const form = document.getElementById('form');

    openModalButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    cancelButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const args = {"agency": "DDC", "version": "01"};

        formData.forEach((value, key) => {args[key] = value;});

        const url_post = new URL('https://jo0j7u627k.execute-api.us-east-2.amazonaws.com/dev/POST');

        fetch(url_post,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                mode: 'no-cors',
                body: JSON.stringify(args)
            }
        ).then(
            response => {
                // response.json();
                console.log(response);
            }
        ).then(
            data => {
                console.log('Success:', data);
                modal.style.display = 'none';
                form.reset();
            }
        )
        .catch(error => {
            console.error('Error:', error);
        });
    });
});