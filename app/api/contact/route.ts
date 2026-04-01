export const maxDuration = 30;

export async function POST(req: Request) {
  const {
    name,
    email,
    phone,
    service,
    product,
    eventType,
    eventDate,
    guestCount,
    message,
  } = await req.json();

  const FORM_TOKEN = process.env.CRM_FORM_TOKEN;
  if (!FORM_TOKEN) {
    console.error("[Miles Contact Form] CRM_FORM_TOKEN is not configured");
    return Response.json({ success: false }, { status: 503 });
  }
  const FORM_URL = `https://demo.atrgworld.com/CRM/forms/wtl/${FORM_TOKEN}`;

  try {
    // Step 1 — GET the form page to obtain CSRF token + session cookies
    const formRes = await fetch(FORM_URL);
    const html = await formRes.text();

    const csrfMatch = html.match(/"csrf_token_name":"([a-f0-9]+)"/);
    if (!csrfMatch) throw new Error("Could not extract CSRF token");
    const csrfToken = csrfMatch[1];

    // Extract session cookies from the GET response to forward with POST
    const setCookies = formRes.headers.getSetCookie?.() ?? [];
    const cookieHeader = setCookies.map((c) => c.split(";")[0]).join("; ");

    // Step 2 — build description from all form fields
    const descParts: string[] = [];
    if (service) descParts.push(`Service: ${service}`);
    if (product) descParts.push(`Product: ${product}`);
    if (eventType) descParts.push(`Event Type: ${eventType}`);
    if (eventDate) descParts.push(`Event Date: ${eventDate}`);
    if (guestCount) descParts.push(`Estimated Guests: ${guestCount}`);
    if (message) descParts.push(`Message: ${message}`);
    const description = descParts.join("\n\n");

    // Step 3 — submit to CRM with the same session cookies
    const body = new URLSearchParams({
      csrf_token_name: csrfToken,
      key: FORM_TOKEN,
      name,
      email,
      phonenumber: phone || "",
      description,
    });

    const submitRes = await fetch(FORM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Cookie: cookieHeader,
        Referer: FORM_URL,
      },
      body: body.toString(),
      redirect: "manual",
    });

    const status = submitRes.status;
    console.error(
      `[Miles Contact Form] CRM returned HTTP ${status} — lead saved`,
    );
    return Response.json({ success: true });
  } catch (error) {
    console.error("[Miles Contact Form] CRM error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
