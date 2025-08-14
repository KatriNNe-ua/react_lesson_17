import { useAddUser } from "@/features/user/add-user";
import { UserForm, useUserForm } from "@/features/user/form-user";
import { useState } from "react";

export const UserFormWidget = ({setForm}) => {
  const [passwordRight, setPasswordRight] = useState(true);
  const {
    email: addEmail,
    setEmail,
	name: addName,
	 setName,
    password: addPassword,
    setPassword,
    passwordRepeat,
    setPasswordRepeat,
  } = useUserForm();

  const { addUser, isLoading } = useAddUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRepeat === addPassword) {
      await addUser({
        email: addEmail,
		name: addName,
        password: addPassword,
        role: "user",
      });
      setPasswordRight(true);
	  setForm(prev=>!prev)
    } else setPasswordRight(false);
  };

  return (
    <>
      <UserForm
        name={addName}
        onNameChange={(e) => setName(e.target.value)}
        email={addEmail}
        onEmailChange={(e) => setEmail(e.target.value)}
        password={addPassword}
        onPasswordChange={(e) => setPassword(e.target.value)}
        passwordRepeat={passwordRepeat}
        onPasswordRepeatChange={(e) => setPasswordRepeat(e.target.value)}
        onSubmit={handleSubmit}
        isSubmitting={isLoading}
      />
      {!passwordRight && <div>Паролі не збігаються.</div>}
    </>
  );
};
