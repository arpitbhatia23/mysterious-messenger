import axios from "axios";

export const useAuth = () => {
  // Login
  const login = async (user) => {
    try {
      const response = await axios.post(
        `https://mysterious-messenger.onrender.com/api/v1/users/login`,
        user,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        }
      );
      return response.data;
    } catch (error) {
      return error.response ? error.response.data : error.message;
    }
  };

  // Register
  const signup = async (user) => {
    try {
      const response = await axios.post(
        `/api/v1/users/register`,
        user,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        }
      );
      return response.data;
    } catch (error) {
      return error.response ? error.response.data : error.message;
    }
  };

  // Logout
  const logout = async () => {
    try {
      const response = await axios.post(
        `/api/v1/users/logout`,
        {}, // Send an empty body if the endpoint expects no data
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        }
      );
      return response.data;
    } catch (error) {
      return error.response ? error.response.data : error.message;
    }
  };

  // Refresh Token
  const refreshToken = async () => {
    try {
      const response = await axios.post(
        `/api/v1/users/refreshToken`,
        {}, // Send an empty body if the endpoint expects no data
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        }
      );
      return response.data;
    } catch (error) {
      return error.response ? error.response.data : error.message;
    }
  };

  // Change Password
  const changePassword = async (pass) => {
    try {
      const response = await axios.post(
        `/api/v1/users/change-password`,
        pass,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      return response.data;
    } catch (error) {
      return error.response ? error.response.data : error.message;
    }
  };

  // Get Current User
  const currentUser = async () => {
    try {
      const response = await axios.get(
        `/api/v1/users/current-user`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        }
      );
      return response.data;
    } catch (error) {
      return error.response ? error.response.data : error.message;
    }
  };

  // Update Account
  const updateAccount = async (user) => {
    try {
      const response = await axios.patch(
        `/api/v1/users/update-account`,
        user,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        }
      );
      return response.data;
    } catch (error) {
      return error.response ? error.response.data : error.message;
    }
  };

  // Generate Link
  const generateLink = async (link) => {
    try {
      const response = await axios.get(
        `/api/v1/users/generatelink`,
        {
          params: link, // Use params to send query parameters
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        }
      );
      return response.data;
    } catch (error) {
      return error.response ? error.response.data : error.message;
    }
  };

  return {
    login,
    signup,
    logout,
    refreshToken,
    changePassword,
    currentUser,
    updateAccount,
    generateLink
  };
};
