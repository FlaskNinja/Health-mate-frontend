// groq.js (symptom analysis with JSON output)
export async function getGroqReply(userMessage) {
  const HF_API_KEY =
    import.meta.env.VITE_GROQ_API_KEY ||
    "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";

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
              Analyze their input and return your answer ONLY in JSON format, like this:
              {
                "possible_illnesses": ["...","..."],
                "advice": "short health advice",
                "disclaimer": "This is not a diagnosis. See a doctor for confirmation."
              }
              Keep illness names simple.`
          },
          { role: "user", content: userMessage },
        ],
        temperature: 0.4, // lower = more stable JSON
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error(data);
    throw new Error(data.error?.message || "Groq API Error");
  }

  // Parse model output safely
  try {
    return JSON.parse(data.choices[0].message.content);
  } catch (err) {
    console.error("JSON parse error:", err);
    return { error: "Invalid AI response" };
  }
}
