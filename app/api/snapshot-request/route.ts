import { NextResponse } from "next/server";
import { validateSnapshotRequest, type SnapshotRequestInput } from "@/lib/validation";

export async function POST(request: Request) {
  const payload = (await request.json()) as SnapshotRequestInput;
  const { isValid, errors } = validateSnapshotRequest(payload);

  if (!isValid) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
    return NextResponse.json({
      ok: false,
      fallback: true,
      message: "Email delivery is not configured yet. Please use the prepared email fallback.",
    });
  }

  return NextResponse.json({
    ok: false,
    fallback: true,
    message: "Email delivery is prepared but not connected in this deployment.",
  });
}
