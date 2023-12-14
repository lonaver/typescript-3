import { personOpenDoor } from "./4";

const button = document.querySelector("button")!;

if (button) {
  button.addEventListener("click", () => {
    personOpenDoor();
  });
}
