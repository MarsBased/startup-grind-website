import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

export default class FaqController extends Controller {
  static targets = ["content", "collapsable"];

  static values = { default: Boolean }

  connect() {
    if (this.defaultValue) {
      this.collapsableTarget.style.maxHeight = this.contentTarget.clientHeight + "px";
    }
  }

  open() {
    this.element.classList.add("is-open");
    this.collapsableTarget.style.maxHeight = this.contentTarget.clientHeight + "px";
    this.element.setAttribute("data-action", "click->faq#close");
  }

  close() {
    this.element.classList.remove("is-open");
    this.collapsableTarget.style.maxHeight = "0px";
    this.element.setAttribute("data-action", "click->faq#open");
  }
}
