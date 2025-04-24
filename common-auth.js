/* Tab ID (identificator unic pentru fiecare tab) */
const TAB_ID_KEY = 'capybankTabId';
let tabId = sessionStorage.getItem(TAB_ID_KEY);
if (!tabId) {
  tabId = crypto.randomUUID();
  sessionStorage.setItem(TAB_ID_KEY, tabId);
}
window.TAB_ID = tabId;

/* Session helpers (stocare per-tab) */
function setUser(u) {
  const sess = JSON.parse(localStorage.getItem('sessions') || '{}');
  sess[tabId] = u;
  localStorage.setItem('sessions', JSON.stringify(sess));
}
function getUser() {
  const sess = JSON.parse(localStorage.getItem('sessions') || '{}');
  return sess[tabId] || null;
}
function logout() {
  const sess = JSON.parse(localStorage.getItem('sessions') || '{}');
  delete sess[tabId];
  localStorage.setItem('sessions', JSON.stringify(sess));
  location.replace('login.html');
}

/* Realtime updates (cereri) */
window.capyChan = new BroadcastChannel('capybank');
