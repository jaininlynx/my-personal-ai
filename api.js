const API_URL = "YOUR_CLOUDFLARE_WORKER_URL";

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
