let movies = [
    {
      name: "falcon and the winter soldier",
      des:
        "Falcon and the Winter Soldier are a mismatched duo who team up for a global adventure that will test their survival skills -- as well as their patience.",
      image: "intro-bg.jpg"
    },
    {
      name: "loki",
      des:
        "Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of Avengers Endgame.",
      image: "intro2.png"
    },
    {
      name: "wanda vision",
      des:
        "Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems.",
      image: "intro3.png"
    },
    {
      name: "raya and the last dragon",
      des:
        "Raya, a warrior, sets out to track down Sisu, a dragon, who transferred all her powers into a magical gem which is now scattered all over the kingdom of Kumandra, dividing its people.",
      image: "intro4.png"
    },
    {
      name: "luca",
      des:
        "Set in a beautiful seaside town on the Italian Riviera, the original animated feature is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides.",
      image: "intro5.png"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; //track the current slide
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
    //create DOM Elements
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    //attaching all the elements
    imgElement.appendChild(document.createTextNode(" "));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    //setting up the images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
    //setting elements class names
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = ` calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }

    return(
      <>
      <div class="carousel-container">
        <div class="carousel">
          <div class="slider">
            <div class="slide-content">
              <h1 class="movie-title"></h1>
              <p class="movie-des"></p>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  setInterval(() => {
    createSlide();
  }, 3000);

  export default createSlide;
  