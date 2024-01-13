import supabase from "./supabase";

export const getDrugAllergysData = async (patientId) => {
  try {
    const { data, error } = await supabase
      .from("drug_allergy")
      .select("*")
      .eq("patient_id", patientId);

    return { data, error };
  } catch (error) {
    // Handle any errors that might occur during the Supabase query
    console.error("Error fetching drug allergy data:", error.message);
    return { error: error.message };
  }
};

export async function addNewPatient(newCabin) {
  console.log(newCabin);
  const { data, error } = await supabase
    .from("patient")
    .insert([{ ...newCabin }])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be updated");
  }

  return data;
}
