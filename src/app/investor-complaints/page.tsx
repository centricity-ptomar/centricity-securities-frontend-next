import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function InvestorComplaintsPage() {
    return (
        <>
            <Header />
            <main className="flex-1 bg-black py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-heading font-bold text-brand-primary mb-6">Investor Complaints Data</h1>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-sm prose prose-invert max-w-none text-gray-300">
                        <p>Data related to investor complaints (Annexure B).</p>

                        {/* Download Document Button */}
                        <div className="mt-6 mb-10 flex flex-col sm:flex-row gap-4">
                            <a
                                href="/Investor%20Complaints%20Format.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-md text-black bg-brand-primary hover:bg-brand-primary/90 transition-colors"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                </svg>
                                Download Complete Format (PDF)
                            </a>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4 border-l-4 border-brand-primary pl-3">Data for every month ending</h3>
                        <div className="overflow-x-auto mb-10 border border-white/10 rounded-xl">
                            <table className="min-w-full divide-y divide-gray-700 text-sm">
                                <thead className="bg-white/5">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-medium text-brand-primary uppercase tracking-wider">SN</th>
                                        <th className="px-4 py-3 text-left font-medium text-brand-primary uppercase tracking-wider">Received from</th>
                                        <th className="px-4 py-3 text-left font-medium text-brand-primary uppercase tracking-wider">Carried forward from previous month</th>
                                        <th className="px-4 py-3 text-left font-medium text-brand-primary uppercase tracking-wider">Received during the month</th>
                                        <th className="px-4 py-3 text-left font-medium text-brand-primary uppercase tracking-wider">Total Pending</th>
                                        <th className="px-4 py-3 text-left font-medium text-brand-primary uppercase tracking-wider">Resolved*</th>
                                        <th className="px-4 py-3 text-left font-medium text-brand-primary uppercase tracking-wider">Pending at the end of the month** (Less than 3m / More than 3m)</th>
                                        <th className="px-4 py-3 text-left font-medium text-brand-primary uppercase tracking-wider">Average Resolution time^ (in days)</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-transparent divide-y divide-gray-700">
                                    <tr>
                                        <td className="px-4 py-3 text-gray-400">1</td>
                                        <td className="px-4 py-3 text-gray-300">Directly from Investors</td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400">- / -</td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-gray-400">2</td>
                                        <td className="px-4 py-3 text-gray-300">SEBI (SCORES 2.0)</td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400">- / -</td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-gray-400">3</td>
                                        <td className="px-4 py-3 text-gray-300">Stock Exchanges</td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400">- / -</td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-gray-400">4</td>
                                        <td className="px-4 py-3 text-gray-300">Other Sources (if any)</td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400">- / -</td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                    </tr>
                                    <tr className="bg-white/5 font-semibold">
                                        <td className="px-4 py-3 text-white">5</td>
                                        <td className="px-4 py-3 text-white">Grand Total</td>
                                        <td className="px-4 py-3 text-white"></td>
                                        <td className="px-4 py-3 text-white"></td>
                                        <td className="px-4 py-3 text-white"></td>
                                        <td className="px-4 py-3 text-white"></td>
                                        <td className="px-4 py-3 text-white">- / -</td>
                                        <td className="px-4 py-3 text-white"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4 border-l-4 border-brand-primary pl-3">Trend of monthly disposal of complaints</h3>
                        <div className="overflow-x-auto mb-10 border border-white/10 rounded-xl">
                            <table className="min-w-full divide-y divide-gray-700 text-sm">
                                <thead className="bg-white/5">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-medium text-brand-primary uppercase tracking-wider">SN</th>
                                        <th className="px-4 py-3 text-left font-medium text-brand-primary uppercase tracking-wider">Month</th>
                                        <th className="px-4 py-3 text-left font-medium text-brand-primary uppercase tracking-wider">Carried forward from previous month</th>
                                        <th className="px-4 py-3 text-left font-medium text-brand-primary uppercase tracking-wider">Received</th>
                                        <th className="px-4 py-3 text-left font-medium text-brand-primary uppercase tracking-wider">Resolved*</th>
                                        <th className="px-4 py-3 text-left font-medium text-brand-primary uppercase tracking-wider">Pending**</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-transparent divide-y divide-gray-700">
                                    <tr>
                                        <td className="px-4 py-3 text-gray-400">1</td>
                                        <td className="px-4 py-3 text-gray-300">April - YYYY</td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={6} className="px-4 py-3 text-gray-500 text-center italic">... data for subsequent months ...</td>
                                    </tr>
                                    <tr className="bg-white/5 font-semibold">
                                        <td className="px-4 py-3 text-white"></td>
                                        <td className="px-4 py-3 text-white">Grand Total</td>
                                        <td className="px-4 py-3 text-white"></td>
                                        <td className="px-4 py-3 text-white"></td>
                                        <td className="px-4 py-3 text-white"></td>
                                        <td className="px-4 py-3 text-white"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4 border-l-4 border-brand-primary pl-3">Trend of annual disposal of complaints</h3>
                        <div className="overflow-x-auto mb-6 border border-white/10 rounded-xl">
                            <table className="min-w-full divide-y divide-gray-700 text-sm">
                                <thead className="bg-white/5">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-medium text-brand-primary uppercase tracking-wider">SN</th>
                                        <th className="px-4 py-3 text-left font-medium text-brand-primary uppercase tracking-wider">Year</th>
                                        <th className="px-4 py-3 text-left font-medium text-brand-primary uppercase tracking-wider">Carried forward from previous year</th>
                                        <th className="px-4 py-3 text-left font-medium text-brand-primary uppercase tracking-wider">Received during the year</th>
                                        <th className="px-4 py-3 text-left font-medium text-brand-primary uppercase tracking-wider">Resolved during the year</th>
                                        <th className="px-4 py-3 text-left font-medium text-brand-primary uppercase tracking-wider">Pending at the end of the year</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-transparent divide-y divide-gray-700">
                                    <tr>
                                        <td className="px-4 py-3 text-gray-400">1</td>
                                        <td className="px-4 py-3 text-gray-300">2021-22</td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-gray-400">2</td>
                                        <td className="px-4 py-3 text-gray-300">2022-23</td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-gray-400">3</td>
                                        <td className="px-4 py-3 text-gray-300">2023-24</td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-gray-400">4</td>
                                        <td className="px-4 py-3 text-gray-300">2024-25</td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                        <td className="px-4 py-3 text-gray-400"></td>
                                    </tr>
                                    <tr className="bg-white/5 font-semibold">
                                        <td className="px-4 py-3 text-white"></td>
                                        <td className="px-4 py-3 text-white">Grand Total</td>
                                        <td className="px-4 py-3 text-white"></td>
                                        <td className="px-4 py-3 text-white"></td>
                                        <td className="px-4 py-3 text-white"></td>
                                        <td className="px-4 py-3 text-white"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="text-xs text-gray-500 space-y-1 mt-4">
                            <p>*Should include complaints of previous months resolved in the current month, if any.</p>
                            <p>**Should include total complaints pending as on the last day of the month, if any.</p>
                            <p>^Average resolution time is the sum total of time taken to resolve each complaint in the current month divided by total number of complaints resolved in the current month.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
