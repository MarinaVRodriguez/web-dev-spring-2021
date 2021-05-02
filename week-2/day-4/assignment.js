
        let position = 0;

        const previousImage = function() {
             // increment position by 200 (width of image)
            position = position + 1000;

            // grab image slider from the DOM & adjust the styles for transform translate -200
            document.getElementById('imageSlider').style.transform = `translate(${position}px, 0)`;
            // adjust the styles for transform translate -200
        }
        const nextImage = function() {
            position = position - 1000;
            // decrement position by 200

        // grab image slider from the DOM & adjust the styles for transform translate -200
            document.getElementById('imageSlider').style.transform = `translate(${position}px, 0)`;
          
        }
