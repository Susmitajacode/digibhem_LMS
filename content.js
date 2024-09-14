// Select all links from the sidebar
document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior (navigation)

        // Get the target page from the data-page attribute
        const page = this.getAttribute('data-page');

        // Fetch the content of the target page
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text(); // Return the response as text
            })
            .then(data => {
                // Inject the fetched content into the #content-view area
                document.getElementById('content-view').innerHTML = data;
            })
            .catch(error => {
                // Handle any error during fetching
                console.error('There was a problem fetching the page:', error);
                document.getElementById('content-view').innerHTML = `<p>Failed to load content. Please try again later.</p>`;
            });
    });
});
