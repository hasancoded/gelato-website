export const maxDuration = 300;

export async function POST(req: Request) {
  const { session_id, message } = await req.json();

  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (!webhookUrl) {
    return Response.json(
      { reply: "Chat service is not configured.", session_id },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session_id, message }),
      signal: AbortSignal.timeout(300000),
    });

    const data = await response.json();
    return Response.json(data);
  } catch {
    return Response.json(
      {
        reply:
          "I'm having a moment. Please try again or email us at info@milestac.com.",
        session_id,
      },
      { status: 200 },
    );
  }
}
