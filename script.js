let btn = document.getElementById("vv");
let searchText = document.getElementById("albumIdField");
let searchResults = document.getElementById("searchResults");

btn.addEventListener("click", function () {
    searchResults.innerText = "";
    fetchGiphyAPI(searchText.value);
});






function fetchGiphyAPI(keyword) {
    if (!keyword) {
        return;
    }

    var url = "https://api.giphy.com/v1/gifs/search";
    var params = "api_key=tAhl9pArLZqNYypf6g07xuq3J0lLWRtf&limit=10&q=" + encodeURIComponent(keyword);

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4 && this.status === 200) {
            processResponse(this.responseText);
        }
    });
    xhr.open("GET", url + "?" + params);
    xhr.send();
}

function processResponse(responseText) {
    var resp = JSON.parse(responseText);



    for (item of resp.data) {
        let ImgE = document.createElement("img");
        
        ImgE.src = item.images.downsized_medium.url;
        ImgE.alt = item.title;
        searchResults.appendChild(ImgE).id="f";
    }
}






