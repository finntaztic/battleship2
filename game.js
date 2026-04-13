export class game {
    renderBoard (){

        console.log('testing renderboard')
        let row = 7;
        let col = 7;

        const container = document.querySelector('.container')
        const containerDiv = document.createElement('div');
        container.appendChild(containerDiv);

        for (let i = 0; i < row; i++){
            for (let j = 0; j < col; j++){
                const div = document.createElement('div');
                containerDiv.appendChild(div);
                div.dataset.row = i;
                div.dataset.col = j;
            }
        }
    }
}


//how do i render the board for each human and comupuet just one function? 
//