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
