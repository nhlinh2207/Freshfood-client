export async function login(httpClient, email, password) {
    var body = {
      email,
      password,
    };
    return await httpClient.post("/user/login", {}, body);
}