// https://github.com/alexsoin/baSlider
function baSlider(id_slider) {
    if ($(id_slider)[0]) {
        let compSlider = $(id_slider);

        compSlider.each(function () {
            drags($(this).find(".divider"), $(this).find(".resize"), $(this));
        });
    }
}

function drags(dragElement, resizeElement, container) {
    let touched = false;
    window.addEventListener('touchstart', function () {
        touched = true;
    });
    window.addEventListener('touchend', function () {
        touched = false;
    });

    dragElement.on("mousedown touchstart", function (e) {
        dragElement.addClass("draggable");
        resizeElement.addClass("resizable");

        let startX =            e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
        let dragWidth =         dragElement.outerWidth();
        let posX =              dragElement.offset().left + dragWidth - startX;
        let containerOffset =   container.offset().left;
        let containerWidth =    container.outerWidth();
        let minLeft =           containerOffset;
        let maxLeft =           containerOffset + containerWidth - dragWidth;

        dragElement.parents().on("mousemove touchmove", function (e) {
            if (touched === false) {
                e.preventDefault();
            }

            let moveX =     e.pageX ? e.pageX : (e.originalEvent.touches ? e.originalEvent.touches[0].pageX : 0);
            let leftValue = moveX + posX - dragWidth;

            if (leftValue < minLeft) {
                leftValue = minLeft;
            } else if (leftValue > maxLeft) {
                leftValue = maxLeft;
            }

            let widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + "%";

            $(".draggable").css("left", widthValue).on("mouseup touchend touchcancel", function () {
                $(this).removeClass("draggable");
                resizeElement.removeClass("resizable");
            });

            $(".resizable").css("width", widthValue);

        }).on("mouseup touchend touchcancel", function () {
            dragElement.removeClass("draggable");
            resizeElement.removeClass("resizable");

        });

    }).on("mouseup touchend touchcancel", function (e) {
        dragElement.removeClass("draggable");
        resizeElement.removeClass("resizable");
    });
}