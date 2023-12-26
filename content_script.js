async function copyTextToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

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

const sentence = (text) => {
  const text2 = text.toLowerCase()
  let splits = text2.split(". ");
  splits.forEach((x, i) => {
    splits[i] = capitalize(splits[i]);
  });
  var newS = splits.join(". ");
  return newS;
};

async function replaceSelectedText(newText) {
  const selection = window.getSelection();
  const focus =  document.activeElement;

  try {
    console.log("in try block")
    if(focus.tagName ==! "INPUT" || focus.isContentEditable){
      console.log("no input tag identified");
      if (selection.rangeCount) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(document.createTextNode(newText));
      }
    } else {
      console.log("Input tag identified");
      focus.value = newText;
      
    }
  } catch (error) {
    console.log("Error in replaceSelectionText : ",error);
  }

 
  }


//---------------------------------------------------------------------



chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("message received : ", message);
  if (message.textToTransform) {
    let text = "";
    switch (message.type) {
      case "upper":
        text = message.textToTransform.toUpperCase();
        break;
      case "lower":
        text = message.textToTransform.toLowerCase();
        break;
      case "capilatize":
        text = capitalize(message.textToTransform);
        break;
      case "camel":
        text = camelize(message.textToTransform);
        break;
      case "sentence":
        text = sentence(message.textToTransform);
        break;
      default:
        text = message.textToTransform;
    }
    
    replaceSelectedText(text);
    copyTextToClipboard(text);
  }

  sendResponse({ response: "200" });
});
