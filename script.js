const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn"),
memeImage = document.querySelector(".meme-generator img"),
memeTitle = document.querySelector(".meme-generator .meme-title"),
memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) =>{
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
}

const generateMeme = () =>{
    fetch("https://meme-api.com/gimme/wholesomememes").then((response) => response.json()).then(data => {
        updateDetails(data.url, data.title, data.author)
    });
}

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();