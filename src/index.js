console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded',function(){

    fetch('https://dog.ceo/api/breeds/list/all')
    .then (function (response){
        return response.json();
    }).then(json => breeddogs(json.message))
})



fetch('https://dog.ceo/api/breeds/image/random/4')
.then (function (response){
return response.json();
})
.then (function (responseJsoned){
for(let i = 0; i <responseJsoned.message.length;i++){
    let img = document.createElement('img')
    img.src=responseJsoned.message[i];
    img.setAttribute('width', '200px')
    img.setAttribute('height', '200px')
    document.querySelector('#dog-image-container').appendChild(img);
}

})

function breeddogs(json){
    console.log(json);
    const allDogs = document.querySelector('ul');
    const keys = Object.keys(json)
    for (let i = 0; i < keys.length; i++){
        if( json[keys[i]].length != 0){
            for(let k =0; k< json[keys[i]].length ; k++ ){
                let breedsss = json[keys[i]][k];
                const list = document.createElement('li');
                list.innerText = breedsss;
                allDogs.append(list) ;
            } 
        }
    }

}

document.addEventListener('click', function(e){
  dogul= document.querySelector('#dog-breeds');
    if(e.target.parentNode===dogul){
        e.target.style.color='red';
        console.log(dogul.childNodes.length);
    }
   
})

const selector = document.querySelector('#breed-dropdown')
dogul=document.querySelector('#dog-breeds')
console.log(selector)

selector.addEventListener('change', function(e){
    console.log(e.target.value)
let dog =""
    for (let i=0; i< dogul.childNodes.length -1;i++){
        dog = document.querySelectorAll('li')[i];
        if(dog.innerText[0] === e.target.value){
            dog.style.display='list-item';
        }else {
            dog.style.display='none';
        }
        
    }

})