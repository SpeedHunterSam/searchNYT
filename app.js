//API Key: Twmtv0NJCSiX50ozaG79uAC9OARc2r3o

//Example Url: https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Obama&api-key=Twmtv0NJCSiX50ozaG79uAC9OARc2r3o

//Need to grab Print_Headline, Snippet

const apiKey = "Twmtv0NJCSiX50ozaG79uAC9OARc2r3o";

let searchTopic = "Obama";

let startYear, recordNum, endYear;

let queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTopic + "&api-key=" + apiKey;

document.getElementById("submitButton").addEventListener("click", function (event) {
    console.log(this);
    searchTopic = document.getElementById("searchIndex").value;
    startYear = document.getElementById("startYear").value;
    endYear = document.getElementById("endYear").value;
    recordNum = document.getElementById("numberChoices").value;
    // console.log(document.getElementById("searchIndex").value);
    queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTopic + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "1231" + "&api-key=" + apiKey;
    console.log(queryUrl);
    // document.getElementById("")    
    fetch(queryUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (responseJson) {
            // console.log(responseJson);
            console.log(responseJson.response.docs[0].headline.print_headline);
            console.log(responseJson.response.docs[0].snippet);

            for (let i = 0; i < recordNum; i++) {
                const titleDiv = document.createElement("div");
                titleDiv.classList.add("article");
                const snippetDiv = document.createElement("div");
                snippetDiv.classList.add("article");
                titleDiv.innerHTML = responseJson.response.docs[i].headline.print_headline;
                snippetDiv.innerHTML = responseJson.response.docs[i].snippet
                document.getElementById("populateArticles").append(titleDiv);
                document.getElementById("populateArticles").append(snippetDiv);
            }
        })
})


document.getElementById("clearButton").addEventListener("click", function (event) {
    document.getElementById("populateArticles").innerHTML="";
})