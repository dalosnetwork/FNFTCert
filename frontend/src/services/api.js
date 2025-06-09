import axios from "axios";
import { redirectToLogin } from "../hooks/useNavigateLogin";
const BASE_URL = "https://fnft-frontend-test.dalosnetwork.com";
const token = sessionStorage.getItem("token");
const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
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
      console.error(
        "Login failed:",
        error.response.status,
        error.response.data
      );
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

export const getStats = async () => {
  try {
    const response = await api.get(`${BASE_URL}/get_stats`);
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

export const getCertificates = async (params) => {
  try {
    const response = await api.get(
      `${BASE_URL}/get_certificates?page=${params.page}&per_page=${params.per_page}&search=${params.search}&sort_by=${params.sort_by}&sort_order=${params.sort_order}`
    );
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

export const getTransactions = async (params) => {
  try {
    const query = new URLSearchParams();
    if (params.page) query.append("page", params.page);
    if (params.per_page) query.append("per_page", params.per_page);
    if (params.search !== undefined) query.append("search", params.search);
    if (params.min_gr) query.append("gram_min", params.min_gr);
    if (params.max_gr) query.append("gram_max", params.max_gr);
    if (params.date_from) query.append("date_from", params.date_from);
    if (params.date_to) query.append("date_to", params.date_to);
    if (params.sort_by) query.append("sort_by", params.sort_by);
    if (params.sort_order) query.append("sort_order", params.sort_order);

    const response = await api.get(
      `${BASE_URL}/get_transactions?${query.toString()}`
    );

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

export const downloadCSV = async () => {
  try {
    const response = await api.get(`${BASE_URL}/download_transactions_csv`, {
      responseType: "blob",
    });

    console.log(response);
    if (response.status === 200) {
      const blob = response.data;
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "transactions.csv";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
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
