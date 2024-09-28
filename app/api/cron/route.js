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

     return NextResponse.json({ message: "Keeping backend awake..." });
  } catch (error) {
       return NextResponse.json({ error: error }, { status: 500 });
  }
}
