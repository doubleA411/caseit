const contextMenuItems = [
  { title: "Uppercase", id: "upper" },
  { title: "Lowercase", id: "lower" },
  { title: "Capitalize", id: "capitalize" },
  { title: "Camelcase", id: "camel" },
  { title: "Sentence case", id: "sentence" },
];

// Create context menu items
contextMenuItems.forEach((item) => {
  chrome.contextMenus.create({
    title: item.title,
    contexts: ["selection"],
    id: item.id,
  });
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
      }, (response) => {
        if (chrome.runtime.lastError) {
          console.error("Message failed to send:", chrome.runtime.lastError.message);
        } else {
          console.log("Message sent : ", response);
        }
      });
    }
  });
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
