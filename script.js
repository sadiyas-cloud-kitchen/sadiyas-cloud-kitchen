const tabs = document.querySelectorAll(".tab");
const groups = document.querySelectorAll(".menu-group");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    groups.forEach(g => g.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});
