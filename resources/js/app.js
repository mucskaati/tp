require("./bootstrap");

import CreateKey from "./components/CreateKeyComponent";

window.$ = require("jquery");

require("datatables.net-dt");
require("datatables.net-fixedheader-dt");
require("./custom-datatable.js");

import Latinize from "latinize";
window.latinize = Latinize;

/* Photo Swipe Lightbox */
import PhotoSwipeLightbox from "./photoswipe-lightbox.esm.js";
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";
import "../css/photoswipe.css";
import "photoswipe-dynamic-caption-plugin";

const lightboxImages = document.querySelectorAll("#nomenclator-gallery img");
lightboxImages.forEach((image) => {
    if (image.parentElement.tagName.toLowerCase() == "a") {
        image.parentElement.dataset.pswpWidth = image.naturalWidth;
        image.parentElement.dataset.pswpHeight = image.naturalHeight;
    }
});

const lightbox = new PhotoSwipeLightbox({
    gallery: "#nomenclator-gallery",
    children: "a",
    pswpModule: () => import("./photoswipe.esm.js"),
});
const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
    type: "below",
    captionContent: ".pswp-caption-content",
});
lightbox.init();

//Components
/* import Vue from "vue";
Vue.component(
    "create-key",
    require("./components/CreateKeyComponent.vue").default
);

const app = new Vue({
    el: "#app",
}); */
