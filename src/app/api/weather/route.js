
import { NextResponse } from "next/server";


export async function GET(req, res) {
  const url = new URL(req.url);
  const params = url.searchParams;
  const location = params.get("location");
  const API_KEY = process.env.WEATHER_API;
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const weatherData = await response.json();
    return NextResponse.json(weatherData);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Error fetching data' });
  }
};

