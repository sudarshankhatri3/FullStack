import Footer from "../../components/common/footer";
import { Link } from "react-router";
import "../../app.css";

export default function SovereignMarketplaceUI() {
  const flashSaleProducts = [
    {
      name: "Wireless Headphones",
      price: "$249.00",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Smart Watch Series",
      price: "$159.00",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Running Shoes",
      price: "$129.00",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Minimal Lamp",
      price: "$89.00",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Gaming Keyboard",
      price: "$110.00",
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f5f7] p-2 sm:p-4 font-sans text-gray-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-3xl bg-white p-2 sm:p-4 shadow-xl lg:flex-row">
        {/* Sidebar */}
        <aside className="hidden w-64 rounded-3xl bg-[#f8f8fb] p-5 lg:block">
          <div className="mb-8 flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-indigo-600"></div>

            <div>
              <h1 className="text-lg font-bold">Sovereign</h1>
              <p className="text-xs text-gray-500">Marketplace</p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Categories
            </h2>

            <nav className="space-y-3">
              {[
                "Electronics",
                "Home",
                "Fashion",
                "Gaming",
                "Sports",
                "Books",
              ].map((item) => (
                <a
                  key={item}
                  className="flex w-full items-center rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-white hover:shadow"
                >
                  <span className="mr-3 h-2 w-2 rounded-full bg-indigo-500"></span>
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-10 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-500 p-5 text-white shadow-lg">
            <p className="text-sm font-semibold">Join Sovereign Plus</p>

            <p className="mt-2 text-xs text-indigo-100">
              Unlock premium deals and exclusive rewards.
            </p>

            <button className="mt-5 w-full rounded-xl bg-white px-4 py-2 text-sm font-semibold text-indigo-700 transition hover:bg-gray-100">
              Join Now
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-hidden rounded-3xl bg-[#fcfcfd] p-1 sm:p-2">
          {/* Navbar */}
          <div className="mb-6 flex flex-col gap-4 rounded-3xl bg-white p-3 sm:p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
            {/* Menu */}
            <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap text-xs font-medium text-gray-600 sm:gap-6 sm:text-sm">
              <a href="" className="text-indigo-600">Best Sellers</a>
              <a href="#">Deals</a>
              <a href="">New Releases</a>
              <a href="">Gift Cards</a>
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* Login Signup Buttons */}
              <div className="flex gap-3">
                <Link
                  to="/login"
                  className="rounded-2xl border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                  Login
                </Link>

                <Link
                  to="/signUp"
                  className="rounded-2xl bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700"
                >
                  Sign Up
                </Link>
              </div>

              {/* Search */}
              <div className="flex w-full sm:w-auto items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>

              {/* Avatar */}
              <div className="hidden h-11 w-11 rounded-2xl bg-indigo-100 sm:block"></div>
            </div>
          </div>

          {/* Hero Section */}
          <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#041622] via-[#072738] to-[#0f473c] p-5 text-white shadow-lg sm:p-8 lg:h-[420px]">
            <div className="relative z-10 max-w-xl pt-4 sm:pt-6">
              <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                Limited Offer
              </span>

              <h1 className="mt-6 text-3xl font-black leading-tight sm:text-4xl lg:text-6xl">
                The Sovereign Collection
              </h1>

              <p className="mt-5 text-sm text-gray-300 sm:text-base lg:text-lg">
                Precision-engineered tech for the modern creator. Exceptional
                quality, handcrafted for simplicity.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button className="rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold shadow-lg transition hover:bg-indigo-700">
                  Shop The Series
                </button>

                <button className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/20">
                  Watch Review
                </button>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1600&auto=format&fit=crop"
              alt="speaker"
              className="absolute bottom-0 right-0 h-[220px] w-full object-cover rounded-tl-[40px] shadow-2xl sm:h-[260px] sm:w-[420px] lg:h-[300px]"
            />
          </section>

          {/* Flash Sale */}
          <section className="mt-8">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold">Flash Sale</h2>

                <p className="text-sm text-gray-500">
                  Limited-time deals curated for you.
                </p>
              </div>

              <button className="text-sm font-semibold text-indigo-600">
                View All Deals →
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {flashSaleProducts.map((product) => (
                <div
                  key={product.name}
                  className="group rounded-3xl bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                    />

                    <span className="absolute left-3 top-3 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                      -25%
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-sm font-semibold text-gray-800">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-lg font-bold text-indigo-600">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Portfolio Section */}
          <section className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {/* Large Card */}
            <div className="relative overflow-hidden rounded-[32px] lg:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop"
                alt="workspace"
                className="h-full min-h-[340px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <div className="absolute bottom-6 left-4 right-4 text-white sm:left-6">
                <h3 className="text-2xl font-bold sm:text-3xl">
                  Workspace Authority
                </h3>

                <p className="mt-2 max-w-md text-sm text-gray-200">
                  Discover premium setups designed for creators, developers, and
                  professionals.
                </p>

                <button className="mt-5 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-200">
                  Explore Setup
                </button>
              </div>
            </div>

            {/* Right Cards */}
            <div className="grid gap-5">
              <div className="relative overflow-hidden rounded-[28px] bg-gray-900 text-white">
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop"
                  alt="mobile"
                  className="h-48 w-full object-cover opacity-80"
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute bottom-5 left-5">
                  <h4 className="text-xl font-bold">Mobile Ecosystems</h4>

                  <p className="mt-1 text-sm text-gray-300">
                    Future-ready smart experiences.
                  </p>
                </div>
              </div>

              <div className="rounded-[28px] bg-gradient-to-br from-indigo-100 to-violet-100 p-6 shadow-sm">
                <h4 className="text-2xl font-bold text-gray-900">
                  Smart Living
                </h4>

                <p className="mt-3 text-sm text-gray-600">
                  Upgrade your home with elegant technology and premium design.
                </p>

                <button className="mt-6 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
                  Browse Collection
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
