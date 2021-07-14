const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = ` <div class="key">
  ${e.key === " " ? "space" : e.key}
  <small>event.key</small>
</div>

<div class="key">
  ${e.Keycode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${e.code}
  <small>event.code</small>
</div>
<div class="key">
Press any key to get the KeyCode
<small>event.code</small>
</div>`;
});
