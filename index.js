
const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=13&srsearch=`
const searchQuery = document.querySelector("#search-info");


async function getSearch() {
    

    if(searchQuery.value === "") {
        alert("input cannot be empty!!");
    }
    
    const response = await fetch(url + searchQuery.value)
    const data = await response.json()
    
    showSearchResult(data.query.search)
    
    
    
        
        

    
}

function showSearchResult(data) {
    const searchResult = document.querySelector(".result-info")
    
    searchResult.innerHTML = ""
    
    data.forEach(item => {
        const resultInfo = document.createElement("div");
        
        resultInfo.innerHTML = ""
        resultInfo.className = "search-result";
        resultInfo.innerHTML = `
        
        <h2>${item.title}</h2>
        <p>${item.snippet}....</p>
        <a href='https://en.wikipedia.org/?curid=${item.pageid}' target="blank">read more</a>

        `

        searchResult.appendChild(resultInfo)
    });
}

