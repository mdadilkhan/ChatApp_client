import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Custom hook for making API calls using Axios.
 * 
 * @param {string} url - The API endpoint URL.
 * @param {string} method - The HTTP method (e.g., 'GET', 'POST', 'PUT', 'DELETE').
 * @param {object} [options] - Additional options for the hook.
 * @param {boolean} [options.autoFetch=true] - Whether to fetch data automatically on mount.
 * @param {object} [options.initialData=null] - Initial data to return before the API call.
 * @param {object} [options.config={}] - Axios request configuration (e.g., headers, body).
 * @returns {object} - An object containing loading state, error state, data, and a manual fetch function.
 */
const useApi = (url, method = 'GET', options = {}) => {
  const { autoFetch = true, initialData = null, config = {} } = options;

  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to make the API call
  const fetchData = async (customConfig = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios({
        url,
        method,
        ...config,
        ...customConfig,
      });

      setData(response.data.data);
      return response.data.data; // Optionally return the data for chaining
    } catch (err) {
      setError(err);
      throw err; // Re-throw the error for further handling if needed
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch data on mount if `autoFetch` is true
  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [url, method, autoFetch, JSON.stringify(config)]); // Dependencies ensure re-fetching when these change

  return { data, loading, error, fetchData };
};

export default useApi;