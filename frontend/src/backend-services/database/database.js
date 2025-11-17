import env from '../../env/env';
import { toast } from "react-toastify";
import {authenticatedFetch} from '../fetchWrapper';

class DatabaseService {
  constructor() {
    this.baseUrl = env.backendUrl;
  }

  // ✅ Utility to get token
  getAuthHeaders(skipContentType = false) {
    const token = localStorage.getItem('authToken');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    if (!skipContentType) {
      headers["Content-Type"] = "application/json";
    }
    return headers;
  }
  
  

  // ✅ Utility to handle responses globally
  async handleResponse(response) {
    const data = await response.json();
    console.log(data)

    if (response.status === 401) {
      localStorage.removeItem('authToken');
      toast("Session expired. Please log in again.");
      window.location.href = "/login"; // or use `navigate()` from router
    }

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }
    return data;
  }

  // ✅ Example method: Fetch all users (admin only)
// async getAllUsers() {
//   try {
//     const response = await authenticatedFetch(`${this.baseUrl}/api/admin/users`, {
//       method: "GET",
//       headers: this.getAuthHeaders(),
//     });
//     return this.handleResponse(response);
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     throw error;
//   }
// }

}

const databaseService = new DatabaseService();
export default databaseService;