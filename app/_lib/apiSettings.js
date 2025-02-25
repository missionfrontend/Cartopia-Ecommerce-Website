import { supabase } from "./supabase";

export async function getSetting(){
    const {data,error} = await supabase.from("settings").select("*")

    if(error) throw new Error("Settings not found")

        return data;
}

export async function getCountry() {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name")
    const data = await res.json();

    return data;
}