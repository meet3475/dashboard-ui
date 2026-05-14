import { MoreHorizontal } from 'lucide-react';
import ReactApexChart from 'react-apexcharts';

const  SpendCategory = () => {
    const chartData = {
        series: [8000, 2130, 1510, 2245, 4385, 1000],
        options: {
            chart: {
                type: 'donut',
                fontFamily: 'Inter, sans-serif',
            },
            labels: ['Employees Salary', 'Material Supplies', 'Company tax', 'Maintenance system', 'Development System', 'Production Tools'],
            colors: ['#FFACC8', '#4120A9', '#FF4423', '#40A198', '#5CAFFC', '#A1A9FE', '#EB7CA6'],
            plotOptions: {
                pie: {
                    donut: {
                        size: '70%',
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '14px',
                                color: '#90A3BF',
                            },
                            value: {
                                show: true,
                                fontSize: '24px',
                                fontWeight: 'bold',
                                color: '#1A202C',
                            },
                            total: {
                                show: true,
                                label: 'Overall Spending',
                                fontSize: '14px',
                                color: '#596780',
                                formatter: function (w) {
                                    return '$19,760.00';
                                }
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            stroke: {
                show: true,
                width: 6,
                colors: ['#ffffff']
            }
        }
    };

    const categories = [
        { name: 'Employees Salary', amount: '$8,000.00', color: '#EB7CA6' },
        { name: 'Material Supplies', amount: '$2,130.00', color: '#FFACC8' },
        { name: 'Company tax', amount: '$1,510.00', color: '#CC6FF8' },
        { name: 'Maintenance system', amount: '$2,245.00', color: '#40A198' },
        { name: 'Development System', amount: '$4,385.00', color: '#5CAFFC' },
        { name: 'Production Tools', amount: '$1,000.00', color: '#A1A9FE' },
    ];

    return (
        <div className="bg-white w-full rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-start mb-6">
                <h2 className="text-base font-semibold text-[#1A202C]">Spend by category</h2>
                <button className="text-[#1A202C] font-bold">
                    <MoreHorizontal className="h-6 w-6" />
                </button>
            </div>

            <div className="mb-10">
                <ReactApexChart
                    options={chartData.options}
                    series={chartData.series}
                    type="donut"
                    height={250}
                />
            </div>

            <div className="space-y-3 2xl:space-y-5">
                {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: category.color }}
                            ></div>
                            <span className="text-xs font-semibold text-[#596780]">{category.name}</span>
                        </div>
                        <span className="text-sm text-[#1A202C] font-semibold">{category.amount}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpendCategory;
