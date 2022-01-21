const cube = document.querySelector('.cube');

window.addEventListener('keydown', (e)=>{
        let button = e.key;
        if(button == 'ArrowRight'){
            console.log('ArrowRight has pressed');
            turnRight();
        }
        if(button == 'ArrowLeft'){
            console.log('ArrowRLeft has pressed');
            turnLeft();
        }
        if(button == 'ArrowUp'){
            console.log('ArrowRUp has pressed');
            turnUp();
        }
        if(button == 'ArrowDown'){
            console.log('ArrowDown has pressed');
            turnDown();
        }
    
})
window.addEventListener('mouseup', (e)=>{
    console.log(e.pageX)
    console.log(e.offsetX)
})

function turnRight(){
    cube.style.transform += 'rotateY(3deg)', 'ease-out';  
}
function turnLeft(){
    cube.style.transform += 'rotateY(-3deg)', 'ease-out';  
}
function turnUp(){
    cube.style.transform += 'rotateX(3deg)', 'ease-out';  
}
function turnDown(){
    cube.style.transform += 'rotateX(-3deg)', 'ease-out';  
}

