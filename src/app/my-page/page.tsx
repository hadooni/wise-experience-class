"use client";
import { useAuth } from "@/hooks/useAuth";

const page = () => {
  const { onSignOutHandler } = useAuth();
  return (
    <div>
      <button onClick={onSignOutHandler} className="bg-zinc-600 mt-40">
        로그아웃
      </button>
    </div>
  );
};

export default page;
