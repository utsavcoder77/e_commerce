import { API_URL } from "../constants";
async function SignInAction(data) {
    const url = `${API_URL}/api/v1/auth/sign-in`;
    const respone = await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return respone;
}
export default SignInAction;
