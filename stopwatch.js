
function Stopwatch() {
    let startPoint = 0;
    let endPoint = 0;
    let duration = 0;
    let running = false;

    this.start = function() {
        if (running) {
            return new Error('Watch is already running.')
        }
        running = true;
        startPoint = new Date();
    }
    this.stop = function() {
        if (!running) {
            return new Error('Watch is not running.');
        }
        running = false;
        endPoint = new Date();
        const currentDuration = (endPoint.getTime() - startPoint.getTime() / 1000);
        duration += currentDuration;
    }
    Object.defineProperty(this, 'duration', {
        get: function() {
            return this.duration;
        }
    });
    this.reset = function() {
        startPoint = 0;
        endPoint = 0;
        duration = 0;
        running = false;
    }
}