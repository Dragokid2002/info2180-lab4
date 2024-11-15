document.getElementById("search-btn").addEventListener("click", function () {
    const query = document.getElementById("search-field").value;
    fetch(`superheroes.php?query=${encodeURIComponent(query)}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("result").innerHTML = data; // Update result div
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("result").innerHTML = "<p>Something went wrong. Please try again later.</p>";
        });
});