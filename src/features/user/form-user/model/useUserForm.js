import { useState } from "react";

export const useUserForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    passwordRepeat,
    setPasswordRepeat,
  };
};
