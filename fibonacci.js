
function fibs(n){
    if (n==0){
        return([])
    }
    else if (n==1){
        return([0])
    }
    else if (n==2){
        return([0,1])
    }
    else{
        let sequence=[0,1];
        for(let i=2;i<n;i++){
            sequence.push(sequence[sequence.length-1]+sequence[sequence.length-2]);
        }
        return(sequence);
    }
}

function fibsRec(n){
    if (n==0){
        return([])
    }
    else if (n==1){
        return([0])
    }
    else if (n==2){
        return([0,1])
    }
    else{
        return(fibsRec(n-1).concat([fibsRec(n-1)[fibsRec(n-1).length-1]+fibsRec(n-1)[fibsRec(n-1).length-2]]))
    }
}

console.log(fibs(3));
console.log(fibsRec(3));
