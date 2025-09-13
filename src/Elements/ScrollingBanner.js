/**
 * @author Glizzy G <gliccy.g@outlook.com>
 * @copyright Glizzy G 2025. Freely under GPLv3.
 * 
 */


/**
 * Replacement for <marquee>
 *
 * @class ScrollingBanner
 * @typedef {ScrollingBanner}
 * @extends {HTMLElement}
 */
class ScrollingBanner extends HTMLElement {

    /**
     * Creates an instance of ScrollingBanner.
     *
     * @constructor
     */
    constructor() {
        super();

        /**
         * @member {number} scrollPosition - Tracks distance scrolled
         * @private
         */
        this.scrollPosition = 0.0;
        /**
         * @member {number} scrollRate - Rate at which the display should scroll.
         */
        this.scrollRate = 1.0;

        this.displayElements = [""];
        this.currentElementIndex = 0;

        this.bezel;
        this.display;
    }

    connectedCallback() {
        // Border around moving text to hide overflow
        this.bezel = document.createElement("div");
        this.bezel.style.overflow = "hidden";

        // Creates a span for each item in the list
        this.display = document.createElement("span");
        this.display.style.position = "relative";
        this.display.style.left = this.scrollPosition.toString() + "px";
        this.display.style.whiteSpace = "preserve nowrap"

        this.display.textContent = this.displayElements[this.currentElementIndex];

        // Attach to DOM
        this.bezel.appendChild(this.display);
        this.appendChild(this.bezel);
    }

    update(factor = 1) {
        this.scrollPosition -= (this.scrollRate * factor);

        if (this.scrollPosition < 0 - this.display.offsetWidth) {
            this.display.style.left = "100%";
            this.scrollPosition = this.bezel.clientWidth;
            this.nextElement();
        } else {
            this.display.style.left = this.scrollPosition.toString() + "px";
        }
    }

    nextElement() {
        if (this.currentElementIndex == this.displayElements.length - 1) {
            this.currentElementIndex = 0;
        } else {
            this.currentElementIndex++;
        }
        this.display.textContent = this.displayElements[this.currentElementIndex];
    }
}

export default ScrollingBanner;