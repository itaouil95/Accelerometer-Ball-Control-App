module.exports = (len) => {

  var text = "";
  const possible = 'abcdefghilmnopqrs0123456789';

  for (let i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * len));
  }

  return text;

}
