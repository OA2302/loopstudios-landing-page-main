function showMenu() {
    document.getElementById("nav").innerHTML = `
    <div class="logo">
    <img src="./images/logo.svg" alt="logo">
  </div>
  <nav id="drop" >
    <ul class="ul">
    <li><a href="#">About</a></li>
    <li> <a href="#">Careers</a></li>
    <li><a href="#">Events</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">Support</a></li>
  </ul>
  </nav>
    <button class="menu">
    <a href="" onclick="goback()">
    <img src="./images/icon-close.svg" alt="icon-menu-close">
    </a>
    </button>
        `
}