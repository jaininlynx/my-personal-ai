const API_URL =
  "https://small-boat-a3a3.therebelofphoenix.workers.dev";

async function askAI(message) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: message
    })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Server error");
  }

  if (data.error) {
    throw new Error(data.error);
  }

  if (!data.reply) {
    throw new Error("The Worker returned no reply.");
  }

  return data;
}
