import { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { useAuth } from '../contexts/AuthContext';
import { auth } from '../firebase';

export function AppLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await auth.signOut();
        navigate('/login');
    };

    const sidebarItems = [
        { to: '/', label: 'Dashboard' },
        { to: '/contacts', label: 'Contacts' },
        // add more dashboard routes...
    ];

    return (
        <div className="h-screen flex flex-col bg-gray-100">
            {/* Navbar */}
            <header className="bg-white shadow border-b">
                <div className="px-4 py-3 flex justify-between items-center">
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="p-2 hover:bg-gray-200 rounded-md"
                    >
                        {/* You can replace with a heroicon */}
                        ☰
                    </button>
                    <div className="flex items-center space-x-3">
                        <span className="text-gray-700 font-medium">{user?.email}</span>
                        <Menu as="div" className="relative">
                            <Menu.Button className="p-2 hover:bg-gray-200 rounded-full">
                                ▼
                            </Menu.Button>
                            <Menu.Items className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            className={`w-full text-left px-4 py-2 ${
                                                active ? 'bg-gray-100' : ''
                                            }`}
                                            onClick={handleLogout}
                                        >
                                            Log Out
                                        </button>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Menu>
                    </div>
                </div>
            </header>

            <div className="flex flex-grow overflow-hidden">
                {/* Sidebar */}
                <aside
                    className={`bg-gray-800 text-white transition-width duration-300 ${
                        collapsed ? 'w-16' : 'w-64'
                    } flex-shrink-0`}
                >
                    <nav className="mt-6 space-y-2">
                        {sidebarItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 hover:bg-gray-700 transition ${
                                        isActive ? 'bg-gray-700' : ''
                                    }`
                                }
                            >
                                {/* Icons placeholders */}
                                <span className="w-6 h-6 bg-gray-600 rounded-sm mr-3"></span>
                                {!collapsed && <span>{item.label}</span>}
                            </NavLink>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <main
                    className={`flex-grow p-6 overflow-y-auto transition-margin duration-300 ${
                        collapsed ? 'ml-16' : 'ml-64'
                    }`}
                >
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
