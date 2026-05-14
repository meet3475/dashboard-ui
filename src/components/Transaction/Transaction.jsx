import React from 'react';
import { Calendar, ChevronDown, Building2, CreditCard, Layers } from 'lucide-react';
import bank from '../../assets/images/bank.png';
import paypal from '../../assets/images/paypal.png';
import figma from '../../assets/images/figma.png';

const Transaction = () => {
  return (
    <div className="w-full bg-white rounded-[10px] shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-base font-semibold text-[#1A202C]">Transaction History</h2>
        <div className="flex items-center gap-2 px-4 py-2 border border-[#C3D4E9] rounded-md">
          <Calendar className="w-4 h-4 text-[#292D32]" />
          <span className="text-xs font-semibold text-[#292D32]">1 Jan - 1 Feb 2022</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 py-2 border-b border-t border-[#F3F5F7]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-[#90A3BF]">Transactions</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-[#90A3BF]">Date</span>
          <ChevronDown className="w-4 h-4 text-[#90A3BF]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-[#90A3BF]">Amount</span>
          <ChevronDown className="w-4 h-4 text-[#90A3BF]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-[#90A3BF]">Status</span>
          <ChevronDown className="w-4 h-4 text-[#90A3BF]" />
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <div className="grid grid-cols-4 gap-4 items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#33B9381A] flex items-center justify-center">
             <img src={bank} alt="Profile" className="h-4 w-4 object-cover" />
            </div>
            <span className="text-sm font-semibold text-[#1A202C]">Bank Transfer</span>
          </div>
          <span className="text-sm font-semibold text-[#1A202C]">Jan 01, 2022</span>
          <span className="text-sm font-semibold text-[#1A202C]">$2,000.00</span>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#BCE4554D] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#7FB519]"></div>
            </div>
            <span className="text-xs font-semibold text-[#1A202C]">Completed</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EBF4FF] flex items-center justify-center">
              <img src={paypal} alt="Profile" className="h-5 w-4 object-cover" />
            </div>
            <span className="text-sm font-semibold text-[#1A202C]">Paypal Account</span>
          </div>
          <span className="text-sm font-semibold text-[#1A202C]">Jan 04, 2022</span>
          <span className="text-sm font-semibold text-[#1A202C]">$2,000.00</span>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#DBA32A24] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#DBA32A]"></div>
            </div>
            <span className="text-xs font-semibold text-[#1A202C]">Pending</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EAECF1] flex items-center justify-center">
               <img src={figma} alt="Profile" className="h-6 w-4 object-cover" />
            </div>
            <span className="text-sm font-semibold text-[#1A202C]">Bank Transfer</span>
          </div>
          <span className="text-sm font-semibold text-[#1A202C]">Jan 06, 2022</span>
          <span className="text-sm font-semibold text-[#1A202C]">$2,000.00</span>
          <div className="flex items-center gap-2">
            <div className='flex justify-center items-center w-4 h-4 rounded-full bg-[#DB27194D]'>
              <div className="w-2 h-2 rounded-full bg-[#DB2719]"></div>
            </div>
            <span className="text-xs font-semibold text-[#1A202C]">On Hold</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
