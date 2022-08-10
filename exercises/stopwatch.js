
function Stopwatch() {
    this._startPoint = 0;
    this._stopPoint = 0;
    this._duration = 0;
    this._running = false;

    Object.defineProperty(this, 'startPoint', {
        get: function () {
            return this._startPoint;
        }
    });
    Object.defineProperty(this, 'endPoint', {
        get: function () {
            return this._startPoint;
        }
    });
    Object.defineProperty(this, 'duration', {
        get: function() {
            return this._duration;
        }
    });
    Object.defineProperty(this, 'running', {
        get: function () {
            return this._running;
        }
    });
};

// Adding members to prototype
// Start methor
Stopwatch.prototype.start = function() {
    if (this._running) {
        return new Error('Watch is already running.');
    }
    this._running = true;
    this._startPoint = new Date();
};

// Stop method
Stopwatch.prototype.stop = function() {
    if (!this._running) {
        return new Error('Watch is not running.');
    }
    this._running = false;
    this._endPoint = new Date();
    const currentDuration = (this._endPoint.getTime() - this._startPoint.getTime() / 1000);
    this._duration += currentDuration;
};

// Reset method
Stopwatch.prototype.reset = function() {
    this._startPoint = 0;
    this._endPoint = 0;
    this._duration = 0;
    this._running = false;
};
