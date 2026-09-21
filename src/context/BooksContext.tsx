'use client';

import { Ibook } from '@/Types/book.types';
import React, { createContext, ReactNode, useState } from 'react';

interface IBookContext {
  readBooks: Ibook[];
  setReadBooks: React.Dispatch<React.SetStateAction<Ibook[]>>;
  wishlist: Ibook[];
  setWishlist: React.Dispatch<React.SetStateAction<Ibook[]>>;
}

export const BookContext = createContext<IBookContext>({
  readBooks: [],
  setReadBooks: () => {},
  wishlist: [],
  setWishlist: () => {},
});

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<Ibook[]>([]);
  const [wishlist, setWishlist] = useState<Ibook[]>([]);

  const sharedData = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };
  return (
    <BookContext.Provider value={sharedData}>{children}</BookContext.Provider>
  );
};

export default BooksProvider;
