export async function login(httpClient, email, password, fcmWebToken) {
    var body = {
      email,
      password,
      fcmWebToken
    };
    return await httpClient.post("/user/login", false, {}, body);
}