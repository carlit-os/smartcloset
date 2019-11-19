function searchBar() 
{
    var searchResults = document.getElementById("searchResults");
    if (searchResults.style.display != "none") {
        var childList = searchResults.childNodes;
        for (var i = 0; i < searchResults.childElementCount; i++)
            searchResults.removeChild(childList[i]);
    }
    var searchVal = document.getElementById("searchForm").value;
    searchVal = searchVal.toLowerCase();
    var foundItems = [];
    var clItems = document.getElementsByClassName("col-sm-3");
    for (var x = 0; x < clItems.length; x++) {
        var itemName = clItems[x].getElementsByClassName("card-title")[0]
        if (itemName) {
            //console.log(itemName.innerHTML);
            itemName = itemName.innerHTML.toLowerCase();
            //console.log(itemName);
            if (itemName.search(searchVal) >= 0) {
                console.log("found one x = " + x);
                foundItems.push(clItems[x].cloneNode(true));
            }
        }
    }
    searchResults.style.display = "flex";
    searchResults.style.flexDirection = "row";
    searchResults.style.flexWrap = "wrap";

    var h = document.createElement("H2");
    var t = document.createTextNode("Search Results");
    h.appendChild(t);
    h.style.flexBasis = "100%";
    searchResults.appendChild(h);

    for (var y = 0; y < foundItems.length; y++) {
        foundItems[y].style.marginTop = "10px";
        foundItems[y].style.marginBottom = "10px";
        searchResults.appendChild(foundItems[y]);
    }
    console.log("found items: " + foundItems)
    console.log("found length: " + foundItems.length);
    console.log("clItems length: " + clItems.length);
    console.log(clItems)
    console.log("Search Value: " + searchVal);
};

var button = document.getElementById("searchButton");
button.onclick = searchBar;