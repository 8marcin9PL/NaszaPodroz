const Timer = {

    seconds: 60,

    interval: null,

    start(onTick, onFinish) {

        this.stop();

        this.seconds = 60;

        onTick(this.seconds);

        this.interval = setInterval(() => {

            this.seconds--;

            onTick(this.seconds);

            if (this.seconds <= 0) {

                this.stop();

                if (onFinish) {

                    onFinish();

                }

            }

        }, 1000);

    },

    stop() {

        if (this.interval) {

            clearInterval(this.interval);

            this.interval = null;

        }

    }

};