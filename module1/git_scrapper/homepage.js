const request = require("request");
const cheerio = require("cheerio");

request("https://github.com/topics",function(err,res,data)
{
    processData(data);
})

function processData(html)
{
    let myDocument = cheerio.load(html);

    let allDiv = myDocument(".topic-box ");
    //console.log(allDiv);
    let githubTopics = [];
    for(let i=0;i<allDiv.length;i++)
    {
        let get_A = myDocument(allDiv[i]).find("a");
        let getlink = myDocument(get_A).attr("href");
        let mylink = "https://github.com"+ getlink;
        let topicName = get_A.find(".f3").text().split("\n")[1].trim();

        githubTopics.push( {TopicName : topicName , Link : mylink} ); 
    }
    

    console.log(githubTopics);


}