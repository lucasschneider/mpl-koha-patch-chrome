chrome.storage.sync.get(null, function(res) {
  if (!res.hasOwnProperty('skin')) {
    chrome.storage.sync.set({"skin": "MAD"});
  }
  if (!res.hasOwnProperty('patronMsg')) {
    chrome.storage.sync.set({"patronMsg": true});
  }
  if (!res.hasOwnProperty('parseAddr')) {
    chrome.storage.sync.set({"parseAddr": true});
  }
  if (!res.hasOwnProperty('autoBarcode')) {
    chrome.storage.sync.set({"autoBarcode": true});
  }
  if (!res.hasOwnProperty('lookupPSTAT')) {
    chrome.storage.sync.set({"lookupPSTAT": true});
  }
  if (!res.hasOwnProperty('digestOnly')) {
    chrome.storage.sync.set({"digestOnly": true});
  }
  if (!res.hasOwnProperty('dueDateToggle')) {
    chrome.storage.sync.set({"dueDateToggle": true});
  }
  if (!res.hasOwnProperty('middleInitials')) {
    chrome.storage.sync.set({"middleInitials": true});
  }
  if (!res.hasOwnProperty('updateAccountType')) {
    chrome.storage.sync.set({"updateAccountType": true});
  }
  if (!res.hasOwnProperty("cdams")) {
    chrome.storage.sync.set({"cdams": true});
  }
  if (!res.hasOwnProperty("cdamsid")) {
    chrome.storage.sync.set({"cdamsid": true});
  }
  if (!res.hasOwnProperty("cdjms")) {
    chrome.storage.sync.set({"cdjms": true});
  }
  if (!res.hasOwnProperty("cdyms")) {
    chrome.storage.sync.set({"cdyms": true});
  }
  if (!res.hasOwnProperty("dbrafe")) {
    chrome.storage.sync.set({"dbrafe": false});
  }
  if (!res.hasOwnProperty("dbraff")) {
    chrome.storage.sync.set({"dbraff": false});
  }
  if (!res.hasOwnProperty("dbraid")) {
    chrome.storage.sync.set({"dbraid": false});
  }
  if (!res.hasOwnProperty("dbranf")) {
    chrome.storage.sync.set({"dbranf": false});
  }
  if (!res.hasOwnProperty("dbrarn")) {
    chrome.storage.sync.set({"dbrarn": false});
  }
  if (!res.hasOwnProperty("dbratv")) {
    chrome.storage.sync.set({"dbratv": false});
  }
  if (!res.hasOwnProperty("dbrj")) {
    chrome.storage.sync.set({"dbrj": false});
  }
  if (!res.hasOwnProperty("dvdafe")) {
    chrome.storage.sync.set({"dvdafe": false});
  }
  if (!res.hasOwnProperty("dvdaff")) {
    chrome.storage.sync.set({"dvdaff": false});
  }
  if (!res.hasOwnProperty("dvdaid")) {
    chrome.storage.sync.set({"dvdaid": false});
  }
  if (!res.hasOwnProperty("dvdanf")) {
    chrome.storage.sync.set({"dvdanf": false});
  }
  if (!res.hasOwnProperty("dvdarn")) {
    chrome.storage.sync.set({"dvdarn": false});
  }
  if (!res.hasOwnProperty("dvdatv")) {
    chrome.storage.sync.set({"dvdatv": false});
  }
  if (!res.hasOwnProperty("dvdawl")) {
    chrome.storage.sync.set({"dvdawl": false});
  }
  if (!res.hasOwnProperty("dvdjfe")) {
    chrome.storage.sync.set({"dvdjfe": false});
  }
  if (!res.hasOwnProperty("dvdjhl")) {
    chrome.storage.sync.set({"dvdjhl": false});
  }
  if (!res.hasOwnProperty("dvdjnf")) {
    chrome.storage.sync.set({"dvdjnf": false});
  }
  if (!res.hasOwnProperty("dvdjwl")) {
    chrome.storage.sync.set({"dvdjwl": false});
  }
  if (!res.hasOwnProperty("dvdyfe")) {
    chrome.storage.sync.set({"dvdyfe": false});
  }
  if (!res.hasOwnProperty("vga")) {
    chrome.storage.sync.set({"vga": false});
  }
  if (!res.hasOwnProperty("vgj")) {
    chrome.storage.sync.set({"vgj": false});
  }
  if (!res.hasOwnProperty("vgy")) {
    chrome.storage.sync.set({"vgy": false});
  }
  if (!res.hasOwnProperty("soa")) {
    chrome.storage.sync.set({"soa": false});
  }
  if (!res.hasOwnProperty("soawl")) {
    chrome.storage.sync.set({"soawl": false});
  }
  if (!res.hasOwnProperty("soj")) {
    chrome.storage.sync.set({"soj": false});
  }
  if (!res.hasOwnProperty("sepAllCD")) {
    chrome.storage.sync.set({"sepAllCD": true});
  }
  if (!res.hasOwnProperty("sepAllDVD")) {
    chrome.storage.sync.set({"sepAllDVD": false});
  }
  if (!res.hasOwnProperty("sepOther")) {
    chrome.storage.sync.set({"sepOther": false});
  }
  if (!res.hasOwnProperty('receiptFont')) {
    chrome.storage.sync.set({"receiptFont": "MPL"});
  }
  if (!res.hasOwnProperty('sundayDropbox')) {
    chrome.storage.sync.set({"sundayDropbox": true});
  }
  if (!res.hasOwnProperty('shortcutText1') || !res.hasOwnProperty('shortcutLink1')) {
    chrome.storage.sync.set({
      "shortcutText1": "Koha—Checkin",
      "shortcutLink1": "http://scls-staff.kohalibrary.com/cgi-bin/koha/circ/returns.pl"
    });
  }
  if (!res.hasOwnProperty('shortcutText2') || !res.hasOwnProperty('shortcutLink2')) {
    chrome.storage.sync.set({
      "shortcutText2": "Koha—Checkout",
      "shortcutLink2": "http://scls-staff.kohalibrary.com/cgi-bin/koha/circ/circulation.pl"
    });
  }
  if (!res.hasOwnProperty('shortcutText3') || !res.hasOwnProperty('shortcutLink3')) {
    chrome.storage.sync.set({
      "shortcutText3": "American Fact Finder",
      "shortcutLink3": "http://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml?refresh=t"
    });
  }
  if (!res.hasOwnProperty('shortcutText4') || !res.hasOwnProperty('shortcutLink4')) {
    chrome.storage.sync.set({
      "shortcutText4": "MPL Home Page",
      "shortcutLink4": "http://madisonpubliclibrary.org"
    });
  }
  if (!res.hasOwnProperty('shortcutText5') || !res.hasOwnProperty('shortcutLink5')) {
    chrome.storage.sync.set({
      "shortcutText5": "MPLnet",
      "shortcutLink5": "http://www.mplnet.org"
    });
  }
  if (!res.hasOwnProperty('shortcutText6') || !res.hasOwnProperty('shortcutLink6')) {
    chrome.storage.sync.set({
      "shortcutText6": "MPL Reference Tools",
      "shortcutLink6": "http://www.madisonpubliclibrary.org/research/referenc2"
    });
  }
});
