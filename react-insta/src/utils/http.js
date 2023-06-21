export const GET = async (endpoint) => {
  const res = await fetch(endpoint);
  const data = await res.json();

  return data;
};

export const POST = async (endpoint, body) => {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return data;
};
