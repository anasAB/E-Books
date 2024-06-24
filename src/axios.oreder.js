import axios from "axios";

const instance = axios.create({
  baseURL: "https://e-books-64d4f-default-rtdb.firebaseio.com/"
});

export default instance;