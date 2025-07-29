'use client';
import React from 'react';
import Quote from "@/component/quoteholder";
import { title } from 'process';
export default function CommunityPage() {
    const quotes = [ { title: "Motivation" }, {title : "Inspiration"}, {title : "Wisdom"}, {title : "Humor"}, {title : "Life Lessons"} ];
  return (
    <div className="flex flex-col items-center justify-center  p-4">
      <h1 className="text-3xl font-bold mb-4">Community Quotes</h1>
      <p className="text-lg">Welcome to the community quotes page!</p>
      <div className="flex flex-wrap gap-4">
        {quotes.map((quote, index) => (
          <Quote key={index} title={quote.title} />
        ))}
      </div>
      <p className="text-md mt-2"></p>

    </div>
  );
}