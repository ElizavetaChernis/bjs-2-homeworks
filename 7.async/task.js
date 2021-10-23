class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('error text');
        }
        if (this.alarmCollection.some((alarm) => alarm.id === id)) {
            console.error("Такой будильник уже существует");
            return;
        }
        this.alarmCollection.push({time, id, callback});
    }

    removeClock(id) {
        this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.id !== id);
    }

    getCurrentFormattedTime() {
        const currTime = new Date();
        return (currTime.getHours() + ":" + currTime.getMinutes());
    }

    start() {
        const checkClock = (alarm) => {
          if (alarm.time === this.getCurrentFormattedTime()) {
            alarm.callback();
          }
        };
        if (!this.timerId) {
          this.timerId = setInterval(() => {
            this.alarmCollection.forEach((alarm) => checkClock(alarm));
          }, 1000);
        }
      }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
          }
    }

    printAlarms() {
        this.alarmCollection.forEach((alarm, index) => {
            console.log(`Будильник ${ index + 1} заведён на ${alarm.time}`);
          });
    }

    clearAlarms() {
        clearInterval(this.timerId);
        this.alarmCollection = [];
    }
}


function testCase() {
    console.log('start')
    const alarm1 = new AlarmClock();
    const currTime = new Date();
  
    alarm1.addClock('20:46', () => {
      console.log('Пора вставать.')
    }, 1);
  
    alarm1.addClock('20:47', () => {
      console.log('Давай, вставай уже!!!');
      alarm1.removeClock(2);
    }, 2);
  
    alarm1.addClock('20:48', () => {
      console.log('Вставай, а то проспишь!!!.');
      alarm.clearAlarms();
      alarm.printAlarm();
    }, 3);

    alarm1.printAlarm();
    alarm1.start();
  }
  
  testCase();