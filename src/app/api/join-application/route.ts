import { NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const CSV_PATH = path.join(process.cwd(), "data", "applications.csv");

const CSV_HEADERS = [
  "Timestamp",
  "Full Name",
  "Email",
  "Phone",
  "College",
  "Year",
  "Instagram",
  "LinkedIn",
  "Role",
  "Skills",
  "Prior Experience",
  "Experience Details",
  "Portfolio",
  "Role Question Answer",
  "Hours Per Week",
  "Start Date",
  "Remote OK",
  "Why Sellixa",
  "Skill to Develop",
  "Why Select You",
  "Ownership Comfortable",
];

function escapeCsv(value: string | undefined): string {
  const v = (value ?? "").toString().trim();
  if (v.includes(",") || v.includes('"') || v.includes("\n")) {
    return `"${v.replace(/"/g, '""')}"`;
  }
  return v;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const row = [
      new Date().toISOString(),
      body.fullName,
      body.email,
      body.phone,
      body.college,
      body.year,
      body.instagram,
      body.linkedin,
      body.role,
      Array.isArray(body.skills) ? body.skills.join("; ") : body.skills,
      body.priorExperience,
      body.experienceDetails,
      body.portfolio,
      body.roleAnswer,
      body.hoursPerWeek,
      body.startDate,
      body.remoteOk,
      body.whySellixa,
      body.skillToDevelop,
      body.whySelectYou,
      body.ownershipOk,
    ]
      .map(escapeCsv)
      .join(",");

    // Check if file exists — if not, write headers first
    let fileExists = false;
    try {
      await fs.access(CSV_PATH);
      fileExists = true;
    } catch {
      fileExists = false;
    }

    if (!fileExists) {
      await fs.writeFile(
        CSV_PATH,
        CSV_HEADERS.map(escapeCsv).join(",") + "\n",
        "utf-8"
      );
    }

    await fs.appendFile(CSV_PATH, row + "\n", "utf-8");

    return Response.json({ success: true });
  } catch (err) {
    console.error("Join application error:", err);
    return Response.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
