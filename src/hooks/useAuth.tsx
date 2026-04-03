import { useContext } from "react";
import { AuthContext } from "@/context/Provider";

export const useAuth = () => {
	const context = useContext(AuthContext);
	return context ?? { user: null, setUser: () => {} };
};
