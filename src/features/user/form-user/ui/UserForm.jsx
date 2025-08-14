export const UserForm = ({
  email,
  onEmailChange,
  name,
  onNameChange,
  password,
  onPasswordChange,
  passwordRepeat,
  onPasswordRepeatChange,
  onSubmit,
  isSubmitting,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6"
    >
      <h1 className="text-xl font-semibold mb-4 text-black">Новий user:</h1>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-1 text-black"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={onNameChange}
            disabled={isSubmitting}
            className=" text-black w-full border border-gray-800 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-gray-900 disabled:bg-gray-100"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-1 text-black"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={onEmailChange}
            disabled={isSubmitting}
            className=" text-black w-full border border-gray-800 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-gray-900 disabled:bg-gray-100"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium mb-1 text-black"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={onPasswordChange}
            disabled={isSubmitting}
            className=" text-black w-full border border-gray-800 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-gray-900 disabled:bg-gray-100"
          />
        </div>

        <div>
          <label
            htmlFor="passwordRepeat"
            className="block text-sm font-medium mb-1 text-black"
          >
            Password Repeat:
          </label>
          <input
            type="password"
            id="passwordRepeat"
            value={passwordRepeat}
            onChange={onPasswordRepeatChange}
            disabled={isSubmitting}
            className=" text-black w-full border border-gray-800 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-gray-900 disabled:bg-gray-100"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={
          isSubmitting ||
          email === "" ||
          password === "" ||
          passwordRepeat === ""
        }
        className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Збереження..." : "Зберегти"}
      </button>
    </form>
  );
};
