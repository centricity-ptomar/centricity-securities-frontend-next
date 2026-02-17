import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function RegulatoryPage() {
    return (
        <>
            <Header />
            <main className="flex-1 bg-black py-12 md:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white/5 border border-white/10 rounded-2xl shadow-sm p-8 md:p-12 space-y-10">

                        <div className="border-b border-white/10 pb-8">
                            <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">
                                Regulatory Compliance & Disclosures
                            </h1>
                            <p className="text-gray-400">
                                Important information for investors regarding Centricity Securities Private Limited.
                            </p>
                        </div>

                        {/* Circulars & Notifications */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-brand-primary">Circulars & Regulatory Updates</h2>
                            <div className="prose prose-invert prose-sm text-gray-300 max-w-none space-y-3">
                                <p>
                                    The following circulars are shared for website updates to improve project visibility and clarify regulatory requirements as per compliance aspects.
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>
                                        <strong>Filing Complaints:</strong> Filing a complaint on a designated (grievance) email id, and finding out the status of the complaint, as per circular no <span className="font-medium text-white">NSE/COMP/ 56350</span>.
                                    </li>
                                    <li>
                                        <strong>Website Reporting:</strong> The URL to the website of a SB/ DP shall be reported to the stock exchanges/ depositories within a week. Any modification in the URL shall be reported within 3 days.
                                    </li>
                                    <li>
                                        <strong>Authorized Persons:</strong> Option for Authorized Persons provided as per circular no <span className="font-medium text-white">NSE/COMP/ 56350</span>.
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Account Opening & KYC */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-brand-primary">Account Opening & KYC</h2>
                            <div className="prose prose-invert prose-sm text-gray-300 max-w-none">
                                <p>
                                    Detailed write-up on procedure for opening an account along with Flowchart and video (optional) if any, and process to provide the KYC kit to the customers along with a copy of Rights & Obligations document to the client is available as per circular no <span className="font-medium text-white">SEBI/HO/MIRSD/MIRSD-PoD1/P/CIR/2025/22</span>.
                                </p>
                                <p className="mt-2">
                                    Hard copy of all forms (change bank, updated KYC, change DP, change nominee for both DP & trading) are available upon request or via our downloads section.
                                </p>
                                <div className="mt-4 p-4 bg-brand-primary/10 rounded-lg border border-brand-primary/20">
                                    <p className="text-brand-primary text-xs">
                                        <strong>KYC Note:</strong> KYC is a one-time exercise while dealing in securities markets. Once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Pricing & Risks */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-brand-primary">Pricing, Risks & Obligations</h2>
                            <div className="prose prose-invert prose-sm text-gray-300 max-w-none">
                                <p>
                                    Pricing details are shown on the website as per industry norms. Investors should receive complete information about the risks, obligations, and costs of any investment before investing as per circular no <span className="font-medium text-white">SEBI/HO/MIRSD/MIRSD-PoD1/P/CIR/2025/22</span>.
                                </p>
                                <p className="mt-2">
                                    We ensure transparency across all dealings. Copies of all policies related to your account dealings are available. Live Margin files are updated for enabled segments.
                                </p>
                                <p className="mt-2 text-red-500 font-medium">
                                    Get warnings on the trading systems & website while placing orders.
                                </p>
                            </div>
                        </section>

                        {/* Investor Protection */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-brand-primary">Investor Protection & Claims</h2>
                            <div className="prose prose-invert prose-sm text-gray-300 max-w-none">
                                <p>Information available on Stock Exchange website for investors:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Norms for eligibility of claims for compensation from IPF.</li>
                                    <li>Claim form for lodging claim against defaulter stockbroker.</li>
                                    <li>FAQ on processing investors’ claims against Defaulter stock broker.</li>
                                    <li>Provision to check online status of client’s claim.</li>
                                    <li>Standard Operating Procedure (SOP) for handling of Claims of Investors in the Cases of Default by Brokers.</li>
                                    <li>Claim processing policy against Defaulter/Expelled members.</li>
                                    <li>List of Defaulter/Expelled members and public notice issued.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Complaints Data */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-brand-primary">Investor Complaints Data</h2>
                            <div className="prose prose-invert prose-sm text-gray-300 max-w-none">
                                <p>
                                    Format for Investor Complaints Data to be displayed by Stock Brokers on their respective websites as per circular no <span className="font-medium text-white">SEBI/HO/MIRSD/MIRSD-PoD1/P/CIR/2025/22 Annexure – B</span>.
                                </p>
                                <p className="mt-2">
                                    Trading Members shall disclose the data on complaints received against them or against issues dealt with by them and redressal thereof, latest by 7th of succeeding month on their website, in the format given by Sebi as per circular no <span className="font-medium text-white">NSE/ISC/66883 dated 27 Feb 2025</span>.
                                </p>
                                <p className="mt-2">
                                    Complaint resolution is available online on <a href="https://smartodr.in/" className="text-brand-primary underline">SMARTODR</a> / <a href="https://scores.sebi.gov.in" className="text-brand-primary underline">SCORES</a> portal.
                                </p>
                            </div>
                        </section>

                        {/* Do's and Don'ts */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-brand-primary">Do's and Don'ts</h2>
                            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                                <p className="text-sm text-gray-300">
                                    Please refer to the comprehensive list of Do's and Don'ts for Investors as per circular no <span className="font-medium text-white">SEBI/HO/MIRSD/MIRSD-PoD1/P/CIR/2025/22</span> available in our downloads section or Investor Charter.
                                </p>
                            </div>
                        </section>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
