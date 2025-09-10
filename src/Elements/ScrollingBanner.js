class ScrollingBanner extends HTMLElement{
    constructor(){
        super();

        this.left;
        this.right;
        this.text;
    }

    connectedCallback(){
        this.style.display = "flex";

        const shadow = this.attachShadow({mode:"open"});

        this.left = document.createElement("span");
        this.right = document.createElement("span");

        this.right.style.marginLeft = "auto";

        this.left.innerText = "AS";
        this.right.innerText = "DF";

        shadow.appendChild(this.left);
        shadow.appendChild(this.right);

        setInterval(() => {
            
        }, interval);
    }
}

export default ScrollingBanner;