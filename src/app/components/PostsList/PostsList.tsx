"use client"

import { Post } from "../../types"
import { useQuery } from "@tanstack/react-query"
import React from "react"
import Link from "next/link"

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = (await res.json()) as Post;
  return posts
}

export default function PostsList() {

  const { data: posts, isLoading, isError, error } = useQuery({
    queryKey: ["hydrate-posts"],
    queryFn: () => getPosts(),
  });

  let content
  if (isLoading) {
      content = <p>Loading...</p>
  } else if (isError) {
      content = <p>{error.message}</p>
  } else {
      content = posts.map((post) => {
          return (
            <Link href={post.link}>
              <li key={post.id}>
                <h2>{post.title}</h2>
              </li>
            </Link>
          )
      })
  }

  return (
    <main>
        <h1>Blog Archive</h1>
        <ul>
            {content}
        </ul>
    </main>
  );
}
