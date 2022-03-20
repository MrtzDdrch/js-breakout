const grid = document.querySelector('.grid');
const blockWidth = 100;
const blockHeight = 20;

// create Block class
class Block{
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    }
}

// Array with Blocks
const blocks = [
    new Block(10, 270)
]


// draw the block
function addBlocks(){

    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left = blocks[i].bottomLeft[0];
        block.style.bottom = '50px';
        grid.appendChild(block);
        
    }
}

addBlocks();