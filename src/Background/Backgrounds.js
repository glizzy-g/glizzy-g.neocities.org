/**
 * @author Glizzy G <gliccy.g@outlook.com>
 * @copyright Glizzy G 2025. Freely under GPLv3.
 * 
 */

import Color from 'color';

export function BiColourNoise(canvas, noise, peak, trough, scale, exponent){
    const context = canvas.getContext('2d');

    const image = context.createImageData(canvas.width, canvas.height);

    for(let x=0; x<canvas.width; x++){
        for(let y=0; y<canvas.height; y++){
            const level = noise(x, y, scale, exponent, true);

            const pixel = trough.mix(peak, level);

            const subpixelIndex = (x+y*canvas.width)*4;
            image.data[subpixelIndex] = pixel.red();
            image.data[subpixelIndex + 1] = pixel.green();
            image.data[subpixelIndex + 2] = pixel.blue();
            image.data[subpixelIndex + 3] = pixel.alpha()*255;
        }
    }
    context.putImageData(image, 0, 0);
}

export function NoiseGalaxies(canvas, noise, peak, trough, scale, exponent){
    const context = canvas.getContext('2d');

    for(let x=0; x<width; x++){
        for(let y=0; y<height; y++){

            const noise = NormalNoise2d(x/scale, y/scale, noise2D);
            const noiseBorder = [NormalNoise2d((x-1)/scale, y/scale, noise2D), NormalNoise2d((x+1)/scale, y/scale, noise2D), NormalNoise2d(x/scale, (y-1)/scale, noise2D), NormalNoise2d(x/scale, (y+1)/scale, noise2D), NormalNoise2d((x-1)/scale, (y-1)/scale, noise2D), NormalNoise2d((x+1)/scale, (y-1)/scale, noise2D), NormalNoise2d((x-1)/scale, (y+1)/scale, noise2D), NormalNoise2d((x+1)/scale, (y+1)/scale, noise2D)];

            if(!noiseBorder.some(border => border>=noise)){
                const image = document.createElement("img");
                image.src = "Background/0.png";

                image.onload = function(){
                    const imageWidth = (image.naturalWidth/image.naturalHeight)*Math.pow(noise, 2);
                    const imageHeight = (image.naturalHeight/image.naturalWidth)*Math.pow(noise, 2);
                    
                    context.drawImage(image, x-imageWidth/2, y-imageHeight/2, imageWidth, imageHeight);
                };
            }
        }
    }
}