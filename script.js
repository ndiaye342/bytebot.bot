const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");

chatForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const input = userInput.value.trim();
  if (input === "") return;

  appendMessage("user", input);
  userInput.value = "";
  botReply(input);d
});

function appendMessage(sender, text) {
  const messageEl = document.createElement("div");
  messageEl.classList.add("message", sender);
  messageEl.textContent = text;
  chatBox.appendChild(messageEl);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(input) {
  let response = "Sorry, I didn't understand that.";

  const responses = {
    hello: "Hi there! How can I help you?",
    hi: "Hello! Need assistance?",
    howareyou: "I'm just code, but I'm doing great!",
    bye: "Goodbye! Have a great day!",
    thanks: "You're welcome!",
    yes: "What would you like to know?",
    no: "If you have any other questions, feel free to ask.",
    iamfine: "That's great to hear!",
    writeapoem: "The wind it speaks in hushed delight, A song that dances through the night. It twirls the leaves in secret play, Then softly steals the dusk away. ",
    name: "I'm called Bytebot! Your helpful AI assistant.",
    areyoureal: "I'm not human, but I'm here to help you like one!",
    whatareyou: "I'm an AI chatbot created to answer questions and help you out.",
    whatisyourfavoritecolor: "I'm a chatbot, so I don't have a favorite color.",
    whatisyourfavoritefood: "I'm a chatbot, so I don't have a favorite food.",
    whatisyourfavoriteanimal: "I'm a chatbot, so I don't have a favorite animal.",
    whatisyourfavoritehobby: "I'm a chatbot, so I don't have a favorite hobby.",
    whatisyourfavoritecolor: "I'm a chatbot, so I don't have a favorite color.",
    help: "Sure! Just ask me anything you'd like to know.",
    whatcanudo: "I can answer questions, keep you company, or just chat!",
    idk: "No worries! Ask me anything you're curious about.",
    tellmeajoke: "Why don’t robots have brothers? Because they all share the same motherboard!",
randomfact: "Did you know octopuses have three hearts?",
flipacoin: () => Math.random() > 0.5 ? "Heads!" : "Tails!",



  };

  const cleaned = input.toLowerCase().replace(/[^a-z]/g, "");

  if (responses[cleaned]) {
    response = responses[cleaned];
  }

  setTimeout(() => {
    appendMessage("bot", response);
  }, 500);
}
h