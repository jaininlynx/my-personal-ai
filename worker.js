export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("AI backend is running.");
    }

    try {
      const body = await request.json();

      return new Response(
        JSON.stringify({
          reply: "Backend connected! Your message was received: " + body.message
        }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Invalid request" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
  }
};
