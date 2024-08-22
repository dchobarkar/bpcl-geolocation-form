import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Since we're receiving FormData, we can handle it as follows:
    const formData = await req.formData();

    // Extract fields from FormData
    const employeeName = formData.get("employeeName");
    const geolocation = formData.get("geolocation");

    // For now, just log the received data
    console.log({ employeeName, geolocation });

    // Respond with success message
    return NextResponse.json({ message: "Data received successfully" });
  } catch (error) {
    console.error("Error processing form data:", error);
    // Handle errors
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
