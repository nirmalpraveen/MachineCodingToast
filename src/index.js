import "./styles.css";

const root = document.getElementById("app");

const toast = (text) => {
  const item = document.createElement("div");
  item.setAttribute("id", "toast");
  item.setAttribute(
    "style",
    "text-align: center;position: absolute; bottom: 0; right: 0; margin: 1rem;background-color: green;color: white;height: 20px;width: 200px"
  );
  item.textContent = text;
  return item;
};

const button = () => {
  const item = document.createElement("button");
  item.textContent = "Show Toast";
  item.setAttribute(
    "style",
    "position:absolute;top:50%;left:50%;transform: translate(-50%,-50%)"
  );
  item.addEventListener("click", function (event) {
    setTimeout(() => {
      root.appendChild(toast("hey, you"));
    }, 1000);
    setTimeout(() => {
      root.removeChild(document.getElementById("toast"));
    }, 4000);
  });
  return item;
};

root.appendChild(button());
