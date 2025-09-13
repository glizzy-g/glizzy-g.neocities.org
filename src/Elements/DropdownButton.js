/**
 * @author Glizzy G <gliccy.g@outlook.com>
 * @copyright Glizzy G 2025. Freely under GPLv3.
 * 
 */

class DropdownButton extends HTMLElement{
    constructor(){
        super();

        this.button;
        this.dropdown;
        this.dropdownEnabled = false;
    }

    connectedCallback(){
        const shadow = this.attachShadow({mode:"open"});

        this.button = document.createElement("button");
        this.dropdown = document.createElement("div");

        this.button.part = "button";
        this.dropdown.part = "dropdown";

        this.button.textContent = this.textContent;

        this.dropdown.style.cssText = "position:absolute;border-radius:3px;border:solid 2px black;visibility:hidden;padding:4px;z-index:1";

        this.button.addEventListener("click", (e)=>{
            this.dropdownEnabled = !this.dropdownEnabled;
            if(this.dropdownEnabled){
                this.dropdown.style.visibility = "visible";
            }else{
                this.dropdown.style.visibility = "hidden";
            }
        });
        this.addEventListener("mouseenter", function(e){
            this.dropdown.style.visibility = "visible";
        });
        this.addEventListener("mouseleave", function(e){
            if(!this.dropdownEnabled){
                this.dropdown.style.visibility = "hidden";
            }
        });

        shadow.appendChild(this.button);
        shadow.appendChild(this.dropdown);
    }
}

export default DropdownButton;