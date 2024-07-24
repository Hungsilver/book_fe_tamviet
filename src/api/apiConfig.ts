"use client";
import axios from "axios";

const apiUrl: string | undefined = process?.env?.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  // baseURL: "http://localhost:8080/api/",
  baseURL: `http://${apiUrl}/api/`,
});
