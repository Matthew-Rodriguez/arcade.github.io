document.addEventListener('DOMContentLoaded', () => {
    let table=document.querySelector('#connect4');
    const ROWS= 6;
    
    const COLS= 7;
    var turnCounter= 0;
    for(let i=0;i < ROWS;i++) {
        var tr=document.createElement('tr')
    
        table.appendChild(tr);
        for(let j=0;j < COLS;j++) {
            var td = document.createElement('td')
        
            tr.appendChild(td);
         
            //console.log(table.children[5])
           
         
            


  
            //console.log(table.children[5])

            //var row4 = table.children[4];
            //var row3 = table.children[3];
            //var row2 = table.children[2];
            //var row = table.children[1];
           
            //if(table.children[5]) {
               
                if(table.children[5] && table.children) {
                    td.id = 'row5'
                    td.cl
                }
                if(table.children[4] && table.children) {
                    td.id = 'row5'
                }
                }
            }
            })