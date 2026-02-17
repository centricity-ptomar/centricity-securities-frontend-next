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
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-700">
                                <thead className="bg-white/5">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-primary uppercase tracking-wider">SN</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-primary uppercase tracking-wider">Received From</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-primary uppercase tracking-wider">Carried Forward</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-primary uppercase tracking-wider">Received</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-primary uppercase tracking-wider">Resolved</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-primary uppercase tracking-wider">Pending</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-transparent divide-y divide-gray-700">
                                    {/* Placeholder Data */}
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">1</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Directly from Investors</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">0</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">0</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">0</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
