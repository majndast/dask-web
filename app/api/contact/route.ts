import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Vyplňte povinná pole." }, { status: 400 });
    }

    // TODO: Připojit email službu (doporučujeme Resend – resend.com)
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "web@dask.cz",
    //   to: "info@dask.cz",
    //   subject: `Nová zpráva od ${name}`,
    //   text: `Od: ${name} <${email}>\nTelefon: ${phone || "—"}\n\n${message}`,
    // });

    console.log("Kontaktní formulář:", { name, email, phone, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Interní chyba serveru." }, { status: 500 });
  }
}
