const cercle = document.querySelector('.cercle');
const carre = document.querySelector('.carre');

cercle.addEventListener('mouseenter',()=> {
cercle.style.backgroundColor = 'crimson';
});

carre.addEventListener('click', function(){
carre.style.backgroundColor = 'violet';
});
document.addEventListener('click', function(e){
console.log(e);
console.log(`Pos X ${e.clientX} , ${e.clientY}`);
});