document.getElementById("search-btn").addEventListener("click", function () {
    fetch("superheroes.php")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
            return response.text();
        })
        .then(data => {
            alert(data); // Show the list in an alert for now
        })
        .catch(error => {
            console.error("Error:", error);
        });
});
