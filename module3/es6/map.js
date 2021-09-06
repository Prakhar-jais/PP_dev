 let a = [1, 2, 3, 4, 5];

// function double(x) {
//   return 2 * x;
// }

// let ansArr = a.map(double);

// console.log(a);
// console.log(ansArr);

function mapka_kaam(vari){
   return vari*2 ;

}
function myMap(arr){
    for(let i=0;i<arr.length;i++)
    {
        
        console.log(mapka_kaam(arr[i])) ;
    }

}
myMap(a);