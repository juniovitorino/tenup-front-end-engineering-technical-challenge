const API_BASE_URL = 'https://10up-frontend-challenge.dev/api/v1';

export interface Page {
  id: number;
  content: string;
  fields: {
    site_logo: string;
  }
}

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

export const fetchPageByName = async (post_name: string): Promise<Page> => {
  const url = `${API_BASE_URL}/pages/${post_name}`;
  const json = await fetchJSON(url);
  const data: Page = json.data;
  return data;
};

