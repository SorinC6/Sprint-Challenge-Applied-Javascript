class Carousel {
    constructor(element){
        this.element=element;
        //console.log(element);

        //getting images for the carousel
        this.slideImages=this.element.querySelectorAll('img');
        this.slides=Array.from(this.slideImages);
        // console.log(this.slideImages);

        //getting la buttons 
        this.buttonRight=this.element.querySelector('.right-button');
        // console.log(this.buttonRight);
        this.buttonLeft=this.element.querySelector('.left-button');
        // console.log(this.buttonLeft);

        this.count = 0;
        this.activeSlide = this.slides[this.count];
        this.showPictures(this.activeSlide);
        this.buttonRight.addEventListener('click', () => {
            this.clickRight();
        })
        this.buttonLeft.addEventListener('click', () => {
            this.clickLeft();
        })
    }
    showPictures(element) {
        element.style = "display: block";
        TweenMax.from(element,3,{scale:0,ease: Elastic.easeOut.config(1, 0.3)});

    }
    hidePictures(element) {
        element.style = "display: none";
    }


    clickRight() {
        while (this.count <= 2) {
            this.hidePictures(this.activeSlide);
            this.count++;
            this.activeSlide = this.slides[this.count];
            this.showPictures(this.activeSlide);
            return this.count;
        }

    }
    clickLeft() {
        while (this.count > 0) {
            this.hidePictures(this.activeSlide);
            this.count--;
            this.activeSlide = this.slides[this.count];
            this.showPictures(this.activeSlide);
            return this.count;
        }
    }
}

let carousel = document.querySelectorAll('.carousel');
carousel.forEach(item =>{
    return new Carousel(item);
})

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/