/**
 * @author Glizzy G <gliccy.g@outlook.com>
 * @copyright Glizzy G 2025. Freely under GPLv3.
 * 
 */
import Color from 'color';
import { createNoise2D } from 'simplex-noise';
import { BiColourNoise } from "./Background/Backgrounds.js";
import DropdownButton from "./Elements/DropdownButton.js";
import ScrollingBanner from './Elements/ScrollingBanner.js';

customElements.define("dropdown-button", DropdownButton);
customElements.define("scrolling-banner", ScrollingBanner);

const noise2D = createNoise2D();
const GenerateNoise = function (x, y, s = 1, e = 1, normalise = false) {
    let noise = noise2D(x / s, y / s);

    noise++;
    noise /= 2;
    noise = Math.pow(noise, e);

    if (!normalise) {
        noise << 1;
        noise--;
    }

    return noise;
}

const primaryColour = Color.hsl(Math.random() * 360, 70 + Math.random() * 30 - 30, 45 + Math.random() * 30);
const secondaryColour = primaryColour.darken(0.35);

document.getElementById("Content").style.backgroundColor = primaryColour.hsl().string();

// "More" Dropdown Button
const more = document.getElementById("More");
more.dropdown.style.backgroundColor = primaryColour.hsl().string();

more.button.addEventListener("click", function (e) {
    if (more.dropdownEnabled) {
        more.button.textContent = "☷";
    } else {
        more.button.textContent = "☰";
    }
});

const moreOptions = [{ text: "Settings", href: "settings.html" }];
for (let i = 0; i < moreOptions.length; i++) {
    var a = document.createElement("a");

    a.textContent = moreOptions[i].text;
    a.href = moreOptions[i].href;

    more.dropdown.appendChild(a);
}

// News Banner
const news = document.getElementById("NewsBanner");
news.displayElements = ["Hello, world!", "I love penis!"];
news.scrollRate = 40;

// Background canvas
const canvas = document.getElementById("Background");
BiColourNoise(canvas, GenerateNoise, secondaryColour, Color('black'), 50, 15);

// Animation updates
let lastUpdate = Date.now();
setInterval(() => {
    let now = Date.now();
    let deltaTime = (now - lastUpdate)/1000;

    news.update(deltaTime);

    lastUpdate = now;
}, 20);