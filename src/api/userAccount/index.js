import http from "../../utils/net/http";

export default {
  login(username, password) {
    return http.post("oauth/token", null, {
      params: {
        username,
        password,
        grant_type: "password",
        client_id: "lucky",
        client_secret: "123456"
      }
    });
  },
  getUserByUsername(username){
    return http.get("/api/v1/user/getByUsername", {
      params: {username}
    });
  }
};
