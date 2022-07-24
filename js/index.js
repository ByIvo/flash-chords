window.addEventListener('load', start);

function start() {
    const params = (new URL(document.location)).searchParams;
    const bpmRate = params.get("bpm") | 60;
    const interval = (1000 * 60) / bpmRate;
    setInterval(beat, interval);

    let beatCount = 0;
    var chords = Chords();

    function beat() {
        const currentBeat = (beatCount % 4) + 1;
        if (currentBeat == 1) {
            updateChords();
        }
        document.getElementById("beat" + currentBeat).setAttribute("class", "beat beat-up"); 
        
        let pastBeat = currentBeat - 1;
        if (pastBeat == 0) {
            pastBeat = 4;
        }
        document.getElementById("beat" + pastBeat).setAttribute("class","beat");
        beatCount++;
    }

    function updateChords() {
        var currentChar = chords.pickChord();
        
        document.getElementById("last-chord").innerText = chords.lastChord();
        document.getElementById("current-chord").innerText = currentChar;
        document.getElementById("next-chord").innerText = chords.nextChord();
    }
}



