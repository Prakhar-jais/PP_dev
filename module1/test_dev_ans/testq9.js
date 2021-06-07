let input = "kite flying";
let arr = input.split(" ");

let s_1 = arr[0];
let s_2 = arr[1];
let str2 =  s_1[0] + s_2.substring(1); 
let str1 =  s_2[0] + s_1.substring(1); 


//function swap(str1,str2)
// {
//     let temp;
//     temp = str1[1];
//     str1[1] = str2[1];
//     str2[1] = temp;

// }
//swap(s_1,s_2);



let ans = str1 + " " + str2 ;
console.log(ans);