import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function SignOut() {
    const [cookies, , removeCookie] = useCookies(['authToken']);
    const navigate = useNavigate();

    useEffect(() => {
        if (cookies.authToken) {
            removeCookie('authToken')
            navigate('/');
        }
    })

}

export default SignOut;
