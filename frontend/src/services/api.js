import axios from "axios";
import { redirectToLogin } from "../hooks/useNavigateLogin";
const BASE_URL = "https://api-fnft.dalosnetwork.com";

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      redirectToLogin();
    }
    return Promise.reject(error);
  }
);

export default api;

async function sha256(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer)); 
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

export const loginUser = async (username, password, two_fa_code) => {
  try {
    const passwordSha = await sha256(password);
    console.log("Login attempt:", username, passwordSha, two_fa_code);

    const response = await api.post(`${BASE_URL}/login`, {
      username,
      password: passwordSha,
      two_fa_code,
    });

    if (response.status === 200) {
      console.log("Login success:", response.data);
      return response;
    } else {
      console.error("Unexpected status code:", response.statusText);
      return null;
    }
  } catch (error) {
    if (error.response) {
      console.error("Login failed:", error.response.status, error.response.data);
      return {
        status: error.response.status,
        message: error.response.data.error || "Login failed",
      };
    } else {
      console.error("Network or unexpected error:", error.message);
      return {
        status: null,
        message: "Network or unexpected error",
      };
    }
  }
};


export const listTransactions = async (filter) => {
  try {
    const response = await api.post(
      `${BASE_URL}/api/nomad/transfer/list`,
      filter,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(response);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Failed to fetch transactions:", response.statusText);
      return null;
    }
  } catch (error) {
    if (error.response) {
      console.error("Error fetching transactions:", error);
      return {
        status: error.response.status,
        message: error.response.data.error || "Failed to fetch transactions",
      };
    } else {
      console.error("Error fetching transactions:", error);
      return null;
    }
  }
};
