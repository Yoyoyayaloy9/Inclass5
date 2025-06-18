// ADD NEW ITEM TO END OF LIST
var newEndItem = document.createElement("li");
newEndItem.textContent = "cream";
document.querySelector("ul").appendChild(newEndItem);

// ADD NEW ITEM START OF LIST
var newStartItem = document.createElement("li");
newStartItem.textContent = "kale";
document.querySelector("ul").insertBefore(newStartItem, document.querySelector("ul").firstElementChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.querySelectorAll("li");
for (var i = 0; i < listItems.length; i++) {
  listItems[i].classList.add("cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING (h2 > span)
var heading = document.querySelector("h2");
var countSpan = document.createElement("span");
countSpan.textContent = listItems.length;
heading.appendChild(countSpan);