window.onload = function () {
    var mins = 00;
    var secs = 00;
    var tens = 00;

    var Nmins = document.getElementById('mins')
    var Nsecs = document.getElementById('secs')
    var Ntens = document.getElementById('tens')
    var buttonStart = document.getElementById('buttonStart')
    var buttonStop = document.getElementById('buttonStop')
    var buttonReset = document.getElementById('buttonReset')
    var Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10)
    }
    buttonStop.onclick = function () {
        clearInterval(Interval)
    }
    buttonReset.onclick = function () {
        clearInterval(Interval)
        mins = "00"
        tens = "00"
        secs = "00"
        Nmins.innerHTML = mins
        Ntens.innerHTML = tens
        Nsecs.innerHTML = secs
    }

    function startTimer() {
        tens++;

        if (tens <= 9) {
            Ntens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            Ntens.innerHTML = tens;

        }

        if (tens > 99) {
            secs++;
            Nsecs.innerHTML = "0" + secs;
            tens = 0;
            Ntens.innerHTML = "0" + 0;
        }

        if (secs > 9) {
            Nsecs.innerHTML = secs;
        }
        if(secs>60){
            mins++
            Nmins.innerHTML="0"+mins
            secs=0
            Nsecs.innerHTML="0"+0
        }

    }

}