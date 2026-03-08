export const generateTweets = async (prompt: string): Promise<string> => {
  const res = await fetch("/api/generate-tweets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to generate tweets");

  return data.text;
};