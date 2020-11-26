const bgSphere = document.querySelector('.background-sphere');
const cercle = document.querySelector('.cercle');
const benjam = document.querySelector('.benjam');
document.addEventListener('mousemove',movement);


function movement(e){
    console.log(e.clientX);
    const movement = e.clientX/7;
    bgSphere.style.transform = `translateX(${movement/2}px)`;
    cercle.style.transform = `translateX(${-movement/4}px)`;
    benjam.style.transform = `translateX(${-movement/7}px)`;
}