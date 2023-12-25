chrome.contextMenus.create({
  title: "Uppercase",
  contexts: ["selection"],
  id: "upper",
});
chrome.contextMenus.create({
  title: "Lowercase",
  contexts: ["selection"],
  id: "lower",
});

chrome.contextMenus.create({
  title: "Capitalize",
  contexts: ["selection"],
  id: "capitalize",
});

chrome.contextMenus.create({
  title: "Camelcase",
  contexts: ["selection"],
  id: "camel",
});

chrome.contextMenus.create({
  title: "Sentence case",
  contexts: ["selection"],
  id: "sentence",
});

const sendTransformedTextToContentScript = (text, transformation) => {
  console.log("started... to transfer");
  // Get the active tab to send the message to the content script
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    if (activeTab) {
      chrome.tabs.sendMessage(activeTab.id, {
        textToTransform: text,
        type: transformation,
      });
    }
  });
  console.log("transfer complete");
};

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  // var newText = "";
  if (info.menuItemId && info.menuItemId === "upper") {
    var selectedText = info.selectionText;
    // newText = selectedText.toString().toUpperCase();
    sendTransformedTextToContentScript(selectedText, "upper");
    console.log(selectedText);
  }
  if (info.menuItemId && info.menuItemId === "lower") {
    var selectedText = info.selectionText;
    // newText = selectedText.toString().toLowerCase();
    sendTransformedTextToContentScript(selectedText, "lower");
    console.log(selectedText);
  }

  if (info.menuItemId && info.menuItemId === "capitalize") {
    var selectedText = info.selectionText;
    // newText = capitalize(selectedText);
    sendTransformedTextToContentScript(selectedText, "capitalize");
    console.log(selectedText);
  }

  if (info.menuItemId && info.menuItemId === "camel") {
    var selectedText = info.selectionText;
    
    // newText = camelize(selectedText);
    sendTransformedTextToContentScript(selectedText, "camel");
    console.log(selectedText);
  }
  if (info.menuItemId && info.menuItemId === "sentence") {
    var selectedText = info.selectionText;
    // newText = sentence(selectedText);
    sendTransformedTextToContentScript(selectedText, "sentence");
    console.log(selectedText);
  }
});

// chrome.commands.onCommand.addListener((command) => {

// });
