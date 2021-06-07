let input_no = 45;
function decToBin(input)
{
    let ans = 0;
    let pow = 1;
    while(input > 0)
    {
        let rem = input % 2;
        
        

        ans = ans + (rem * pow);


        pow = pow * 10;
        input = parseInt(input / 2);



    }
    return ans;

}
let ans = decToBin(input_no);
console.log(ans);