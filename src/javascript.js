import Color from 'color';
import { createNoise2D } from 'simplex-noise';
import { BiColourNoise } from "./Background/Backgrounds.js";
import DropdownButton from "./Elements/DropdownButton.js";
import ScrollingBanner from './Elements/ScrollingBanner.js';

const primaryColour = Color.hsl(Math.random()*360, 70+Math.random()*30-30, 45+Math.random()*30);
const secondaryColour = primaryColour.darken(0.35);

const noise2D = createNoise2D();
const GenerateNoise = function (x, y, s=1, e=1, normalise=false){
    let noise = noise2D(x/s, y/s);

    noise++;
    noise /= 2;
    noise = Math.pow(noise, e);

    if(!normalise){
        noise << 1;
        noise--;
    }

    return noise;
}

const canvas = document.getElementById("Background");

BiColourNoise(canvas, GenerateNoise, secondaryColour, Color('black'), 50, 15);

document.getElementById("Content").style.backgroundColor = primaryColour.hsl().string();

customElements.define("dropdown-button", DropdownButton);

const more = document.getElementById("More");

more.button.addEventListener("click", function(e){
    if(more.dropdownEnabled){
        more.button.textContent = "☷";
    }else{
        more.button.textContent = "☰";
    }
});

const moreOptions = [{text:"Settings",href:"settings.html"}];
for(let i=0; i<moreOptions.length; i++){
    var a = document.createElement("a");

    a.textContent = moreOptions[i].text;
    a.href = moreOptions[i].href;

    more.dropdown.appendChild(a);
}

more.dropdown.style.backgroundColor = primaryColour.hsl().string();

customElements.define("scrolling-banner", ScrollingBanner);