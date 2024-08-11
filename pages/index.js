"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/todos"); // Redirect to the Todo List page
  }, [router]);

  return null; // or a loading spinner
};

export default Home;
