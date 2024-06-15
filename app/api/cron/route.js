import { NextResponse } from "next/server";
import { supabaseClient } from "@/supabaseClient";

export async function GET(req) {
//   const supabase = await createClient();

  console.log("Starting GET request");
  try {
    // Ping the Supabase endpoint to keep it active
    const { data, error } = await supabaseClient
      .from("staffers")
      .select("id")
      .limit(1);

    if (error) {
      console.error("Error fetching data:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

      console.log("Data fetched successfully:", data);
    return NextResponse.json({ users: data }, { status: 200 });
  } catch (error) {
      console.error("Caught error:", error.message);
    return NextResponse.json(
      { error: (error).message },
      { status: 500 }
    );
  }
}
