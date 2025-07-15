import { useSearchParams } from "react-router-dom";
import TypeSelector from "@pages/Search/TypeSelector";


import { useUserQuery } from "@api/user/query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { UserCardSkeleton } from "@common/Skeletons";

import  UserCard  from "@pages/Search/Users/Card";

export const UserPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  const {
    data: users,

    isPending,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useUserQuery({
    limit: 10,
    username: searchQuery,
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);
  // TODO: Replace with actual user search query when available

  return (
    <div className="w-full space-y-4">
      <TypeSelector />
      {users?.map((user) => (
      <UserCard key={user.id} user={user} />
      ))}
      {(isPending || isFetchingNextPage) && <UserCardSkeleton />}
      {!hasNextPage && !isPending && (
        <div className="text-center text-gray-500 mt-10">No more users</div>
      )}
      <div ref={ref} className="h-10" />
    </div>
  );
};
