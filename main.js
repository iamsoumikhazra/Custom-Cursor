const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("nav ul li a");


document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top:" + (e.pageY - 15.4) + "px; left:" + (e.pageX - 15.4) + "px;"
  );
});

