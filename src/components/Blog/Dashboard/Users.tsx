'use slient'

import { useEffect, useState } from "react"

import { getUsers } from "@/lib/api"
import { typesUser } from "@/lib/types"
import { LoadingComponent, Notification } from "../Status";

export default function Users() {
    const [users, setUsers] = useState<typesUser[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            const data = await getUsers();

            setUsers(data.users);
            setLoading(false);
        }

        fetch()
    }, [])

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Users</h2>

            {loading ? (
                <LoadingComponent />
            ) : users.length === 0 ? (
                <Notification message="Users not available" />
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-3 text-left text-sm font-medium text-gray-700">Profile Picture</th>
                                <th className="p-3 text-left text-sm font-medium text-gray-700">Full Name</th>
                                <th className="p-3 text-left text-sm font-medium text-gray-700">Username</th>
                                <th className="p-3 text-center text-sm font-medium text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id} className="border-b hover:bg-gray-50">
                                    <td className="p-3">
                                        <div className="w-16 h-16 overflow-hidden rounded-full bg-gray-200">
                                            <img
                                                src={user.avatar || "/img/human.png"}
                                                alt={user.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </td>
                                    <td className="p-3 font-medium text-gray-800">{user.name}</td>
                                    <td className="p-3 font-medium text-gray-800">@{user.username}</td>
                                    <td className="p-3 text-center text-sm text-gray-600 italic">
                                        {/* Replace this with buttons if needed */}
                                        No action
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}