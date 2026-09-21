import { NextRequest } from "next/server";
import { google } from "googleapis";

const HEADERS = [
  "Timestamp", "Full Name", "Email", "Phone", "College", "Year",
  "Instagram", "LinkedIn", "Role", "Skills", "Prior Experience",
  "Experience Details", "Portfolio", "Role Question Answer",
  "Hours Per Week", "Start Date", "Remote OK", "Why Sellixa",
  "Skill to Develop", "Why Select You", "Ownership OK",
];

async function getSheet() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n").replace(/\\\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  return sheets;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const sheetId = process.env.GOOGLE_SHEET_ID!;
    const sheets = await getSheet();

    // Check if headers row exists — if sheet is empty, add headers first
    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: "Sheet1!A1:A1",
    });

    if (!existing.data.values || existing.data.values.length === 0) {
      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: "Sheet1!A1",
        valueInputOption: "RAW",
        requestBody: { values: [HEADERS] },
      });
    }

    // Append the submission row
    const row = [
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      body["Full Name"] ?? "",
      body["Email"] ?? "",
      body["Phone"] ?? "",
      body["College"] ?? "",
      body["Year"] ?? "",
      body["Instagram"] ?? "",
      body["LinkedIn"] ?? "",
      body["Role"] ?? "",
      body["Skills"] ?? "",
      body["Prior Experience"] ?? "",
      body["Experience Details"] ?? "",
      body["Portfolio"] ?? "",
      body["Role Question Answer"] ?? "",
      body["Hours Per Week"] ?? "",
      body["Start Date"] ?? "",
      body["Remote OK"] ?? "",
      body["Why Sellixa"] ?? "",
      body["Skill to Develop"] ?? "",
      body["Why Select You"] ?? "",
      body["Ownership OK"] ?? "",
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A1",
      valueInputOption: "RAW",
      requestBody: { values: [row] },
    });

    return Response.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Google Sheets error:", message);
    return Response.json({ success: false, error: message }, { status: 500 });
  }
}
