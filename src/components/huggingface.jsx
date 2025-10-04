// groq.js (symptom analysis)
export async function getGroqReply(userMessage) {
  const HF_API_KEY = "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";

  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b",
        messages: [
          {
            role: "system",
            content: `You are a friendly medical assistant. 
              The user will describe their symptoms. 
              Analyze their input and suggest POSSIBLE illnesses.  
              Use short, clear sentences suitable for a mobile health app.  
              Also recommend when they should see a doctor.  
              Do NOT give emergency medical advice.  
              Always add: "This is not a diagnosis. See a doctor for confirmation."`
          },
          { role: "user", content: userMessage },
        ],
        temperature: 0.6,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error(data);
    throw new Error(data.error?.message || "Groq API Error");
  }

  return data.choices[0].message.content;
}

