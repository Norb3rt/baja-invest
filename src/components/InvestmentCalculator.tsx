import { useState } from 'react';
import { TrendingUp, DollarSign, Percent } from 'lucide-react';

interface InvestmentCalculatorProps {
    basePrice?: number;
    className?: string;
}

function InvestmentCalculator({ basePrice = 250000, className = '' }: InvestmentCalculatorProps) {
    // Simple investor inputs
    const [propertyPrice, setPropertyPrice] = useState(basePrice);
    const [downPaymentPercent, setDownPaymentPercent] = useState(25);
    const [years, setYears] = useState(5);

    // Fixed appreciation rate (conservative for Baja)
    const APPRECIATION_RATE = 15; // 15% annual appreciation

    // Appreciation-only calculations
    const downPaymentAmount = (propertyPrice * downPaymentPercent) / 100;
    const projectedValue = propertyPrice * Math.pow(1 + APPRECIATION_RATE / 100, years);
    const totalGain = projectedValue - propertyPrice; // appreciation only
    const roi = downPaymentAmount > 0 ? (totalGain / downPaymentAmount) * 100 : 0;
    const annualROI = years > 0 ? roi / years : 0;

    const formatCurrency = (amount: number) =>
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);

    const properties = [
        { name: 'Coastal Haven', price: 250000 },
        { name: 'Ocean Residence', price: 320000 },
        { name: 'Legacy Estate', price: 425000 },
    ];

    return (
        <div className={`glass-card-strong rounded-3xl p-6 md:p-10 ${className}`}>
            {/* Header */}
            <div className="text-center mb-8 md:mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                    Simple Appreciation Calculator
                </h3>
                <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
                    Estimate how much your property could grow in value over time with a conservative
                    {` ${APPRECIATION_RATE}% `}annual appreciation.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
                {/* LEFT: Input Controls */}
                <div className="space-y-6">
                    {/* Quick Select Property */}
                    <div>
                        <label className="text-white font-semibold text-base md:text-lg mb-3 md:mb-4 block">
                            Select Property
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {properties.map((prop) => (
                                <button
                                    key={prop.name}
                                    type="button"
                                    onClick={() => setPropertyPrice(prop.price)}
                                    className={`glass-card p-3 md:p-4 rounded-xl text-left transition-all text-sm md:text-base ${propertyPrice === prop.price
                                        ? 'border-2 border-amber-400 bg-amber-400/10'
                                        : 'border border-white/10 hover:border-amber-400/50'
                                        }`}
                                >
                                    <p className="text-white font-semibold leading-snug mb-1">{prop.name}</p>
                                    <p className="text-gray-400 text-xs md:text-sm">
                                        {formatCurrency(prop.price)}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Custom Property Price */}
                    <div className="glass-card p-4 md:p-5 rounded-xl">
                        <label className="text-white font-semibold mb-2 md:mb-3 block text-sm md:text-base">
                            Or enter a custom purchase price
                        </label>
                        <input
                            type="number"
                            value={propertyPrice}
                            onChange={(e) => setPropertyPrice(Number(e.target.value) || 0)}
                            className="w-full bg-slate-900 text-white placeholder:text-gray-500 text-lg md:text-xl font-bold px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-white/40 focus:border-amber-400 focus:outline-none focus:bg-slate-900"
                            step={10000}
                            min={50000}
                            placeholder="250000"
                        />
                    </div>

                    {/* Down Payment */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-white font-semibold text-sm md:text-base">Down payment</label>
                            <span className="text-amber-400 font-bold text-xs md:text-sm">
                                {downPaymentPercent}% ({formatCurrency(downPaymentAmount)})
                            </span>
                        </div>
                        <input
                            type="range"
                            min="10"
                            max="50"
                            step="5"
                            value={downPaymentPercent}
                            onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                            className="w-full slider-premium"
                        />
                        <div className="flex justify-between text-xs md:text-sm text-gray-400 mt-1.5">
                            <span>10%</span>
                            <span>50%</span>
                        </div>
                    </div>

                    {/* Investment Horizon */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-white font-semibold text-sm md:text-base">Investment period</label>
                            <span className="text-amber-400 font-bold text-xs md:text-sm">{years} years</span>
                        </div>
                        <input
                            type="range"
                            min="3"
                            max="10"
                            step="1"
                            value={years}
                            onChange={(e) => setYears(Number(e.target.value))}
                            className="w-full slider-premium"
                        />
                        <div className="flex justify-between text-xs md:text-sm text-gray-400 mt-1.5">
                            <span>3 years</span>
                            <span>10 years</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Results */}
                <div className="space-y-5 md:space-y-6">
                    <h4 className="text-xl md:text-2xl font-bold text-white">Your projected returns</h4>

                    {/* Main ROI Card */}
                    <div className="glass-card rounded-2xl p-6 md:p-7 border-2 border-amber-400/60 bg-gradient-to-br from-amber-400/10 to-orange-500/10">
                        <div className="text-center">
                            <Percent className="text-amber-400 mx-auto mb-3" size={40} />
                            <p className="text-gray-300 text-xs md:text-sm mb-1">Total return on cash invested</p>
                            <p className="text-4xl md:text-5xl font-bold text-gradient-gold mb-1">
                                {Number.isFinite(roi) ? roi.toFixed(0) : '0'}%
                            </p>
                            <p className="text-amber-200 text-sm md:text-base">
                                {Number.isFinite(annualROI) ? annualROI.toFixed(1) : '0.0'}% per year
                            </p>
                        </div>
                    </div>

                    {/* Breakdown Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Initial Investment */}
                        <div className="glass-card rounded-xl p-4 border border-blue-400/30">
                            <div className="flex items-center space-x-3">
                                <DollarSign className="text-blue-400" size={28} />
                                <div>
                                    <p className="text-gray-400 text-xs md:text-sm">Initial investment</p>
                                    <p className="text-white text-lg md:text-2xl font-bold">
                                        {formatCurrency(downPaymentAmount)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Property Appreciation */}
                        <div className="glass-card rounded-xl p-4 border border-emerald-400/30">
                            <div className="flex items-center space-x-3">
                                <TrendingUp className="text-emerald-400" size={28} />
                                <div>
                                    <p className="text-gray-400 text-xs md:text-sm">Projected gain from appreciation</p>
                                    <p className="text-emerald-400 text-lg md:text-2xl font-bold">
                                        +{formatCurrency(totalGain)}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2 pt-2 border-t border-white/10 text-xs md:text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Purchase price</span>
                                    <span className="text-white">{formatCurrency(propertyPrice)}</span>
                                </div>
                                <div className="flex justify-between mt-1">
                                    <span className="text-gray-400">Projected value in {years} yrs</span>
                                    <span className="text-emerald-400 font-semibold">
                                        {formatCurrency(projectedValue)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Total Return */}
                    <div className="glass-card rounded-xl p-4 md:p-5 border-2 border-amber-400/60 bg-amber-400/5">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                            <p className="text-gray-300 text-xs md:text-sm">Total gain after {years} years</p>
                            <p className="text-2xl md:text-3xl font-bold text-gradient-gold">
                                {formatCurrency(totalGain)}
                            </p>
                        </div>
                        <div className="mt-3 pt-3 border-t border-amber-400/20 text-xs md:text-sm space-y-1">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Cash invested (down payment)</span>
                                <span className="text-white font-semibold">
                                    {formatCurrency(downPaymentAmount)}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Return on cash</span>
                                <span className="text-emerald-400 font-bold">
                                    {Number.isFinite(roi) ? roi.toFixed(1) : '0.0'}%
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Note */}
                    <div className="glass-card rounded-lg p-3 md:p-4 border border-amber-400/20">
                        <p className="text-[10px] md:text-xs text-gray-400 text-center leading-relaxed">
                            * Based on a {APPRECIATION_RATE}% annual appreciation estimate for Baja coastal properties.
                            Actual results may vary and this does not include financing costs, taxes, or expenses.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InvestmentCalculator;
