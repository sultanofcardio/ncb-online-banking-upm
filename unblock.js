const allow = (e) => {
  e.stopImmediatePropagation();
  return true;
};

document.addEventListener('paste', allow, true);
document.addEventListener('contextmenu', allow, true);
document.getElementById('AuthenticationFG.ACCESS_CODE').removeAttribute('autocomplete');
