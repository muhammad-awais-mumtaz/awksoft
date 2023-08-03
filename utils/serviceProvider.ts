import { getDataFromCollection } from "./firebase/firestore/databaseManip";

export interface serviceProvider {
  employeeId: string;
  name: null | string;
  email: null | string;
  skills: string[];
  skillsVerified: boolean;
  profileImage: null | string;
}
