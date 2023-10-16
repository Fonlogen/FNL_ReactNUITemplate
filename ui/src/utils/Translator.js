let dictionary = {
  'home_page_text': 'Home component',
}

function TranslateStr(input) {
  return dictionary[input] || input;
}

export default TranslateStr;