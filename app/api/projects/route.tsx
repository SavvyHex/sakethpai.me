import { NextResponse } from "next/server";

const repoNames: string[] = [
  "SavvyHex/SudokuMaster",
  "acmpesuecc/nexus-framework",
  "SavvyHex/saia",
  "SavvyHex/devcube",
  "SavvyHex/babygit",
  "SavvyHex/Keylogger",
];

const CACHE_DURATION = 3600; // seconds
let cachedData: any[] | null = null;
let lastFetchTime = 0;

export async function GET() {
  const now = Date.now();
  const isCacheValid =
    cachedData && now - lastFetchTime < CACHE_DURATION * 1000;

  if (isCacheValid) {
    return NextResponse.json(cachedData);
  }

  try {
    const token = process.env.GITHUB_TOKEN;

    const headers: HeadersInit = token
      ? { Authorization: `token ${token}` }
      : {};

    const results = await Promise.all(
      repoNames.map(async (fullName) => {
        const res = await fetch(`https://api.github.com/repos/${fullName}`, {
          headers,
        });
        if (!res.ok) throw new Error(`Failed to fetch ${fullName}`);
        return res.json();
      })
    );

    cachedData = results;
    lastFetchTime = now;

    return NextResponse.json(results);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch repos" },
      { status: 500 }
    );
  }
}
