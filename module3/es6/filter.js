let a = [1, 2, 3, 4, 5];

function isEven(x) {
  return x%2==0;
}

// let ansArr = a.filter(isEven);

// console.log(a);
// console.log(ansArr);


function isFilter(arr){
    for(let i=0;i<arr.length;i++)
    {
        let val = isEven(arr[i]);
        console.log(val);
    }
    
}
isFilter(a);