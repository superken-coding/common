import { neon } from "@netlify/neon";

  export default async (req) => {
  const sql = neon();
  
  // query
  const testData = await sql("SELECT * FROM test");

  // Return a Response object
  return new Response(JSON.stringify(testData));
};
