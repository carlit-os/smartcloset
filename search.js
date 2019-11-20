function searchBar() 
{
    // setting up search results div and getting keyword
    var sResults = document.getElementById("searchResults");
    var searchVal = document.getElementById("searchForm").value;
    searchVal = searchVal.toLowerCase();
    sResults.innerHTML = "<H2>Search Results: '" + searchVal + "'</H2>";
    var foundItems = [];
    
    // Finding each item/outfit in wardrobe that contains search keyword
    var clItems = document.getElementsByClassName("col-sm-3");
    for (var x = 0; x < clItems.length; x++) {
        var itemName = clItems[x].getElementsByClassName("card-title")[0]
        if (itemName) {
            //console.log(itemName.innerHTML);
            itemName = itemName.innerHTML.toLowerCase();
            //console.log(itemName);
            if (itemName.search(searchVal) >= 0) {
                //console.log("found one x = " + x);
                foundItems.push(clItems[x].cloneNode(true));
            }
        }
    }
    // Changing display of Search Results from Hidden to flex
    sResults.style.display = "flex";
    sResults.style.flexDirection = "row";
    sResults.style.flexWrap = "wrap";
    sResults.getElementsByTagName("h2")[0].style.flexBasis = "100%";

    // Adding search results to the page
    for (var y = 0; y < foundItems.length; y++) {
        foundItems[y].style.marginTop = "10px";
        foundItems[y].style.marginBottom = "10px";
        sResults.appendChild(foundItems[y]);
    }

    // Debugging output
    //console.log("found items: " + foundItems)
    //console.log("found length: " + foundItems.length);
    //console.log("clItems length: " + clItems.length);
    //console.log(clItems)
    //console.log("Search Value: " + searchVal);
};

document.getElementById("searchForm").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("searchButton").click();
    }
});

document.getElementById("searchButton").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("searchButton").click();
    }
});

var button = document.getElementById("searchButton");
button.onclick = searchBar;