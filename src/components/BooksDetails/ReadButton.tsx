'use client';
import { BookContext } from '@/context/BooksContext';
import { Ibook } from '@/Types/book.types';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({ book }: { book: Ibook }) => {
  const { readBooks, setReadBooks } = useContext(BookContext) as {
    readBooks: Ibook[];
    setReadBooks: React.Dispatch<React.SetStateAction<Ibook[]>>;
  };

  const handleReadBook = () => {
    console.log('Read Button Clicked', book);
    setReadBooks([...readBooks, book]);
    toast.success(`you have read ${book.bookName}`);
  };
  return (
    <button
      className="h-10.75 rounded-md border border-[#cfcfcf] bg-white px-5.25 text-[15px] font-bold text-[#131313] transition hover:bg-neutral-50"
      onClick={() => handleReadBook()}
    >
      Read
    </button>
  );
};

export default ReadButton;
