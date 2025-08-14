import { useCreateUserMutation } from "@/entities/user/api/userApi";
import { frontRoutes } from "@/shared/config/routes/frontRoutes";
import { useNavigate } from "react-router";

export const useAddUser = () => {
  const [addUserMutation, { isLoading, error }] = useCreateUserMutation();
  const navigate = useNavigate();

  const addUser = async (userData) => {
    try {
      await addUserMutation(userData).unwrap();
      navigate(frontRoutes.pages.UsersPage.navigationPath);
      return true;
    } catch (e) {
      console.error("Failed to add user:", e);
      return false;
    }
  };

  return { addUser, isLoading, error };
};
