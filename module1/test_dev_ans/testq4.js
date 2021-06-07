let SampleInput = {
    name: {
        first: "robin",
        last: "negi",
    },
    address: {
        city: {
        name: "Gwalior",
        },
        landmark: "Badri Marg",
        street: "22",
    },
};

for(key in SampleInput )
{
    console.log(SampleInput[key]);
    let loop = SampleInput[key]
    for(key in loop)
    {
        console.log(loop[key]);
        let loop2 = loop[key];
        for(key in loop2)
        {
            if(loop2[key].length>1)
            {
                console.log(loop2[key]);
            }
        }
        
        
    }

}