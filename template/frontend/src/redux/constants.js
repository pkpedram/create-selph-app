
export const ApiConfig = {
    domain: process.env.NODE_ENV == 'development' ? 'http://localhost:5000' : process.env.BACKEND_URL,
    baseUrl: process.env.NODE_ENV == 'development' ?  'https://localhost:5000/api' : process.env.API_URL,
  };
