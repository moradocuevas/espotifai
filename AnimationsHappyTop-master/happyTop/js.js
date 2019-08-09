console.log('test3')

var definition = [
    { name: "danceability", description: "suitability of the track for dancing" },
    { name: "energy", description: "perceptual measure of intensity and energy" },
    { name: "key", description: "The estimated overall key of the track. E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on" },
    { name: "loudness", description: "The overall loudness of a track in decibels (dB)" },
    { name: "mode", description: "indicates the modality (major or minor) of a track. Major is represented by 1 and minor is 0." },
    { name: "speechiness", description: "detects spoken words in the track" },
    { name: "accousticness", description: "predicts whether the track is acoustic or not" },
    { name: "instrumentalness", description: " predicts if the tracks doesn’t contain vocals" },
    { name: "liveness", description: "detects presences of audience in the recording" },
    { name: "valence", description: "describes the musical positiveness conveyed by the track" },
    { name: "tempo", description: "overall tempo of a track in BPM" },
    { name: "id", description: "Spotify id of the track" },
    { name: "duration", description: "duration of the track in milliseconds" },
    { name: "bar", description: "notational convention to specify how many beats are in each bar (or measure)" }
];

function mamarre(id){
    var selector = d3.select('#feature');
    selector.text(id);
    for(i=0;i < definition.length;i++){
        if(definition[i].name === id){
            var selector_1 = d3.select('#description');
            selector_1.text(definition[i].description);
        };
    };
};