let resizeTimer;

function handleResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        location.reload();
    }, 500); // Adjust the delay as needed (in milliseconds)
}

window.addEventListener('resize', handleResize);
