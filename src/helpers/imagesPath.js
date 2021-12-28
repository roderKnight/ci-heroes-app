// export const imagesPath = require.context('../assets/heroes', true);

let heroImages = () => ({default: ''});

try{
    heroImages = require.context('../assets/heroes', true);
}catch(e){
    console.error(e);
}

export const loadImage = image => ( heroImages(`./${ image }`).default );