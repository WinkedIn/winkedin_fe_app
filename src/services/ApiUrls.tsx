import config from "../config";

const BASE_API_URL =
  config.constants.BASE_API_URL+"/api/";
  
export default {
  LOGIN_URL: `${BASE_API_URL}student/login`,
};
