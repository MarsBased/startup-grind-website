import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

export default class MenuController extends Controller {
  static targets = ["content"];

  toggle() {
    const target = this.contentTarget;
    const visible = target.style.display === "block";

    document.body.classList.toggle("is-menu-open");

    if (visible) {
      target.style.display = "none";
    } else {
      target.style.display = "block";
    }
  }
}
