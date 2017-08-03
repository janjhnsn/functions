const scrollAnimate = (element: Element, to: number, direction: string, duration: number) => {
    if (direction === undefined) {
        direction = "scrollTop";
    }

    if (duration === undefined) {
        duration = 500;
    }

    if(duration <= 0) {
        return;
    }

    let difference = to - element[direction],
        perTick = difference / duration * 10;

    setTimeout(function() {
        element[direction] = element[direction] + perTick;

        if (element[direction] === to) {
            return;
        } 

        scrollAnimate(element, to, direction, duration - 10);
    }, 10);
};

export default scrollTo;