function cipher(text){
  var org = text.split('');
  var result = org.map(m);

  function m(a){
    temp = a.toUpperCase();
    var idk = temp.charCodeAt(0);
    var newidk = idk - 65 + 13;

    if (newidk >= 26) {
      newidk -= 26;
    }

    return String.fromCharCode(newidk + 65);
  }

  return result;
}

// You can assume that the text is only one word, all letters are capitalized, and the offset is always 13
var encrypted = cipher('GENIUS');

console.log(encrypted);