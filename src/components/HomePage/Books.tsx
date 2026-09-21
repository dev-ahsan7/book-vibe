import { Ibook } from '@/Types/book.types';
import BookCard from './BookCard';
import Link from 'next/link';

const getBooks = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch books');
  }

  return res.json();
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <span className="mb-3 inline-block rounded-full bg-[#23be0a]/10 px-4 py-1.5 text-sm font-semibold text-[#23be0a]">
          Explore Our Collection
        </span>

        <h2 className="text-3xl font-bold tracking-tight text-[#131313] sm:text-4xl">
          Discover Your Next{' '}
          <span className="text-[#23be0a]">Favorite Book</span>
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-gray-500">
          Explore our collection of timeless classics, inspiring stories, and
          unforgettable adventures.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {booksData.slice(0, 9).map((book: Ibook) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <Link
          href="/books"
          className="group inline-flex w-full  mt-16 items-center justify-center gap-2 rounded-full bg-[#23be0a] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(35,190,10,0.35)] transition-all duration-300 hover:bg-[#1da808] hover:shadow-[0_14px_40px_rgba(35,190,10,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23be0a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#131313] sm:w-auto"
        >
          Browse Our Books
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-none stroke-current transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Books;
