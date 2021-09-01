// 55d5447555394f9b84764484dac99c3a

const NewsApi = {
    key:"55d5447555394f9b84764484dac99c3a",
    URL:"https://newsapi.org/v2/top-headlines"
}

fetch(`${NewsApi.URL}?country=in&apiKey=${NewsApi.key}`)
  .then(response => response.json())
  .then(showTOPnews);


 let card1 =  document.getElementById("title1");

// DISPLAYING TOP STORIES 
 function showTOPnews(data)
 {
    // console.log(data);
    let card = document.getElementById("title1");
    card.innerText = `${data.articles[0].title}`;
    let readmore = document.getElementById("readmore1");
    readmore.href = `${data.articles[0].url}`;


    card = document.getElementById("title2");
    card.innerText = `${data.articles[1].title}`;
    readmore = document.getElementById("readmore2");
    readmore.href = `${data.articles[1].url}`;


    card = document.getElementById("title3");
    card.innerText = `${data.articles[2].title}`;
    readmore = document.getElementById("readmore3");
    readmore.href = `${data.articles[2].url}`;

    card = document.getElementById("title4");
    card.innerText = `${data.articles[3].title}`;
    readmore = document.getElementById("readmore4");
    readmore.href = `${data.articles[3].url}`;
    
    card = document.getElementById("title5");
    card.innerText = `${data.articles[4].title}`;
    readmore = document.getElementById("readmore5");
    readmore.href = `${data.articles[4].url}`;

    card = document.getElementById("title6");
    card.innerText = `${data.articles[5].title}`;
    readmore = document.getElementById("readmore6");
    readmore.href = `${data.articles[5].url}`;

    card = document.getElementById("title7");
    card.innerText = `${data.articles[6].title}`;
    readmore = document.getElementById("readmore7");
    readmore.href = `${data.articles[6].url}`;
    
 }


// BUSINESS NEWS 

fetch(`${NewsApi.URL}?country=in&category=business&apiKey=${NewsApi.key}`)
.then(response => response.json())
.then(showBusinessNews);

function showBusinessNews(data)
{
    // console.log(data.articles);
    let businessCard = document.getElementById("Business1");
    businessCard.innerText = `${data.articles[0].title}`;
    let readmore = document.getElementById("b1");
    readmore.href = `${data.articles[0].url}`;

    businessCard = document.getElementById("Business2");
    businessCard.innerText = `${data.articles[1].title}`;
    readmore = document.getElementById("b2");
    readmore.href = `${data.articles[1].url}`;

    businessCard = document.getElementById("Business3");
    businessCard.innerText = `${data.articles[2].title}`;
    readmore = document.getElementById("b3");
    readmore.href = `${data.articles[2].url}`;

    businessCard = document.getElementById("Business4");
    businessCard.innerText = `${data.articles[3].title}`;
    readmore = document.getElementById("b4");
    readmore.href = `${data.articles[3].url}`;

    businessCard = document.getElementById("Business5");
    businessCard.innerText = `${data.articles[4].title}`;
    readmore = document.getElementById("b5");
    readmore.href = `${data.articles[4].url}`;

}


//ENTERTAINMENT NEWS

fetch(`${NewsApi.URL}?country=in&category=entertainment&apiKey=${NewsApi.key}`)
.then(response => response.json())
.then(showEntertainmentNews);

function showEntertainmentNews(data)
{
    // console.log(data.articles);
    let entertainmentCard = document.getElementById("entertainment1");
    entertainmentCard.innerText = `${data.articles[0].title}`;
    let readmore = document.getElementById("e1");
    readmore.href = `${data.articles[0].url}`;

    entertainmentCard = document.getElementById("entertainment2");
    entertainmentCard.innerText = `${data.articles[1].title}`;
    readmore = document.getElementById("e2");
    readmore.href = `${data.articles[1].url}`;

    entertainmentCard = document.getElementById("entertainment3");
    entertainmentCard.innerText = `${data.articles[2].title}`;
    readmore = document.getElementById("e3");
    readmore.href = `${data.articles[2].url}`;

    entertainmentCard = document.getElementById("entertainment4");
    entertainmentCard.innerText = `${data.articles[3].title}`;
    readmore = document.getElementById("e4");
    readmore.href = `${data.articles[3].url}`;

    entertainmentCard = document.getElementById("entertainment5");
    entertainmentCard.innerText = `${data.articles[4].title}`;
    readmore = document.getElementById("e5");
    readmore.href = `${data.articles[4].url}`;


}


fetch(`${NewsApi.URL}?country=in&category=health&apiKey=${NewsApi.key}`)
.then(response => response.json())
.then(showHealthNews);

function showHealthNews(data)
{
    // console.log(data.articles);

    let healthCard = document.getElementById("Health1");
    healthCard.innerText = `${data.articles[0].title}`;
    let readmore = document.getElementById("h1");
    readmore.href = `${data.articles[0].url}`;

    healthCard = document.getElementById("Health2");
    healthCard.innerText = `${data.articles[1].title}`;
    readmore = document.getElementById("h2");
    readmore.href = `${data.articles[1].url}`;

    healthCard = document.getElementById("Health3");
    healthCard.innerText = `${data.articles[2].title}`;
    readmore = document.getElementById("h3");
    readmore.href = `${data.articles[2].url}`;

    healthCard = document.getElementById("Health4");
    healthCard.innerText = `${data.articles[3].title}`;
    readmore = document.getElementById("h4");
    readmore.href = `${data.articles[3].url}`;

    healthCard = document.getElementById("Health5");
    healthCard.innerText = `${data.articles[4].title}`;
    readmore = document.getElementById("h5");
    readmore.href = `${data.articles[4].url}`;
}


fetch(`${NewsApi.URL}?country=in&category=technology&apiKey=${NewsApi.key}`)
.then(response => response.json())
.then(showTechnologyNews);

function showTechnologyNews(data)
{
    // console.log(data.articles);

    let technologyCard = document.getElementById("technology1");
    technologyCard.innerText = `${data.articles[0].title}`;
    let readmore = document.getElementById("t1");
    readmore.href = `${data.articles[0].url}`;

    technologyCard = document.getElementById("technology2");
    technologyCard.innerText = `${data.articles[1].title}`;
    readmore = document.getElementById("t2");
    readmore.href = `${data.articles[1].url}`;

    technologyCard = document.getElementById("technology3");
    technologyCard.innerText = `${data.articles[2].title}`;
    readmore = document.getElementById("t3");
    readmore.href = `${data.articles[2].url}`;

    technologyCard = document.getElementById("technology4");
    technologyCard.innerText = `${data.articles[3].title}`;
    readmore = document.getElementById("t4");
    readmore.href = `${data.articles[3].url}`;

    technologyCard = document.getElementById("technology5");
    technologyCard.innerText = `${data.articles[4].title}`;
    readmore = document.getElementById("t5");
    readmore.href = `${data.articles[4].url}`;
}

fetch(`${NewsApi.URL}?country=in&category=sports&apiKey=${NewsApi.key}`)
.then(response => response.json())
.then(showSportsNews);

function showSportsNews(data)
{
    console.log(data.articles);

    let sportsCard = document.getElementById("sports1");
    sportsCard.innerText = `${data.articles[0].title}`;
    let readmore = document.getElementById("s1");
    readmore.href = `${data.articles[0].url}`;

    sportsCard = document.getElementById("sports2");
    sportsCard.innerText = `${data.articles[1].title}`;
    readmore = document.getElementById("s2");
    readmore.href = `${data.articles[1].url}`;

    sportsCard = document.getElementById("sports3");
    sportsCard.innerText = `${data.articles[2].title}`;
    readmore = document.getElementById("s3");
    readmore.href = `${data.articles[2].url}`;

    sportsCard = document.getElementById("sports4");
    sportsCard.innerText = `${data.articles[3].title}`;
    readmore = document.getElementById("s4");
    readmore.href = `${data.articles[3].url}`;

    sportsCard = document.getElementById("sports5");
    sportsCard.innerText = `${data.articles[4].title}`;
    readmore = document.getElementById("s5");
    readmore.href = `${data.articles[4].url}`;
}