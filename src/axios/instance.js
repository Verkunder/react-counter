import axios from "axios";

const instance = axios.create({
  baseURL: "https://boiling-refuge-66454.herokuapp.com/images",
  headers: { name: "value", test: "test" },
});

export default instance;
