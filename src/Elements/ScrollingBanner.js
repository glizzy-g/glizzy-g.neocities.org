class ScrollingBanner extends HTMLElement{
    constructor(){
        super();

        this.display;
        this.text;

        this.displayPosition;
    }

    connectedCallback(){
        this.style.display = "flex";

        this.text = "ASDF";

        this.displayPosition = 0;

        const shadow = this.attachShadow({mode:"open"});

        this.display = document.createElement("span");

        this.display.style.position = "absolute";

        this.display.innerText = this.text;

        shadow.appendChild(this.display);

        setInterval(() => {
            this.displayPosition -= 1;
            this.display.style.left = toString(this.displayPosition)+"px";
            if(this.display.clientLeft<(0-this.display.clientWidth)){
                this.display.clientLeft = this.clientWidth-this.display.clientWidth;
            }
        }, 1);
    }
}

export default ScrollingBanner;