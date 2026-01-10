export async function loadIslamicDateDataset() {
  // Adjust path if needed:
  const response = await fetch("../data/islamicdate-today-hijri.json");
  if (!response.ok) {
    throw new Error("Failed to load dataset");
  }

  const json = await response.json();

  if (!json.data || !Array.isArray(json.data)) {
    throw new Error("Invalid dataset format");
  }

  return json.data;
}

