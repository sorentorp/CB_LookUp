// result is an array of objects if header row is specified, otherwise it is an array of arrays
//var result = Utils.gvizQuery(
//    "[YOUR_SPREADSHEET_ID]", 
//    "[YOUR_QUERY_STRING]", 
//    [SHEET_ID_IF_NEEDED], // can be a number (the sheetId), or the name of the sheet; if not needed, but headers are, pass in undefined
//    [RANGE], // specify range, ex: `A2:O`
//    [HEADER_ROW_INDEX_IF_NEEDED] // always a number
//);

function queryUserDevices(uname) {
  var userinfoin = uname;
  if (!userinfoin.trim()) {{var userinfo = "No user"};}
  else {{var userinfo = userinfoin}
  var qUser = "select B,C,D,E where C = '" + userinfo + "'";//You can select any four columns you want to be in the result
  var result = Utils.gvizQuery(
    "********insert*documentid***************",
    qUser,
    "Devices",
    "B2:E");//If you change the query above, you may also need to change this range. Remember to edit the column headers, if you do.
  } 
 // Logger.log([userinfo, result]);// Logging both incoming email address and result to console. Can be disabled.
  return [result];
}



