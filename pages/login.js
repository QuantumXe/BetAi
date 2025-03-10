// pages/login.js
import { signIn } from "next-auth/react";
import Head from "next/head";

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <Head>
        <title>Login | Trading Platform</title>
      </Head>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold mb-4">Welcome to the Trading Platform</h1>
        <button
          onClick={() => signIn("google")}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
