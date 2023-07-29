import { updateProfile } from "firebase/auth";

export async function updateUserNameOrPhoto(
  user: any,
  newUserName: null | string,
  newImageUrl: null | string
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
