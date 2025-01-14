"use client";

import Link from "next/link";
const LoginPage = () => {
  return (
    <div>
      <div>
        <h2>Login</h2>
        <form>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <button type="submit">Log In</button>
        </form>
      </div>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
};

export default LoginPage;
