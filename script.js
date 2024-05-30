const navLinkTitles = document.querySelectorAll(".nav-link-title");
const navBar = document.getElementById("navBar");
const btnHamburger = document.getElementById("btnHamburger");
const btnClose = document.getElementById("btnClose");

const toggleSubNavs = (navLinkTitle, i) => {
  const subNavLink = navLinkTitle.nextElementSibling;
  !navLinkTitle.parentElement.classList.contains("open")
    ? (subNavLink.style.maxHeight = `${subNavLink.scrollHeight + 32}px`)
    : (subNavLink.style.maxHeight = "0px");
  navLinkTitles.forEach((_navLinkTitle, _i) => {
    if (i !== _i) {
      const subNavLink = _navLinkTitle.nextElementSibling;
      _navLinkTitle.parentElement.classList.remove("open");
      if (subNavLink) subNavLink.style.maxHeight = "0px";
    }
  });
  navLinkTitle.parentElement.classList.toggle("open");
};

navLinkTitles.forEach((navLinkTitle, i) => {
  navLinkTitle.addEventListener("click", () => {
    toggleSubNavs(navLinkTitle, i);
  });
});

btnHamburger.addEventListener("click", () => navBar.classList.add("open"));
btnClose.addEventListener("click", () => navBar.classList.remove("open"));