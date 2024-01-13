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

export const addNewPatient = async () => {
  try {
    const { data, error } = await supabase
      .from("drug_allergy")
      .select("*")
      .eq("patient_id", 1);

    return { data, error };
  } catch (error) {
    // Handle any errors that might occur during the Supabase query
    console.error("Error fetching drug allergy data:", error.message);
    return { error: error.message };
  }
};
