import BookCard from '@/components/HomePage/BookCard';
import { Ibook } from '@/Types/book.types';

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
        {booksData.map((book: Ibook) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
    </section>
  );
};

export default Books;
