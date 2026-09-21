'use client';
import { BookContext } from '@/context/BooksContext';
import { Ibook } from '@/Types/book.types';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishListButton = ({ book }: { book: Ibook }) => {
  const { wishlist, setWishlist } = useContext(BookContext) as {
    wishlist: Ibook[];
    setWishlist: React.Dispatch<React.SetStateAction<Ibook[]>>;
  };

  const handleAddToWishList = () => {
    console.log('Read Button Clicked', book);
    setWishlist([...wishlist, book]);
    toast.success(`you have Wishlist ${book.bookName}`);
  };
  return (
    <button
      className="h-10.75 rounded-md bg-[#55b4cf] px-5.25 text-[15px] font-semibold text-white transition hover:bg-[#46a8c3]"
      onClick={() => handleAddToWishList()}
    >
      Wishlist
    </button>
  );
};

export default WishListButton;
