import Header from "@/components/layout/Header";

const index = () => {
  return (
    <div>
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">Posts</h1>
        </div>
      </main>
    </div>
  );
};

export default index;
