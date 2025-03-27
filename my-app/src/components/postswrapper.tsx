import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";
import Posts from "./posts";
import { getPostFetch } from "@/service/posts";

const PostWrapper = async () => {
  const client = new QueryClient();

  await client.prefetchQuery({
    queryKey: ["posts"],
    queryFn: getPostFetch,
  });

  const hydrateClient = dehydrate(client);

  return (
    <HydrationBoundary state={hydrateClient}>
      <Posts />
    </HydrationBoundary>
  );
};

export default PostWrapper;
