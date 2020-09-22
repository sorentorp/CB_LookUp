function doGet(e){
  
  var t = HtmlService.createTemplateFromFile("page");
  return t.evaluate().setTitle("Find Chromebook");
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
