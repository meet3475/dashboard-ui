import { Search, Bell, ChevronDown, ArrowRight, ArrowLeft, User, Settings, LogOut } from 'lucide-react';
import profileImage from '../../assets/images/profile.png';
import { useState } from 'react';

const Navbar = ({ onToggleSidebar, isSidebarCollapsed }) => {
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
    return (
        <div className="bg-[#FFFFFF] shadow-lg border-b border-gray-200">
            <div className="px-4 py-[18px] sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex-1 flex items-center relative">
                        <button
                            onClick={onToggleSidebar}
                            className="absolute -left-14  mr-4 p-2 rounded-md shadow-xl bg-[#FFFFFF] border border-[#FFFFFF] text-[#40A198]"
                        >
                            {isSidebarCollapsed ? <ArrowRight className="h-6 w-6" /> : <ArrowLeft className="h-6 w-6" />}
                        </button>
                        <div className="relative w-full max-w-md">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-12 pr-7 py-2 border border-[#C3D4E9] rounded-[70px] bg-[#FFFFFF] text-sm placeholder-[#596780]"
                                placeholder="Search something here"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="relative w-11 h-11 rounded-[100%] border border-[#C3D4E9]">
                            <button 
                                className="px-[10px] py-[10px] text-[#292D32] hover:bg-gray-100 rounded-full transition-colors"
                                onMouseEnter={() => setIsNotificationDropdownOpen(true)}
                                onMouseLeave={() => setIsNotificationDropdownOpen(false)}
                            >
                                <Bell className="h-6 w-6" />
                            </button>
                            <span className="absolute top-0 right-1 h-[11px] w-[11px] bg-[#FF4423] rounded-full"></span>
                            
                            {isNotificationDropdownOpen && (
                                <div 
                                    className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
                                    onMouseEnter={() => setIsNotificationDropdownOpen(true)}
                                    onMouseLeave={() => setIsNotificationDropdownOpen(false)}
                                >
                                    <div className="p-4 border-b border-gray-200">
                                        <h3 className="font-semibold text-[#1A202C]">Notifications</h3>
                                    </div>
                                    <div className="p-4">
                                        <p className="text-sm text-gray-500">No new notifications</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="relative">
                            <div 
                                className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 rounded-lg px-3 py-2 transition-colors"
                                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                            >
                                <div className="h-11 w-11 rounded-full flex items-center justify-center">
                                    <img src={profileImage} alt="Profile" className="h-9 w-9 rounded-full object-cover" />
                                </div>
                                <span className="text-base font-semibold text-[#1A202C]">John Cornors</span>
                                <ChevronDown className={`h-5 w-5 text-[#596780] transition-transform ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
                            </div>
                            
                            {isProfileDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                                    <div className="p-4 border-b border-gray-200">
                                        <p className="font-semibold text-[#1A202C]">John Cornors</p>
                                        <p className="text-sm text-gray-500">john@example.com</p>
                                    </div>
                                    <div className="py-2">
                                        <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-[#596780] hover:bg-gray-50 transition-colors">
                                            <User size={18} />
                                            <span>My Profile</span>
                                        </button>
                                        <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-[#596780] hover:bg-gray-50 transition-colors">
                                            <Settings size={18} />
                                            <span>Settings</span>
                                        </button>
                                        <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-[#FF4423] hover:bg-gray-50 transition-colors">
                                            <LogOut size={18} />
                                            <span>Log Out</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;