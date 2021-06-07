//let SampleInput = [
  //  { 
    //    name: "Roorkee",
      //  rainfall: [5, 6, 5, 5, 4, 7, 8]
     //},
    //{
     //    name: "Pauri",
     //   rainfall: [3, 3, 3, 1, 2, 2, 2] 
    //},
//];

let SampleInput =  [
    { name: "Boston", rainfall: [1, 2, 3, 4, 5, 6, 7] },
    { name: "Chandler", rainfall: [0, 0, 1, 0, 0, 1, 1] },
    { name: "Charlotte", rainfall: [2, 2, 2, 2, 2, 2, 2] },
    { name: "Dallas", rainfall: [3, 3, 2, 6, 1, 3, 8] },
]


function rainDance()
{
    let city_name;
    
    let return_Obj = [];
    

    for(let i=0;i<SampleInput.length;i++)
    {
        let sum = 0 ;
        let Avg_rainfall=0;
        city_name = SampleInput[i].name;
         for(let j=0;j<SampleInput[i].rainfall.length;j++)
        {
           
           sum = sum + SampleInput[i].rainfall[j];
          
            

        }
        Avg_rainfall = (sum)/(SampleInput[i].rainfall.length);
        return_Obj[i] = 
        {
            city_name,
            Avg_rainfall
        }

    }
    return return_Obj;

    
}
console.log(rainDance());