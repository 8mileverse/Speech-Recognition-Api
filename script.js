const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();
rec.lang = "en-US";
rec.continuous = true; // Allow continuous speech recognition

const acceptedColors = [
  "red", "green", "blue", "yellow", "orange", "purple", 
  "pink", "brown", "black", "white", "grey", "cyan", 
  "magenta", "navy", "teal", "lime", "violet", "indigo",
  "gold", "silver", "coral", "turquoise", "beige", "lavender", 
  "maroon", "salmon", "plum", "orchid", "tan", "olive", 
  "peach", "chocolate", "ivory", "khaki", "azure", "fuchsia",
  "mint", "sienna", "apricot", "emerald", "scarlet", "amber",
  "burgundy", "crimson", "chartreuse", "denim", "wheat", "periwinkle",
  "amethyst", "aqua", "bronze", "ruby", "sapphire", "limegreen",
  "slateblue", "forestgreen", "skyblue", "springgreen", "midnightblue",
  "lightcoral", "lightgoldenrodyellow", "mediumslateblue", "firebrick", 
  "tomato", "dodgerblue"
];

rec.onresult = function (e) {
  for (let i = e.resultIndex; i < e.results.length; i++) {
    const script = e.results[i][0].transcript.toLowerCase().trim();
    if (acceptedColors.includes(script)) {
      document.body.style.backgroundColor = script; // Change background color
    } else {
      alert("Sorry, I couldn't recognize that color. Try Again"); // Alert if color not recognized
    }
  }
};

// Restart recognition when it ends
rec.onend = function () {
  setTimeout(() => {
    rec.start(); // Restart recognition after a short delay
  }, 500); // 500 ms delay to avoid rapid restarts
};

// Function to start speech recognition
function startRecognition() {
  rec.start(); // Start speech recognition
}

// Call this function to begin recognition
startRecognition();
