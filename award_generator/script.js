const msgInput = document.getElementById("msgInput");
const output = document.getElementById("output");
const generatedText = document.querySelector(".generated-text");
const sendBtn = document.querySelector(".sendBtn");

sendBtn.addEventListener("click", sendMessage);

// TODO: view previous inputs and generated outputs
const msgs = [];

function copyOutputText() {
  const textToCopy = generatedText.textContent.trim();
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      console.log("Text copied to clipboard: \n", textToCopy);
    })
    .catch((error) => {
      console.error("Failed to copy text: \n", error);
    });
}

function prependSysPrompt(msg) {
  return `<s>[INST]<<SYS>>System: The assistant's task is to directly generate specific military achievement bullet points suitable for a DA-638 form. Each bullet should be concise, clear, and impactful, with a maximum character count of 300, taking into account non-mono-spaced font. The bullets should succinctly summarize the individual's accomplishments, reflecting their significance in a military context and adhering to military standards and values. The assistant DOES NOT providing disclaimers OR general advice. Focus SOLELY on generating relevant bullet points based on the user's input.<</SYS>>
User: "PFC Jody is still breathing."
Assistant: "Despite facing numerous adversities and challenges throughout daily tasks, PFC Jody has consistently maintained a steadfast determination and mental fortitude, remaining focused on personal growth and development. These qualities exemplify the Warrior Ethos, reflecting credit upon themselves and the U.S. Army."
User: "PFC Jody tied his shoes."
Assistant: "Displaying attention to detail and prioritization, PFC Jody consistently ensures that all uniform components, including lacing boots correctly, meet regulation requirements. By establishing these habits early in their career, they contribute to upholding high standards of appearance and discipline across the formation, supporting esprit de corps and respect for the profession."
User: "SPC Wurm cross-trained some people from different service branches."
Assistant: "Demonstrated exceptional leadership by initiating a cross-training program that enhanced interoperability between various service branches. This initiative significantly increased mission readiness and operational effectiveness, setting a new standard for joint-force collaboration."
User: "SPC Wurm PMCSed his vehicles."
Assistant: "Displayed outstanding diligence and mechanical proficiency in performing Preventive Maintenance Checks and Services (PMCS) on military vehicles, ensuring the highest standards of operational readiness and vehicle reliability, which directly contributed to the unit's mission success."
User: "He was part of an exercise with a marine unit and set up an STT."
Assistant: "During a joint exercise with a Marine unit, SPC Wurm adeptly established a Satellite Transportable Terminal (STT), showcasing his technical expertise and enhancing communication capabilities. His efforts were pivotal in achieving seamless integration and operational coordination between the units."
User: "SPC Jones went to the field."
Assistant: "During a challenging field exercise, SPC Jones showed unwavering resilience and adaptability in executing assigned duties under strenuous conditions, proving instrumental in achieving key objectives. Their flexibility and willingness to learn from peers allowed them to excel in unfamiliar environments, demonstrating a commendable level of grit and professionalism."
User: "PVT Snuffy did good in the field"
Assistant: "During a recent field training exercise, PVT Snuffy demonstrated remarkable performance and dedication, effectively completing every assigned task despite challenging environmental factors. They proved to be a reliable team player who constantly strove for excellence while maintaining positive morale among colleagues. Such conduct highlights the core values essential within our ranks as we continue building a strong fighting force."
User: ${msg} [/INST]`;
}

function formatMessage(msg) {
  if (msg.trim().startsWith("Assistant: ")) {
    msg = msg.trim().replace("Assistant: ", "").trim();
  }
  if (msg.startsWith('"') && msg.endsWith('"')) {
    msg = msg.slice(1, -1);
  }
  return msg.trim();
}

async function sendMessage() {
  sendBtn.classList.add("sendBtn--loading");

  const message = prependSysPrompt(msgInput.value);

  const headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0",
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.5",
    "content-type": "application/json",
    "x-use-cache": "false",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "Sec-GPC": "1",
    referrer: "https://huggingface.co/",
  };

  const body = JSON.stringify({
    inputs: message,
    parameters: {
      temperature: 0.8,
      truncate: 24576,
      max_new_tokens: 300,
      stop: ["</s>"],
      top_p: 0.95,
      top_k: 50,
      repetition_penalty: 1.2,
      stop_sequences: ["</s>"],
      return_full_text: false,
    },
  });

  const url = "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1";
  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: body,
    mode: "cors",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  const { generated_text } = data[0];
  const formattedText = formatMessage(generated_text);

  generatedText.innerText = formattedText;

  sendBtn.classList.remove("sendBtn--loading");

  msgs.push({ message, formattedText });
}
