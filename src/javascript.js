import Color from 'color';
import { createNoise2D } from 'simplex-noise';
import { BiColourNoise } from "./Background/Backgrounds.js";

const primaryColour = Color.hsl(Math.random()*360, 40+Math.random()*30, 35+Math.random()*30);
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