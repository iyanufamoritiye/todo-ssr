"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/todos");
  }, [router]);

  return null;
};

export default Home;
