// lib/s3.js
import AWS from "aws-sdk";

// Configure AWS SDK
const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export const uploadFile = async (file) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: file.name,
    Body: file,
    ContentType: file.type,
    ACL: "public-read", // Make the file publicly accessible
  };

  try {
    const data = await s3.upload(params).promise();
    return data.Location; // URL of the uploaded file
  } catch (error) {
    console.error("Error uploading file to S3:", error);
    throw new Error("Error uploading file to S3");
  }
};
