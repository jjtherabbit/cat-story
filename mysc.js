let framSelector=document.querySelectorAll('.frame');
let ids=[];
let zoomSelector=document.querySelector('.zoom');
let blurBoxSelector=document.querySelector('.blurBox')
let pcSelector=document.querySelector('#pc')
let closeButton=document.querySelector('.close')

for (let i=1; i<=framSelector.length; i++){
ids.push(`#p${i}`)
}
let imgSelector=[]
for (let i=0; i<ids.length; i++){
    imgSelector.push(document.querySelector(ids[i]))
}

let picZoom = function(){
    zoomSelector.classList.remove('hidden');
    blurBoxSelector.classList.remove('hidden');
}

let zoomOff = function(){
    zoomSelector.classList.add('hidden');
    blurBoxSelector.classList.add('hidden');
}

for (let i=0; i<imgSelector.length; i++){
    imgSelector[i].addEventListener('click', function(){
        for (let m=0; m<ids.length; m++){
            if(`#${imgSelector[i].id}`===ids[m]){
                pcSelector.src=imgSelector[i].src
            }
        }
        console.log(imgSelector[i].src)
        picZoom()
    })
}

closeButton.addEventListener('click', zoomOff)
pcSelector.addEventListener('click', zoomOff)

document.addEventListener('keydown', function(eve){
    if(eve.key ==='Escape'){
        zoomOff() 
    }
})