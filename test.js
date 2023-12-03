const capitalize = (text) => {
  var splits = text.split(" ");
  var first = splits[0].charAt(0).toUpperCase() + splits[0].slice(1);
  splits[0] = first;
  var newS = splits.join(" ");
  return newS;
};

var sent =
  "zoomed eyedropper & color chooser tool that. zoomed eyedropper & color chooser tool that. zoomed eyedropper & color chooser tool that. zoomed eyedropper & color chooser tool that. zoomed eyedropper & color chooser tool that. zoomed eyedropper & color chooser tool that.";

const camelize = (text) => {
  let splits = text.split(" ");
  splits.forEach((x, i) => {
    splits[i] = x.charAt(0).toUpperCase() + x.slice(1);
  });
  console.log(splits);
};

const sentence = (text) => {
  let splits = text.split(". ");
  splits.forEach((x, i) => {
    splits[i] = capitalize(splits[i]);
  });
  var newS = splits.join(". ");
  console.log(newS);
};

// sentence(sent);
// console.log(sent.split(".")[1][0]);
