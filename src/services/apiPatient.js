import supabase, { supabaseUrl } from "./supabase";

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

export const getPatientData = async (patientId) => {
  try {
    const { data, error } = await supabase
      .from("patient")
      .select("*")
      .eq("patient_id", patientId);

    return { data, error };
  } catch (error) {
    // Handle any errors that might occur during the Supabase query
    console.error("Error fetching patient data:", error.message);
    return { error: error.message };
  }
};

export async function addNewPatient(newPatient) {
  const { data, error } = await supabase
    .from("patient")
    .insert([newPatient])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be updated");
  }

  return data;
}

export async function addDrugAllergyData(allergyData) {
  const investigationName = `${Math.random()}-${Math.random()}-${
    allergyData.investigation.name
  }`.replaceAll("/", "");
  const investigationPath = `${supabaseUrl}/storage/v1/object/public/investigations/${investigationName}`;
  const investigationFile = allergyData.investigation;

  const { data, error } = await supabase
    .from("drug_allergy")
    .insert([{ ...allergyData, investigation: investigationPath }])
    .select()
    .single();

  if (error) {
    console.log(error);

    throw new Error("data could not be inserted ");
  }

  // 2. upload the investigation
  const { error: storageError } = await supabase.storage
    .from("investigations")
    .upload(investigationName, investigationFile);

  // 3. delete cabin if investigation did not get uploaded
  if (storageError) {
    await supabase.from("drug_allergy").delete().eq("id", data.id);

    console.log(error);

    throw new Error(
      " investigation could not be uploaded , and the allergyData was not inserted"
    );
  }

  return data;
}

export async function addOtherAllergyData(allergyData) {
  const investigationName = `${Math.random()}-${Math.random()}-${
    allergyData.investigation.name
  }`.replaceAll("/", "");
  const investigationPath = `${supabaseUrl}/storage/v1/object/public/investigations/${investigationName}`;
  const investigationFile = allergyData.investigation;

  const { data, error } = await supabase
    .from("other_allergies")
    .insert([{ ...allergyData, investigation: investigationPath }])
    .select()
    .single();

  if (error) {
    console.log(error);

    throw new Error("data could not be inserted ");
  }

  // 2. upload the investigation
  const { error: storageError } = await supabase.storage
    .from("investigations")
    .upload(investigationName, investigationFile);

  // 3. delete cabin if investigation did not get uploaded
  if (storageError) {
    await supabase.from("drug_allergy").delete().eq("id", data.id);

    console.log(error);

    throw new Error(
      " investigation could not be uploaded , and the allergyData was not inserted"
    );
  }

  return data;
}

export async function addSpecialConditionData(condition) {
  const investigationName = `${Math.random()}-${Math.random()}-${
    condition.investigation.name
  }`.replaceAll("/", "");
  const investigationPath = `${supabaseUrl}/storage/v1/object/public/investigations/${investigationName}`;
  const investigationFile = condition.investigation;

  const { data, error } = await supabase
    .from("special_condition")
    .insert([{ ...condition, investigation: investigationPath }])
    .select()
    .single();

  if (error) {
    console.log(error);

    throw new Error("data could not be inserted ");
  }

  // 2. upload the investigation
  const { error: storageError } = await supabase.storage
    .from("investigations")
    .upload(investigationName, investigationFile);

  // 3. delete cabin if investigation did not get uploaded
  if (storageError) {
    await supabase.from("special_condition").delete().eq("id", data.id);

    console.log(error);

    throw new Error(
      " investigation could not be uploaded , and the condition was not inserted"
    );
  }

  return data;
}
