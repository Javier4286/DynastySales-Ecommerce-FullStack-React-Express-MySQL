const reverseGeocode = async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res
      .status(400)
      .json({ message: "Latitude and longitude are required" });
  }

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
      {
        headers: {
          "User-Agent": "DynastySales-Portfolio-App",
          "Accept-Language": "en",
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch location");
    }

    const data = await response.json();

    const city =
      data.address?.city ||
      data.address?.town ||
      data.address?.village ||
      "Unknown City";

    const country = data.address?.country || "Unknown Country";

    res.json({ location: `${city}, ${country}` });
  } catch (error) {
    res.status(500).json({ location: "Location unavailable" });
  }
};

module.exports = { reverseGeocode };
