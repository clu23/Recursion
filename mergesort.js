

// This function takes 2 sorted lists as input and return the merged sorted list of the 2 lists

function fusion(a,b){
    const n=a.length;
    const m=b.length;
    let mergedList=[];
    let i=0;
    let j=0;
    while(i<n && j<m){
        if (a[i]<b[j]){
            mergedList.push(a[i]);
            i++;
        }
        else if(a[i]==b[j]){
            mergedList.push(a[i]);
            mergedList.push(b[j]);
            i++;
            j++;
        }
        else if(a[i]>b[j]){
            mergedList.push(b[j]);
            j++;
        }    
    }
    if (i<n){
        for(let k=i; k<n;k++){
            mergedList.push(a[k]);
        }
    }
    else{
        for(let k=j; k<m;k++){
            mergedList.push(b[k]);
        }
    }
    return(mergedList)
}



function mergeSort(list){
    const n=list.length;
    if (n==0){
        return([]);
    }
    else if (n==1){
        return(list);
    }
    else{
        if (n%2==0){
            return(fusion(mergeSort(list.slice(0,n/2)),mergeSort(list.slice(n/2))));
        }
        else{
            return(fusion(mergeSort(list.slice(0,(n-1)/2)),mergeSort(list.slice((n-1)/2))))
        }
    }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));