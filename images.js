async function fetchImages() {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random/8");
      const data = await res.json();
  
      const container = document.getElementById("images-container");
      container.innerHTML = "";
  
      data.message.forEach(imgUrl => {
        const img = document.createElement("img");
        img.src = imgUrl;
        container.appendChild(img);
      });
  
    } catch (error) {
      document.getElementById("images-container").innerHTML =
        "<p>Failed to load images. Try again later.</p>";
    }
  }
  
  document.getElementById("load-more").addEventListener("click", fetchImages);
  
  fetchImages();