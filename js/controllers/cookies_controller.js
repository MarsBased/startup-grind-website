import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";
import jsCookie from "https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/+esm";

export default class CookiesController extends Controller {
  connect() {
    if (!jsCookie.get("mb_cookies_accepted")) {
      document.body.classList.add("cookies-show");
    }
  }

  accept() {
    jsCookie.set('mb_cookies_accepted', 'true', { expires: 365 });

    document.body.classList.remove("cookies-show");
  }
}
