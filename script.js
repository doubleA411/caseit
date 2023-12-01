chrome.runtime.onInstalled.addListener(function () {
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
});

const capitalize = (text) => {
  var splits = text.split(" ");
  var first = splits[0].charAt(0).toUpperCase() + splits[0].slice(1);
  splits[0] = first;
  var newS = splits.join(" ");
  return newS;
};

const camelize = (text) => {
  let splits = text.split(" ");
  splits.forEach((x, i) => {
    splits[i] = splits[i].charAt(0).toUpperCase() + splits[i].slice(1);
  });

  var newS = splits.join(" ");
  return newS;
};

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  var newText = "";
  if (info.menuItemId && info.menuItemId === "upper") {
    var selectedText = info.selectionText;
    newText = selectedText.toString().toUpperCase();
    console.log(newText);
  }
  if (info.menuItemId && info.menuItemId === "lower") {
    var selectedText = info.selectionText;
    newText = selectedText.toString().toLowerCase();
    console.log(newText);
  }

  if (info.menuItemId && info.menuItemId === "capitalize") {
    var selectedText = info.selectionText;
    newText = capitalize(selectedText);
    console.log(newText);
  }

  if (info.menuItemId && info.menuItemId === "camel") {
    var selectedText = info.selectionText;
    newText = camelize(selectedText);
    console.log(newText);
  }
});
