import { API_URL } from "../constants";
async function submitAction(data) {
  const url = `${API_URL}/api/v1/auth/register`;
  const respone = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return respone;
}
export default submitAction;
