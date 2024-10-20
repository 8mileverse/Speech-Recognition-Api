const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert("Sorry, your browser does not support speech recognition. Please try using a different browser.");
}

const rec = new SpeechRecognition();
rec.lang = "en-US";
rec.continuous = true; // Allow continuous speech recognition
rec.interimResults = true; // Allow interim results for better user experience

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

// Handle speech recognition results
rec.onresult = function (e) {
  for (let i = e.resultIndex; i < e.results.length; i++) {
    const script = e.results[i][0].transcript.toLowerCase().trim();
    if (acceptedColors.includes(script)) {
      document.body.style.backgroundColor = script; // Change background color
      displayMessage(`Background color changed to ${script}.`);
    } else {
      displayMessage("Sorry, I couldn't recognize that color. Try again."); // Display message if color not recognized
    }
  }
};

// Display messages to the user
function displayMessage(message) {
  const messageContainer = document.getElementById("message");
  if (messageContainer) {
    messageContainer.innerText = message;
  } else {
    alert(message); // Fallback for unsupported mobile browsers
  }
}

// Restart recognition when it ends
rec.onend = function () {
  setTimeout(() => {
    rec.start(); // Restart recognition after a short delay
  }, 3000); // 500 ms delay to avoid rapid restarts
};

// Function to start speech recognition
function startRecognition() {
  rec.start(); // Start speech recognition
}

// Call this function to begin recognition
startRecognition();
