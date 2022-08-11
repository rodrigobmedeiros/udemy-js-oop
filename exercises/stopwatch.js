
function Stopwatch() {
    self = this;
    self._startPoint = 0;
    self._stopPoint = 0;
    self._duration = 0;
    self._running = false;

    Object.defineProperty(self, 'startPoint', {
        get: function () {
            return self._startPoint;
        }
    });
    Object.defineProperty(self, 'endPoint', {
        get: function () {
            return self._startPoint;
        }
    });
    Object.defineProperty(self, 'duration', {
        get: function() {
            return self._duration;
        }
    });
    Object.defineProperty(self, 'running', {
        get: function () {
            return self._running;
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
