const API_URL = "https://small-boat-a3a3.therebelofphoenix.workers.dev";

async function askAI(message) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  });

  if (!response.ok) {
    throw new Error("AI server error");
  }

  return await response.json();
}
