//spread operator do ya zyada array ko ek array bna dega ya obj ko
//ex : a = [1,2] b = [3,4] c = [...a,...b]
//console.log(c)     so output will be [1,2,3,4] join kr dega ek hi obj ya array me


let a = [1,2,4,5];
let b =[3];
let ans = [...a.slice(0,2),...b,...a.slice(2,4)] ;
console.log(ans);

let o1 = {
    a:1,
    b:2
}
let o2 = {
    c:3
}
let o3 =  {...o1,...o2,...o1,...o2}; //object ki keys change nhi hoti isliye ek hi baar aaegi o1 and o2 ki keys
console.log(o3);