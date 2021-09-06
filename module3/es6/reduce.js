let a = [1,2,3];
function sum(a,b){

    return a+b ;

}
// let ans = a.reduce(sum);
// console.log(ans);

//how to implement this function

function is_reduce(arr,sum){
    let ans = arr[0];
    for(let i=1;i<arr.length;i++)
    {
        ans = sum(ans,arr[i]);
    }
    console.log(ans);
}
is_reduce(a,sum);