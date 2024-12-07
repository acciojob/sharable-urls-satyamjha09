const nameInput = document.getElementById("name");
const yearInput = document.getElementById("year");
const button = document.getElementById("button");
const urlDisplay = document.getElementById("url");

button.addEventListener("click", () => {
        const name = nameInput.value.trim();
        const year = yearInput.value.trim();
        let queryString = "https://localhost:8080/";

            // Construct query string
        if (name || year) {
            const params = new URLSearchParams();
            if (name) params.append("name", name);
            if (year) params.append("year", year);
            queryString += `?${params.toString()}`;
        }

            // Update the URL display
            urlDisplay.textContent = queryString;