import { UserList } from "@/widgets/userList/UserList";
import { roles } from "@/shared/config/roles";
import { useSelector } from "react-redux";
import { selectAuthUser } from "@/features/auth";
import { AddUserButton } from "@/features/user/add-user";
import { useState } from "react";
import { UserFormWidget } from "@/widgets/UserFormWidget";

export default function UsersPage() {
  const user = useSelector(selectAuthUser);
  const [form, setForm] = useState(false);
  function openForm() {
    setForm((prev) => !prev);
  }

  if (!user || user.role !== roles.admin) {
    return (
      <div>
        Доступ заборонено. Ця сторінка доступна лише для адміністратора.
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1>Користувачі</h1>
        <AddUserButton openForm={openForm} />
      </div>
      {form && <UserFormWidget setForm={setForm}/>}
      <UserList />
    </div>
  );
}
