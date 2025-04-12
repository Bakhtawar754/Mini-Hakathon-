function doneForm() {
    const coding = document.getElementById("coding").value;
    const design = document.getElementById("design").value;
    const career = document.getElementById("career").value;

    const container = document.getElementById("cardbox");

    // Create a new div element for the card
    const box = document.createElement("div");
    box.classList.add("card");

    // Set the innerHTML to the card structure with values from the form
    box.innerHTML = `
        <img src="https://via.placeholder.com/300" alt="Card Image" class="card-image">
        <div class="card-content">
            <h2 class="card-title">${coding}</h2>
            <p class="card-description">${design}</p>
            <p class="card-description">${career}</p>
            <button class="card-btn">Learn More</button>
        </div>
    `;

    // Append the card to the container
    container.appendChild(box);
}

const navUnder = document.qurryselector("navUnder");
const links = document.querySelector("links");
navUnder.addEventListener("click",()=> {
links.classList.toggle("navUnder")
})
