import { Ibook } from '@/Types/book.types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListedBookCard = ({ book }: { book: Ibook }) => {
  return (
    <article
      key={book.bookId}
      className="flex min-h-[178px] w-full gap-4 rounded-xl border border-[#dedede] bg-white p-3.5 transition-shadow duration-200 hover:shadow-md"
    >
      {/* Book Image */}
      <div className="flex h-[146px] w-[148px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#f3f3f3]">
        <Image
          src={book.image}
          alt={book.bookName}
          width={130}
          height={140}
          className="h-[130px] w-[120px] object-contain"
        />
      </div>

      {/* Book Information */}
      <div className="min-w-0 flex-1 pt-0.5">
        {/* Title */}
        <h2 className="font-serif text-[17px] font-bold leading-6 text-[#171717]">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-[11px] text-[#444]">By : {book.author}</p>

        {/* Tags + Year */}
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-[11px] font-bold text-[#222]">Tag</span>

          {book.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#effbea] px-3 py-1 text-[10px] font-medium text-[#20b900]"
            >
              #{tag}
            </span>
          ))}

          <span className="text-[10px] text-[#666]">
            Year of Publishing: {book.yearOfPublishing}
          </span>
        </div>

        {/* Publisher + Pages */}
        <div className="mt-3 flex flex-wrap items-center gap-5 text-[10px] text-[#777]">
          <span>Publisher: {book.publisher}</span>

          <span>Page {book.totalPages}</span>
        </div>

        {/* Divider */}
        <div className="my-2.5 h-px bg-[#e5e5e5]" />

        {/* Bottom Actions */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Category */}
          <span className="rounded-full bg-[#e5f1ff] px-3.5 py-1.5 text-[10px] font-medium text-[#4389e8]">
            Category: {book.category}
          </span>

          {/* Rating */}
          <span className="rounded-full bg-[#fff3df] px-3.5 py-1.5 text-[10px] font-medium text-[#f0a22e]">
            Rating: {book.rating}
          </span>

          {/* View Details */}
          <Link
            href={`/books/${book.bookId}`}
            className="rounded-full bg-[#23be0a] px-4 py-1.5 text-[10px] font-semibold text-white transition-colors hover:bg-[#1da808]"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ListedBookCard;
