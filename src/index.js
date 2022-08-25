// Challenge 1

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const container = document.querySelector('#dog-image-container')



    fetch(imgUrl)
    .then(res => res.json())
    .then(images => {
    
    const dogImages = images.message

    // turn the array of images into image elements

    let imagesArray = dogImages.map((image) =>  {
        let i = `<img src=${image}>`
        return i
    })

    //    append the images to the DOM

    imagesArray.forEach(element => {
        container.innerHTML += element
    });


       
    })


    // Challenge 2

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const ulContainer = document.querySelector('#dog-breeds')
    let breedsArray = [];

    fetch(breedUrl)
    .then(res => res.json())
    .then(breeds => {

        // turn the object into an array

        breedsArray = Object.keys(breeds.message)

        // create li elements

        let liElements = breedsArray.map((breed) =>  {
            let li = `<li>${breed}</li>`
            return li
        })

        //    append the list to the DOM

        liElements.forEach(element => {
            ulContainer.innerHTML += element
        });

    })

    // Challenge 3

    // change li font colors

    ulContainer.addEventListener('click', handleClick)

    function handleClick(e) {
        const breedName = e.target
        if (breedName.nodeName === 'LI') {
            if (breedName.style.color === "purple"){
        
                breedName.style.color = "black"
             } else {
                
              breedName.style.color = "purple"
      
             }
        }

        
    }

    // Challenge 4

    // filter breeds

    const dropDown = document.querySelector('#breed-dropdown')
    dropDown.addEventListener('change', handleDropDown)
    function handleDropDown(e){
        const letter = e.target.value
        const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter))
        
        let filteredLiElements = filteredBreeds.map((breed) =>  {
            let li = `<li>${breed}</li>`
            return li
        })

        ulContainer.innerHTML = ''

        filteredLiElements.forEach(element => {
            ulContainer.innerHTML += element
        });
    }
    
    