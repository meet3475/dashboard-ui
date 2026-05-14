import { BadgeDollarSign, MoreHorizontal } from 'lucide-react';

const Balance = () => {
    return (
        <div className="bg-white w-full rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-start mb-6">
                <h2 className="text-base font-semibold text-[#1A202C]">Your balance</h2>
                <button className="text-[#1A202C] font-bold">
                    <MoreHorizontal className="h-6 w-6" />
                </button>
            </div>

            <div className="mb-2">
                <span className="text-xl 2xl:text-[32px] font-bold text-[#1A202C]">$120,435.00</span>
                <span className="text-sm text-[#90A3BF] ml-2.5 font-semibold">(USD)</span>
            </div>

            <p className="text-sm text-[#90A3BF] font-semibold mb-10">
                From Jan 01, 2022 to Jan 31, 2022
            </p>

            <div className="flex flex-row xl:flex-col 2xl:flex-row justify-between gap-6">
                <button className="flex items-center gap-2 bg-[#40A198] text-white px-7 2xl:px-3 py-4 rounded-[10px]">
                    <BadgeDollarSign className="h-5 w-5" />
                    <span className="font-semibold text-sm">Top Up</span>
                </button>
                <button className="flex items-center gap-2 border-2 border-[#40A198] text-[#1A202C] px-7 2xl:px-3 py-4 rounded-[10px]">
                    <BadgeDollarSign className="h-5 w-5" />
                    <span className="font-semibold text-sm">Transfer</span>
                </button>
            </div>
        </div>
    );
};

export default Balance;
