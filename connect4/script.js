document.addEventListener('DOMContentLoaded', () => {
    let table=document.querySelector('#connect4');
    const ROWS= 6;
    const player1=document.getElementById("player1");
    const player2=document.getElementById("player2");

    const COLS= 7;
    var turnCounter= 0;
    for(let i=0;i < ROWS;i++) {
        var tr=document.createElement('tr');

        table.appendChild(tr);
        for(let j=0;j < COLS;j++) {
            var td = document.createElement('td');
            tr.appendChild(td);
       

            if(i === 5) {
                function placePiece(event) {
                    if(turnCounter % 2 === 0) {
                        event.currentTarget.classList.add('red') 
                        player2.classList.toggle('show')
                        player1.classList.remove('show')
                        
                    } else {
                        event.currentTarget.classList.add('yellow')
                        player2.classList.remove('show')
                        player1.classList.toggle('show')
                        
                    }
                    
                    turnCounter++ 

                    event.currentTarget.removeEventListener("click", placePiece)
                    for(let i=0; i < ROWS;i++) {
                        for(let j=0; j < COLS; j++) {
                            if(table.children[i].children[j] === event.currentTarget) {
                                table.children[i - 1].children[j].addEventListener("click", placePiece)
                            console.log(i, j)
                            }
                        }
                    }
                }
                td.addEventListener("click", placePiece);
            }
            function checkLine(a,b,c,d) {
                return ((a !== 0) && (a===b) && (a===c) && (c===d))

            }
        
    
    }
            
} 
})
