import { supabaseClient } from "@/supabaseClient";
import { NextResponse } from "next/server";

export async function GET(req) {
  //   const supabase = await createClient();

  console.log("Starting GET request");
  try {
    // Ping the Supabase endpoint to keep it active
    await Promise.all([
      supabaseClient.from("staffers").select("id"),
      supabaseClient.from("beaders").select("id"),
      supabaseClient.from("consultants").select("id"),
      supabaseClient.from("customers").select("id"),
      supabaseClient.from("measurements").select("id"),
      supabaseClient.from("gallery").select("id"),
      supabaseClient.from("orders").select("id"),
      supabaseClient.from("tailors").select("id"),
    ]);

    if (error) {
      console.error("Error fetching data:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("Data fetched successfully:", data);
    return NextResponse.json({ users: data }, { status: 200 });
  } catch (error) {
    console.error("Caught error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
