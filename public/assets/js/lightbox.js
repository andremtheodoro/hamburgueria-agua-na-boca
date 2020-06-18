const images =  document.querySelectorAll('.img-galeria')
const imageLight = document.querySelector('.add-image')
const containerLight = document.querySelector('.image-light')
const hamburguer1 = document.querySelector('.hamburguer');

images.forEach(images =>{
    images.addEventListener('click', ()=>{
        aparecerImages(images.getAttribute('src'))  
                
    })
})


    containerLight.addEventListener('click', (e)=>{
        if(e.target !== imageLight){
        containerLight.classList.toggle('show')
        imageLight.classList.toggle('showImage')
        hamburguer1.style.opacity = '1'

        }
    })

    const aparecerImages = (images)=>{
        imageLight.src = images;
        containerLight.classList.toggle('show')
        imageLight.classList.toggle('showImage')
        hamburguer1.style.opacity = '0'

    }