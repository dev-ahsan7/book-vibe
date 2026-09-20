import { Ibook } from '@/Types/book.types';
import Image from 'next/image';
import Link from 'next/link';

interface BookCardProps {
  book: Ibook;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <article className="group relative flex h-full flex-col cursor-pointer overflow-hidden rounded-3xl bg-white p-2 shadow-[0_2px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(35,190,10,0.18)]">
      {/* Cover */}
      <div className="relative h-64 overflow-hidden rounded-[20px] bg-gray-100 sm:h-72">
        {/* Blurred backdrop from the cover itself */}
        <Image
          src={book.image}
          alt=""
          fill
          aria-hidden
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="scale-150 object-cover opacity-60 blur-2xl saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/20" />

        {/* Badges */}
        <span className="absolute left-3 top-3 z-10 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#1a9a08] backdrop-blur-md">
          {book.category}
        </span>
        <span className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
          <span className="text-yellow-400">★</span>
          {book.rating.toFixed(1)}
        </span>

        {/* Book */}
        <div className="absolute inset-0 flex items-center justify-center px-10 py-8">
          <div className="relative h-full w-full max-w-[170px] transition-transform duration-500 [transform:perspective(900px)_rotateY(-8deg)] group-hover:[transform:perspective(900px)_rotateY(0deg)_scale(1.06)]">
            <Image
              src={book.image}
              alt={book.bookName}
              fill
              sizes="200px"
              className="rounded-md object-cover shadow-[0_20px_35px_-8px_rgba(0,0,0,0.55)]"
            />
            {/* spine highlight */}
            <div className="absolute inset-y-0 left-0 w-2 rounded-l-md bg-gradient-to-r from-black/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-4 pb-3 pt-5 sm:px-5">
        <h3
          title={book.bookName}
          className="line-clamp-1 text-lg font-bold tracking-tight text-[#131313] transition-colors duration-300 group-hover:text-[#23be0a] sm:text-xl"
        >
          {book.bookName}
        </h3>
        <p className="mt-1 line-clamp-1 text-sm text-gray-500">
          by <span className="font-medium text-gray-700">{book.author}</span>
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#23be0a]/10 px-3 py-1 text-xs font-medium text-[#1a9a08]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <div className="flex items-center gap-4 text-sm">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-gray-400">
                Pages
              </p>
              <p className="font-semibold text-gray-800">{book.totalPages}</p>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div>
              <p className="text-[11px] uppercase tracking-wider text-gray-400">
                Year
              </p>
              <p className="font-semibold text-gray-800">
                {book.yearOfPublishing}
              </p>
            </div>
          </div>

          <Link
            href={`/books/${book.bookId}`}
            aria-label={`View details of ${book.bookName}`}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#131313] text-white transition-all duration-300 hover:scale-110 group-hover:bg-[#23be0a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23be0a] focus-visible:ring-offset-2"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-none stroke-current transition-transform duration-300 group-hover:translate-x-0.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
