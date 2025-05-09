
const features = [
    {
        icon: "⚙️",
        title: "Customized meal made for your team",
        desc: "While ordering, you can pick your own set of menus or customize your menu according to your team's wish. Hogist ensures quality meal boxes delivered on time."
    },
    {
        icon: "🚚",
        title: "Guaranteed On-time Delivery",
        desc: "Hogist delivers your favorite food to your ceremony location in Chennai within the committed time frame. All managed with just a few clicks."
    },
    {
        icon: "📄",
        title: "Customised Menu Selection",
        desc: "Hogist offers a wide variety of menu packages in all budget categories for corporate catering across Chennai."
    },
    {
        icon: "💬",
        title: "Your Feedback",
        desc: "We love to listen to your feedback. Help us refine quality through ratings, reviews, calls, and mails."
    },
    {
        icon: "🎧",
        title: "Trusted Customer Support",
        desc: "Order placement, transactions, and on-time delivery — all made smooth with our reliable support system."
    },
    {
        icon: "⏱️",
        title: "Save Your Time",
        desc: "We pre-negotiate clear and accurate pricing with vendors. Invoices go directly to your accounts team for speed."
    }
];
export default function Services() {
    return (
        <div className=" py-16 px-4 md:px-10">
            {/* Section Title */}
            <div className="text-center mb-12">
                <h3 className="text-lg font-semibold text-gray-700">Real-time Challenges</h3>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                    And we provide the Solution for
                </h2>
                <div className="flex justify-center my-10 gap-60">
                    <h1 className="text-red-600 font-semibold border-2 hover:text-xl transition-all border-red-600 py-2 px-4 rounded-full">Corperate Catering</h1>
                    <h1 className="text-red-600 font-semibold border-2 hover:text-xl transition-all border-red-600 py-2 px-4 rounded-full">Industrial Catering</h1>
                    <h1 className="text-red-600 font-semibold border-2 hover:text-xl transition-all border-red-600 py-2 px-4 rounded-full">Outdoor Catering</h1>
                </div>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
                {[
                    {
                        icon: "👍", title: "Reliable Provider",
                        desc: "Finding a trustworthy and reliable catering company that meets industry needs and standards throughout the service period."
                    },
                    {
                        icon: "💰", title: "Cost Management",
                        desc: "Balancing cost-effectiveness with nutritious meals for workers and handling market price fluctuations."
                    },
                    {
                        icon: "✅", title: "Quality Control",
                        desc: "Maintaining consistent high-quality and safety standards for food and beverages."
                    },
                    {
                        icon: "🧼", title: "Health and Safety",
                        desc: "Complying with all health and safety regulations and standards."
                    },
                    {
                        icon: "📋", title: "Customization and Variety",
                        desc: "Meeting diverse cultural and dietary needs and preferences."
                    },
                    {
                        icon: "🚚", title: "Logistics",
                        desc: "Coordinating delivery, managing transportation and storage of food and equipment."
                    }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="w-12 h-12 text-2xl flex items-center justify-center bg-gradient-to-br from-black to-gray-700 text-white rounded-full mb-4">
                            {item.icon}
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* App Showcase Section */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-xl shadow-md">
                {/* Left Text */}
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h4 className="text-sm text-gray-600 font-bold">YOUR F&B</h4>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        App For Your Catering
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        Introducing our F&B App for industrial & corporate clients with features to monitor
                        food preparation to delivery at your premises. It supports repeat ordering, saving preferences, and efficient reorder with a single tap.
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                        Currently serving in Irungattukottai, Sriperumbudur, Chengalpattu, Maraimalai Nagar,
                        Ambattur, OMR, Poonamallee, Siruseri, and more.
                    </p>

                    <div className="flex gap-10 items-center my-4">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-red-600 flex items-center justify-center">
                                🍱 3000
                            </div>
                            <p className="text-sm">Daily Food Served</p>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-red-600 flex items-center justify-center">
                                💬 30
                            </div>
                            <p className="text-sm">Happy Clients</p>
                        </div>
                    </div>

                    <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700">
                        Read More
                    </button>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2">
                    <img
                        src="https://www.hogist.com/industrial-catering-services-near-me/img/abouut.jpg"
                        alt="Catering App Demo"
                        className="w-full max-w-md mx-auto"
                    />
                </div>
            </div>
            <div className="my-10">
               
                <section className="bg-white py-16 px-6 md:px-16">
                <h1 className="font-semibold text-lg my-2 text-red-600">Your F&B - Permanent Solution for your UNSOLVED food & beverage problems.</h1>
                <h1 className="font-semibold text-5xl my-10">Assured delivering high-end customer experience by satisfying all needs in every possible way.</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                        {features.map((feat, idx) => (
                            <div key={idx} className="flex flex-col gap-4 shadow-xl p-5 rounded-xl">
                                <div className="text-4xl text-red-600">{feat.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-900">{feat.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
