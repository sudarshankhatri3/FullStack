import Headers from "../components/headers";

const category = [
  { photo: "./electronics.png", title: "Electronics" },
  { photo: "./home.png", title: "Home & Living" },
  { photo: "./fashion.png", title: "Fashion" },
  { photo: "./gaming.png", title: "Gaming" },
  { photo: "./health.png", title: "Health & Beauty" },
  { photo: "./book.png", title: "Books" },
];
export default function LandingPage() {
  return (
    <>
      <div>
        <Headers />
      </div>
      <div className="">
        <div className="bg-[#F3F4F5]  p-8 w-50 min-h-full flex flex-col gap-5">
          <h2 className="text-[#191C1D] text-xl font-bold ">Category</h2>
          <div className="bg-[#DAD7FF] p-3 w-40 rounded-xl flex flex-col gap-2">
            {category.map((cat, idx) => (
              <div key={idx} className="flex  items-center gap-4">
                <img src={cat.photo} alt={cat.title} />
                <a href="">{cat.title}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
