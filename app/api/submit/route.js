import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

const dynamoDB = new AWS.DynamoDB.DocumentClient();
// Initialize S3
const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function POST(req) {
  try {
    // Parse the incoming FormData
    const formData = await req.formData();

    // Extract the fields
    const employeeName = formData.get("employeeName");
    const geolocation = formData.get("geolocation");
    // Extract the uploaded files
    const files = formData.getAll("images");
    // Generate a unique ID for this submission
    const id = uuidv4();

    // Upload each image to S3 and get the URLs
    const uploadPromises = files.map(async (file) => {
      const fileBuffer = Buffer.from(await file.arrayBuffer()); // Convert file to buffer

      const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `${uuidv4()}_${file.name}`, // Unique file name in S3
        Body: fileBuffer,
        ContentType: file.type,
      };

      const uploadResult = await s3.upload(params).promise();
      return uploadResult.Location; // Return the file URL
    });

    const imageUrls = await Promise.all(uploadPromises);

    // Define the parameters for DynamoDB
    const dbParams = {
      TableName: process.env.DYNAMODB_TABLE_NAME,
      Item: {
        id, // Primary key
        employeeName,
        geolocation,
        imageUrls, // Store the image URLs in DynamoDB
        submittedAt: new Date().toISOString(),
      },
    };

    // Store the data in DynamoDB
    await dynamoDB.put(dbParams).promise();

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
