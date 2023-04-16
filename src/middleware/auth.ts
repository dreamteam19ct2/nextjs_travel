"use client";
import { NextApiRequest, NextApiResponse } from "next";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const authMiddleware =
  (handler: any) => async (req: NextApiRequest, res: NextApiResponse) => {
    const token = Cookies.get("token");

    if (!token) {
      const router = useRouter();
      router.push("/login");
      return;
    }

    return handler(req, res);
  };

export default authMiddleware;
