var paymentPlan = document.getElementById('paymentPlan'),
  lostcard = document.getElementById('lostCard'),
  PSTAT2 = document.getElementById('PSTAT2'),
  calendarAnnouncements = document.getElementById('calendarAnnouncements'),
  problemItem = document.getElementById('problemItem'),
  shortcut1 = document.getElementById('shortcut1'),
  shortcut2 = document.getElementById('shortcut2'),
  shortcut3 = document.getElementById('shortcut3'),
  shortcut4 = document.getElementById('shortcut4'),
  shortcut5 = document.getElementById('shortcut5'),
  shortcut6 = document.getElementById('shortcut6'),
  prefs = document.getElementById('prefs');

if (paymentPlan) paymentPlan.addEventListener('click', function() {
  chrome.runtime.sendMessage({"key": "addNote"});
});

if (lostcard) lostcard.addEventListener('click', function() {
  chrome.runtime.sendMessage({"key": "addLostCardNote"});
});

if (PSTAT2) PSTAT2.addEventListener('click', function() {
  chrome.runtime.sendMessage({"key": "alternatePSTAT"});
});

if (problemItem) problemItem.addEventListener('click', function() {
  chrome.tabs.create({
    "url": chrome.runtime.getURL("../problemItemForm/problemItemForm.html")
  });
});

if (prefs) prefs.addEventListener('click', function() {
  chrome.runtime.openOptionsPage();
});

/** Generate shortcut options **/
chrome.storage.sync.get('shortcutText1',function(res) {
  shortcut1.textContent = res.shortcutText1;
});
chrome.storage.sync.get('shortcutLink1',function(res) {
  if (res.shortcutLink1) {
    shortcut1.href = res.shortcutLink1;
	if (shortcut1.textContent == "") {
	  shortcut1.textContent = res.shortcutLink1;
	}
  } else {
    shortcut1.style.display = "none";
  }
});
chrome.storage.sync.get('shortcutText2',function(res) {
  shortcut2.textContent = res.shortcutText2;
});
chrome.storage.sync.get('shortcutLink2',function(res) {
  if (res.shortcutLink2) {
    shortcut2.href = res.shortcutLink2;
	if (shortcut2.textContent == "") {
	  shortcut2.textContent = res.shortcutLink2;
	}
  } else {
    shortcut2.style.display = "none";
  }
});
chrome.storage.sync.get('shortcutText3',function(res) {
  shortcut3.textContent = res.shortcutText3;
});
chrome.storage.sync.get('shortcutLink3',function(res) {
  if (res.shortcutLink3) {
    shortcut3.href = res.shortcutLink3;
	if (shortcut3.textContent == "") {
	  shortcut3.textContent = res.shortcutLink3;
	}
  } else {
    shortcut3.style.display = "none";
  }
});
chrome.storage.sync.get('shortcutText4',function(res) {
  shortcut4.textContent = res.shortcutText4;
});
chrome.storage.sync.get('shortcutLink4',function(res) {
  if (res.shortcutLink4) {
    shortcut4.href = res.shortcutLink4;
	if (shortcut4.textContent == "") {
	  shortcut4.textContent = res.shortcutLink4;
	}
  } else {
    shortcut4.style.display = "none";
  }
});
chrome.storage.sync.get('shortcutText5',function(res) {
  shortcut5.textContent = res.shortcutText5;
});
chrome.storage.sync.get('shortcutLink5',function(res) {
  if (res.shortcutLink5) {
    shortcut5.href = res.shortcutLink5;
	if (shortcut5.textContent == "") {
	  shortcut5.textContent = res.shortcutLink5;
	}
  } else {
    shortcut5.style.display = "none";
  }
});
chrome.storage.sync.get('shortcutText6',function(res) {
  shortcut6.textContent = res.shortcutText6;
});
chrome.storage.sync.get('shortcutLink6',function(res) {
  if (res.shortcutLink6) {
    shortcut6.href = res.shortcutLink6;
	if (shortcut6.textContent == "") {
	  shortcut6.textContent = res.shortcutLink6;
	}
  } else {
    shortcut6.style.display = "none";
  }
});
