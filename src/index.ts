import { cube } from "./js/math.js";
import img from "./assets/avatar.jpeg";
import "./less/style.less";
import _ from "lodash";
import 'windi.css'

if (process.env.NODE_ENV !== "production") {
  console.log("We are in development mode!");
}

function component() {
  let element = document.createElement("div");
  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + cube(5)].join(
    "<br/>"
  );
  element.innerHTML = _.join(["a", "b"], "***");
  element.style.textAlign = "center";
  return element;
}
let container = document.getElementById("container");
let avatar = new Image();
avatar.src = img;
avatar.classList.add("avatar");
container.append(avatar);
container.appendChild(component());

avatar.onclick = function () {
  let div = document.createElement("div");
  div.classList.add("line");
  div.innerHTML = "这是新增的一行";
  container.appendChild(div);
};
