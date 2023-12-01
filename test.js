const capitalize = (text) => {
  var splits = text.split(" ");
  var first = splits[0].charAt(0).toUpperCase() + splits[0].slice(1);
  splits[0] = first;
  var newS = splits.join(" ");
  console.log(newS);
};

var sent = "zoomed eyedropper & color chooser tool that";

const camelize = (text) => {
  let splits = text.split(" ");
  splits.forEach((x, i) => {
    splits[i] = splits[i].charAt(0).toUpperCase() + splits[i].slice(1);
  });
  console.log(splits);
};

camelize(sent);
