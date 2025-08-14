import { useDeleteUser } from "../model/useDeleteUser";


export const  DeleteUserButton = ({userId})=>{
	  const { handleDeleteUser, isLoading } = useDeleteUser();

	   const handleClick = async () => {
			 console.log("userId");
       console.log(userId);
      await handleDeleteUser(userId);       
     };

	return (
    <button disabled={isLoading} onClick={handleClick}>
      {isLoading ? "Видалення..." : "Видалити"}
    </button>
  );
}