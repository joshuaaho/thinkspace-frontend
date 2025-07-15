import { useSearchParams } from "react-router-dom";
import { PostPage } from "@pages/Search/Posts";
import { UserPage } from "@pages/Search/Users";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="card bg-base-100">
        <div className="card-body p-4">{children}</div>
      </div>
    </div>
  );
};

const SearchContent = () => {
  const [searchParams] = useSearchParams();
  const searchType = searchParams.get("type") || "posts";
  const searchQuery = searchParams.get("q") || "";

  if (searchType === "posts") {
    return (
       <Layout>
        <h1 className="text-2xl font-bold mb-4">
          Search Results for: {searchQuery}
        </h1>
        <PostPage />
      </Layout>
    );
    }
    
    if(searchType === "users") {
        return (
            <Layout>
                <h1 className="text-2xl font-bold mb-4">Search Results for: {searchQuery}</h1>
                <UserPage />
            </Layout>
        )
    }
    
    return (
      <Layout>
        <div className="text-center py-12">
          <p className="text-lg text-base-content/60">Please use valid query parameters</p>
        </div>
      </Layout>
    );
  };

export default SearchContent;
