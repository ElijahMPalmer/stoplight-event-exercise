(function() {
    'use strict';

    // YOUR CODE HERE

    // const stopButton = document.getElementById('stopButton');
    // const slowButton = document.getElementById('slowButton');
    // const goButton = document.getElementById('goButton');

    // const stopLight = document.getElementById('stopLight');
    // const slowLight = document.getElementById('slowLight');
    // const goLight = document.getElementById('goLight');

    // stopButton.addEventListener('click', function() {
    //   stopLight.classList.toggle('stop');
    // });

    // stopButton.addEventListener('mouseenter', function() {
    //   console.log('Entered stop light button.')
    // });

    // stopButton.addEventListener('mouseleave', function() {
    //   console.log('Left stop light button.')
    // });

    // slowButton.addEventListener('click', function() {
    //   slowLight.classList.toggle('slow');
    // });

    // slowButton.addEventListener('mouseenter', function() {
    //   console.log('Entered slow light button.')
    // });

    // slowButton.addEventListener('mouseleave', function() {
    //   console.log('Left slow light button.')
    // });

    // goButton.addEventListener('click', function() {
    //   goLight.classList.toggle('go');
    // });

    // goButton.addEventListener('mouseenter', function() {
    //   console.log('Entered go light button.')
    // });

    // goButton.addEventListener('mouseleave', function() {
    //   console.log('Left go light button.')
    // });


    let cntl = document.getElementById('controls');

    cntl.onclick = function(event) {
        let target = event.target;
        if (target.className === 'button') {
            lightUp(target);
        }
    }

    function lightUp(target) {
        let choice = target.innerHTML.toLowerCase();
        if (target.id === 'stopButton') {
            stopLight.classList.toggle('stop');
            if (stopLight.classList[1] === 'stop') {
                console.log("StopLight Bulb on")
            } else {
                console.log("StopLight Bulb off")
            }
        } else if (target.id === 'slowButton') {
            slowLight.classList.toggle('slow');
            if (slowLight.classList[1] === 'slow') {
                console.log("SlowLight Bulb on")
            } else {
                console.log("SlowLight Bulb off")
            }
        } else if (target.id === 'goButton') {
            goLight.classList.toggle('go');
            if (goLight.classList[1] === 'go') {
                console.log("GoLight Bulb on")
            } else {
                console.log("GoLight Bulb off")
            }
        }
    }
})();