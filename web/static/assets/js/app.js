document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("http://localhost:3000/test");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Response from endpoint:", data);
        document.getElementById("api-status").textContent = `API Status: ${data.message}`;
    } catch (error) {
        console.error("Error fetching data from endpoint:", error);
    }
});