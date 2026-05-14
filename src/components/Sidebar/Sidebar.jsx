import React, { useState } from 'react';
import {
  LayoutDashboard,
  TrendingUp,
  FileText,
  Package,
  DollarSign,
  Inbox,
  Users,
  Settings,
  HelpCircle,
  Moon,
  Sun,
  LogOut,
  BriefcaseBusiness
} from 'lucide-react';
import logo from '../../assets/images/letlogo.png';
import logol from '../../assets/images/logol.png'

const Sidebar = ({ isCollapsed }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeItemId, setActiveItemId] = useState(1);
  const menuItems = [
    { id: 1, name: 'Dashboard', icon: LayoutDashboard },
    { id: 2, name: 'Insight', icon: TrendingUp },
    { id: 3, name: 'Invoices', icon: FileText },
    { id: 4, name: 'Products', icon: Package },
    { id: 5, name: 'Reimburse', icon: DollarSign },
    { id: 6, name: 'Inbox', icon: Inbox },
    { id: 7, name: 'People & Teams', icon: Users },
  ];

  const preferences = [
    { id: 8, name: 'Settings', icon: Settings },
    { id: 9, name: 'Help & Center', icon: HelpCircle },
  ];

  return (
    <div className="w-full bg-white border-r border-gray-200 flex flex-col">
      <div className="px-4 py-8">
        <div className="flex items-center space-x-3">
          <img src={isCollapsed ? logol : logo} alt="Logo" className={isCollapsed ? "w-12 h-12" : "w-40 h-12"} />
        </div>
      </div>

      <div className="flex-1 px-4">
        <h3 className={`text-sm font-medium text-[#90A3BF] uppercase tracking-wider mb-[10px]  ${isCollapsed ? 'px-1 text-[8px]' : 'px-2 text-sm'}`}>
          Main Menu
        </h3>
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveItemId(item.id)}
                className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-2.5 rounded-lg transition-colors ${activeItemId === item.id
                  ? 'bg-[#40A198] text-[#FFFFFF] font-semibold'
                  : 'text-[#596780] hover:bg-[#40A198] hover:text-[#FFFFFF]'
                  }`}
              >
                <Icon size={20} />
                <span className={`text-lg font-medium ${isCollapsed ? 'hidden' : ''}`}>{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-8">
          <h3 className={`font-medium text-[#90A3BF] uppercase tracking-wider mb-[10px]  ${isCollapsed ? 'px-1 text-[9px]' : 'px-2 text-sm'}`}>
            Preferences
          </h3>
          <nav className="space-y-1">
            {preferences.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItemId(item.id)}
                  className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-2.5 rounded-lg transition-colors ${activeItemId === item.id
                    ? 'bg-[#40A198] text-[#FFFFFF] font-semibold'
                    : 'text-[#596780] hover:bg-[#40A198] hover:text-[#FFFFFF]'
                    }`}
                >
                  <Icon size={20} />
                  <span className={`text-lg font-medium ${isCollapsed ? 'hidden' : ''}`}>{item.name}</span>
                </button>
              );
            })}

            <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} px-3 py-2.5 rounded-lg text-[#596780]`}>
              <div className={`flex items-center ${isCollapsed ? '' : 'space-x-3'}`}>
                <BriefcaseBusiness size={20} />
                <span className={`font-medium text-lg ${isCollapsed ? 'hidden' : ''}`}>Dark Mode</span>
              </div>
              {!isCollapsed && (
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="relative inline-flex h-9 w-16 items-center rounded-full bg-[#F6F7F9] hover:bg-[#E5E7EB] transition-colors"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full  transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-1'
                      }`}
                  />
                  <div className="absolute inset-0 flex items-center justify-between px-1">
                    <Sun
                      size={20}
                      className={`transition-colors ${isDarkMode ? 'text-[#FFFFFF] bg-[#40A198] rounded-full' : 'text-[#1A202C]'
                        }`}
                    />
                    <Moon
                      size={20}
                      className={`transition-colors ${isDarkMode ? 'text-[#1A202C]' : 'text-[#FFFFFF] bg-[#40A198] rounded-full'
                        }`}
                    />
                  </div>
                </button>
              )}
            </div>
          </nav>
        </div>
      </div>

      <div className={`p-4 mt-48`}>
        <button className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-2.5 rounded-lg text-[#596780] hover:bg-[#FF4423] hover:text-white transition-colors`}>
          <LogOut size={20} />
          <span className={`text-lg font-medium ${isCollapsed ? 'hidden' : ''}`}>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;