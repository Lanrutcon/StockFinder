var browser = browser || chrome;

var sites = ["https://www.marketwatch.com/investing/stock/", "https://finance.yahoo.com/quote/", "https://www.nasdaq.com/market-activity/stocks/"]

document.addEventListener("click", function(e) {
	if (!e.target.classList.contains("websiteStock"))
		return;

	var chosenPage = sites[document.getElementById(e.target.id).getAttribute("order")];
	
	var storeValue = { "chosenSite": chosenPage };
	browser.storage.local.set(storeValue);
	
	document.getElementsByClassName("active")[0].classList.remove("active");
	e.target.classList.add("active");
});

window.addEventListener("load", function() {
	browser.storage.local.get("chosenSite", function(result) {
		if(result != undefined && result.chosenSite != undefined) {
			document.getElementsByClassName("websiteStock")[sites.indexOf(result.chosenSite)].classList.add("active");
		}
	});
});