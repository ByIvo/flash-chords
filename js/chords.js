const Chords = function() {
    var lastChordChar = '?';
    var currentChordChar = '?';
    var nextChordChar = '?';

    return {
        pickChord: pickChord,
        lastChord: lastChord,
        nextChord: nextChord
    }

    function pickChord() {
        lastChordChar = currentChordChar;
        currentChordChar = nextChordChar;
        nextChordChar = pickNewChord();

        return currentChordChar;
    }

    function lastChord() {
        return lastChordChar;
    }

    function nextChord() {
        return nextChordChar;
    }

    function pickNewChord() {
        const majorChords = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        const minorChords = ['Cm', 'Dm', 'Em', 'Fm', 'Gm', 'Am', 'Bm'];
        let chords = [];

        chords = chords.concat(majorChords);
        chords = chords.concat(minorChords);
        return chords[Math.floor(Math.random() * chords.length)]
    }
};