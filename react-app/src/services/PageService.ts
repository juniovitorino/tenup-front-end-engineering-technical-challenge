const API_BASE_URL = 'https://10up-frontend-challenge.dev/api/v1';
export interface HomePage {}

const handleErrors = async (response: Response): Promise<Response> => {
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || 'Error fetching data');
  }
  return response;
};

const parseJSON = (response: Response): Promise<any> => response.json();

const fetchJSON = async (url: string): Promise<any> => {
  try {
    const response = await fetch(url);
    const validResponse = await handleErrors(response);
    return parseJSON(validResponse);
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};

export const fetchPageByName = async (post_name: string): Promise<HomePage> => {
  const url = `${API_BASE_URL}/pages/${post_name}`;
  const json = await fetchJSON(url);
  const data: HomePage = json.data;
  return data;
};

