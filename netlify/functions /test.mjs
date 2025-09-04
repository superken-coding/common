export default async (req) => {
  // Get the name from query parameters
  const url = new URL(req.url);
  const name = url.searchParams.get('name') || 'World';

  // Return a Response object
  return new Response(`Hello ${name}!`);
};
