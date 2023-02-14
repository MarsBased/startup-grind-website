import { Application } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";
import CookiesController from "./controllers/cookies_controller.js";
import MenuController from "./controllers/menu_controller.js";
import FaqController from "./controllers/faq_controller.js";

const application = Application.start();
application.register("cookies", CookiesController);
application.register("menu", MenuController);
application.register("faq", FaqController);
