// !     Events

// ? question # 3

function deleterow1(){
    let row1delte = document.getElementById("row1");
    console.log(row1delte.remove());
    
}

function deleterow2(){
    let row2delte = document.getElementById("row2");
    console.log(row2delte.remove());
    
}

function deleterow3(){
    let row3delte = document.getElementById("row3");
    console.log(row3delte.remove());
    
}

function deleterow4(){
    let row4delte = document.getElementById("row4");
    console.log(row4delte.remove());
    
}

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// ! question # 5

function totalclicks(number){
    let updatedvalues = document.getElementById('updatedvalues')
    let sumandsubvalues = parseInt(updatedvalues.innerText) + number;
    console.log(sumandsubvalues + number);
    updatedvalues.innerText = sumandsubvalues;
    

}