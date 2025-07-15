import { useClickAway } from "@uidotdev/usehooks";
import { useState } from "react";
import { usePostsQuery } from "@api/posts/queries";

import Card from "@common/Navbar/SearchComponent/Card";
import { Link, useNavigate } from "react-router-dom";

import SearchComponentSkeleton from "@common/Skeletons/SearchSkeleton";
import ApiErrorModal from "@common/Modals/ApiErrorModal";

function SearchComponent() {
  const navigate = useNavigate();

  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

  const ref = useClickAway<HTMLDivElement>(() => {
    setIsSearchOpen(false);
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const {
    data: posts,
    isPending,
    error
  } = usePostsQuery({
    limit: 50,
    title: searchQuery,
    enabled: !!searchQuery,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsSearchOpen(true);
  };

  if (error) {
    return (
      <ApiErrorModal
        statusCode={(error as any).response.status}
        message={(error as any).response.data.error}
      />
    );
  }

  return (
    <div className="relative md:w-md lg:w-lg">
      <form onSubmit={search}>
        <input
          type="text"
          name="query"
          placeholder="Search posts..."
          className="input input-bordered pl-10 w-full"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </form>
      <div className="absolute w-full" ref={ref}>
        {isSearchOpen && !!searchQuery && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-base-200 rounded-b-lg shadow-lg border-base-200  max-h-[400px] overflow-y-auto z-50">
            {isPending && <SearchComponentSkeleton />}

            {!isPending && !error && posts.length === 0 && (
              <div className="p-4 text-center text-gray-500">
                No results found
              </div>
            )}

            {!isPending && !error && posts.length > 0 && (
              <div>
                {posts.map((post) => (
                  <Card
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    username={post.authorUsername}
                    authorProfileImgUrl={post.authorProfileImgUrl}
                    postedAt={post.createdAt}
                  />
                ))}
              </div>
            )}

            <div className="border-t border-base-300 p-3 mb-2">
              <Link 
                to={`/search?q=${searchQuery}`} 
                className="text-sm text-primary hover:text-primary-focus transition-colors float-right hover:underline cursor-pointer pb-3.5"
              >
                Advanced search
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchComponent;
