var browser = browser || chrome;

browser.contextMenus.create({
  id: "stockfinder",
  title: "Search stock...",
  contexts: ["selection"]
});


var chosenSite = "https://www.marketwatch.com/investing/stock/";

browser.contextMenus.onClicked.addListener((info, tab) => {
	browser.storage.local.get("chosenSite", function(result) {
		if(result != undefined && result.chosenSite != undefined)
			chosenSite = result.chosenSite;
		browser.tabs.create({url: chosenSite + info.selectionText});
	});	
});