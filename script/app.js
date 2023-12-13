//movie poster original image
let moviePoster = document.querySelector('.movie-poster');

//modal window layer
let modal = document.querySelector('#myModal');

// close button
let closeBtn= document.querySelector('.closeBtn');

//copy movie poster
let modalImage = document.querySelector('.movie-poster-modal');

//pildil klikile reageerimine, akna ja pildi toomine
moviePoster.addEventListener('click', ()=> {
    modal.style.display = 'block';
    modalImage.src = moviePoster.src
});

//akna sulgemine risist
closeBtn.addEventListener('click', ()=>{
    modal.style.display = 'none';
});

//akna sulgemine klikkides tyhjal alal
window.addEventListener('click', (event)=> {
    if(event.target === modal) {
        modal.style.display = 'none';
    }
})