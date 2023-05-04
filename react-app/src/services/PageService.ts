const API_BASE_URL = "https://10up-frontend-challenge.dev/api/v1";

export interface IEPage {
  id: number;
  post_name: string;
  post_title: string;
  post_content: string;
}

export interface IEHomePage {
  data: IEPage;
}

const handleErrors = async (response: Response): Promise<Response> => {
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || "Error fetching data");
  }
  return response;
};

const parseJSON = (response: Response): Promise<IEHomePage> => response.json();

const fetchJSON = async (url: string): Promise<IEHomePage> => {
  try {
    const response = await fetch(url);
    const validResponse = await handleErrors(response);
    return parseJSON(validResponse);
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};

export const fetchPageByName = async (post_name: string): Promise<IEHomePage> => {
  const url = `${API_BASE_URL}/pages/${post_name}`;
  const json = await fetchJSON(url);
  return json;
};
