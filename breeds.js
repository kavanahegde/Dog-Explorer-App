async function fetchBreeds() {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await res.json();
  
      const breeds = Object.keys(data.message);
  
      const container = document.getElementById("breeds-container");
      container.innerHTML = "";
  
      breeds.slice(0, 20).forEach((breed) => {
        const div = document.createElement("div");
        div.classList.add("card");
  
        div.innerHTML = `<h3>${breed}</h3>`;
  
        container.appendChild(div);
      });
  
    } catch (error) {
      console.log("Error:", error);
  
      const container = document.getElementById("breeds-container");
      container.innerHTML = `<p>Failed to load breeds. Try again later.</p>`;
    }
  }
  
  fetchBreeds();