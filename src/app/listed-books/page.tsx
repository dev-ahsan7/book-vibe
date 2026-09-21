'use client';

import ListedBookCard from '@/components/shared/ListedBookCard';
import { BookContext } from '@/context/BooksContext';
import { Ibook } from '@/Types/book.types';
import React, { useContext, useState } from 'react';

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BookContext);

  const [sortBy, setSortBy] = useState<'rating' | 'pages' | 'year'>('rating');

  const sortBooks = (books: Ibook[]) => {
    const sortedBooks = [...books];

    if (sortBy === 'rating') {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'pages') {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === 'year') {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    return sortedBooks;
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist);

  return (
    <div className="container mx-auto px-4 py-5">
      {/* Page Title */}
      <h2 className="my-4 rounded-3xl bg-amber-100 py-16 text-center text-4xl font-bold">
        Listed Books
      </h2>

      {/* Sort */}
      <div className="mb-6 flex justify-end">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as 'rating' | 'pages' | 'year')
          }
          className="select select-accent"
        >
          <option value="rating">Sort by Rating</option>
          <option value="pages">Sort by Number of Pages</option>
          <option value="year">Sort by Publishing Year</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-border">
        {/* READ BOOKS */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books ${readBooks.length}`}
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-4 sm:p-6 md:p-10">
          {sortedReadBooks.length > 0 ? (
            <div className="space-y-4">
              {sortedReadBooks.map((book: Ibook) => (
                <ListedBookCard key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <p className="py-10 text-center text-lg font-semibold">
              No Read Books found
            </p>
          )}
        </div>

        {/* WISHLIST */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wishlist Books ${wishlist.length}`}
        />

        <div className="tab-content border-base-300 bg-base-100 p-4 sm:p-6 md:p-10">
          {sortedWishlist.length > 0 ? (
            <div className="space-y-4">
              {sortedWishlist.map((book: Ibook) => (
                <ListedBookCard key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <p className="py-10 text-center text-lg font-semibold">
              No Wishlist Books found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
