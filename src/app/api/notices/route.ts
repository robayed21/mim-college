import { NextRequest, NextResponse } from "next/server";
import { getNotices, saveNotices } from "@/lib/data";

export async function GET() {
  const notices = await getNotices();
  return NextResponse.json(notices);
}

export async function POST(req: NextRequest) {
  try {
    const { title, date, content } = await req.json();

    if (!title || !title.trim()) {
      return NextResponse.json(
        { error: "শিরোনাম প্রয়োজন" },
        { status: 400 }
      );
    }

    const notices = await getNotices();
    const newNotice = {
      id: `notice-${Date.now()}`,
      title: title.trim(),
      date: date || new Date().toISOString().slice(0, 10),
      content: (content || "").trim(),
    };

    await saveNotices([newNotice, ...notices]);
    return NextResponse.json(newNotice, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "নোটিশ সংরক্ষণ ব্যর্থ হয়েছে" },
      { status: 500 }
    );
  }
}
