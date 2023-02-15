(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // js/index.js
  var import_stimulus4 = __require("https://unpkg.com/@hotwired/stimulus/dist/stimulus.js");

  // js/controllers/cookies_controller.js
  var import_stimulus = __require("https://unpkg.com/@hotwired/stimulus/dist/stimulus.js");
  var import_esm = __toESM(__require("https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/+esm"));
  var CookiesController = class extends import_stimulus.Controller {
    connect() {
      if (!import_esm.default.get("mb_cookies_accepted")) {
        document.body.classList.add("cookies-show");
      }
    }
    accept() {
      import_esm.default.set("mb_cookies_accepted", "true", { expires: 365 });
      document.body.classList.remove("cookies-show");
    }
  };

  // js/controllers/menu_controller.js
  var import_stimulus2 = __require("https://unpkg.com/@hotwired/stimulus/dist/stimulus.js");
  var MenuController = class extends import_stimulus2.Controller {
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
  };
  __publicField(MenuController, "targets", ["content"]);

  // js/controllers/faq_controller.js
  var import_stimulus3 = __require("https://unpkg.com/@hotwired/stimulus/dist/stimulus.js");
  var FaqController = class extends import_stimulus3.Controller {
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
  };
  __publicField(FaqController, "targets", ["content", "collapsable"]);
  __publicField(FaqController, "values", { default: Boolean });

  // js/index.js
  var application = import_stimulus4.Application.start();
  application.register("cookies", CookiesController);
  application.register("menu", MenuController);
  application.register("faq", FaqController);
})();
//# sourceMappingURL=index.js.map
