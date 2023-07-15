import { updateProfile } from "firebase/auth";

export async function updateUserNameAndPhoto(
  user: any,
  newUserName: string | null,
  newImageUrl: string | null
) {
  if (user) {
    if (newImageUrl) {
      await updateProfile(user, { photoURL: newImageUrl });
    } else if (newUserName) {
      await updateProfile(user, { displayName: newUserName });
    } else {
      await updateProfile(user, {
        displayName: newUserName,
        photoURL: newImageUrl,
      });
    }
  } else {
    console.log("user is not logIn");
  }
}
