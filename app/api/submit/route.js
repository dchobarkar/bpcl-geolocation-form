export async function POST(req) {
  try {
    // Parse the incoming FormData
    const formData = await req.formData();

    // Extract the fields
    const employeeName = formData.get("employeeName");
    const geolocation = formData.get("geolocation");

    // Extract the uploaded files
    const files = formData.getAll("images");

    // Log the received data and files
    console.log("Employee Name:", employeeName);
    console.log("Geolocation:", geolocation);
    console.log("Files:", files);

    // Process each file (e.g., save to disk, upload to S3, etc.)
    const images = files.map((file) => ({
      originalname: file.name,
      buffer: file,
      mimetype: file.type,
    }));

    console.log("Processed images:", images);

    // Respond with a success message
    return new Response(
      JSON.stringify({ message: "Form data and images received successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing form data:", error);
    // Handle errors
    return new Response(
      JSON.stringify({
        error: "Something went wrong while processing the form data",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
