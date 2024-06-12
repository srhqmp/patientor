import { v4 as uuid } from "uuid";

import patients from "../../data/patients";
import { NonSensitivePatientData, Patient, NewPatient } from "../types";

const getAllPatients = (): NonSensitivePatientData[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (data: NewPatient): Patient => {
  const newPatient = {
    id: uuid(),
    ...data,
  };

  patients.push(newPatient);
  return newPatient;
};

export default { getAllPatients, addPatient };
