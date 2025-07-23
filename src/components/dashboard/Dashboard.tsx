import { auth } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const logout = async () => {
        await auth.signOut();
        navigate("/login");
    };

    return (
        <div>
            <h1>Welcome, {user?.email}</h1>
            <button onClick={logout}>Log Out</button>
        </div>
    );
}
