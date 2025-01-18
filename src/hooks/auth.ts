import { useContext } from "react";

const AuthHook = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = async (email: string, password: string) => {
    // Call your login API here
    setUser({ email, password });
  };

  const logout = async () => {
    // Call your logout API here
    setUser(null);
  };

  return { user, login, logout };
}

export default AuthHook;