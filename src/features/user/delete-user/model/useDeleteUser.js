import { useDeleteUserMutation } from "@/entities/user/api/userApi";


export const useDeleteUser= ()=>{
	  const [deleteUserMutation, { isLoading, error }] =
    useDeleteUserMutation()

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUserMutation(userId).unwrap();
        console.log(`User ${userId} deleted successfully.`);
        return true
      } catch (e) {
        console.error('Failed to delete user:', e)
        return false
      }
    }
    return false
}
 return { handleDeleteUser, isLoading, error };
}