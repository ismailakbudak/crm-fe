// src/components/Signup.tsx
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";

export function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            {error && <div className="text-red-600">{error}</div>}
            <input type="email" required placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input type="password" required placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button type="submit">Sign Up</button>
            <p><Link to="/login">Log In</Link> instead</p>
        </form>
    );
}
