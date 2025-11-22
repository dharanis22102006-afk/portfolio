// src/api/ask.js
export const askTwin = async (message) => {
  const response = await fetch("http://localhost:5000/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: message })   // ← must be "prompt"
  });

  if (!response.ok) {
    throw new Error("Network error");
  }

  return await response.json();
};