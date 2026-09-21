import ReadButton from '@/components/BooksDetails/ReadButton';
import WishListButton from '@/components/BooksDetails/WishListButton';
import { Ibook } from '@/Types/book.types';
import Image from 'next/image';

interface BookDetailsPageProps {
  params: Promise<{ bookId: string }>;
}

const getBooks = async (): Promise<Ibook[]> => {
  const res = await fetch('http://localhost:3000/booksData.json');
  if (!res.ok) throw new Error('Failed to fetch books');
  return res.json();
};

const Divider = () => <div className="my-4 h-px bg-[#dedede]" />;

const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <div className="grid grid-cols-[155px_1fr] items-center leading-5">
    <span className="text-[#666]">{label}</span>
    <span className="font-bold text-[#131313]">{value}</span>
  </div>
);

const BookDetailsPage = async ({ params }: BookDetailsPageProps) => {
  const { bookId } = await params;
  const books = await getBooks();
  const book = books.find((b) => String(b.bookId) === String(bookId));

  if (!book) {
    return (
      <div className={` container mx-auto px-4 py-20 text-center`}>
        <h2 className="text-3xl font-bold">Book not found</h2>
        <p className="mt-2 text-gray-500">
          The book you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <main>
      <section className="container mx-auto px-4">
        <div className="px-6 py-10 sm:px-10 lg:px-25.5 lg:py-12">
          <div className="grid items-start gap-9 lg:grid-cols-[1.05fr_1fr]">
            {/* Image */}
            <div className="flex h-fill items-center justify-center overflow-hidden rounded-2xl bg-[#f2f2f2] p-8">
              <Image
                src={book.image}
                alt={book.bookName}
                width={500}
                height={600}
                priority
                className="h-141 w-full object-contain"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col">
              {/* Badges */}

              <h1
                className={` text-3xl font-bold leading-tight text-[#131313] sm:text-[34px]`}
              >
                {book.bookName}
              </h1>

              <p className="mt-3 text-[15px] font-medium text-[#444]">
                By : {book.author}
              </p>

              <Divider />
              <p className="text-[15px] font-medium text-[#444]">
                {book.category}
              </p>
              <Divider />

              {/* Review */}
              <p className="whitespace-pre-line text-[13px] leading-5 text-[#555]">
                <span className="font-bold text-[#131313]">Review :</span>{' '}
                {book.review}
              </p>

              {/* Tags */}
              <div className="mt-5 flex items-center gap-3">
                <span className="text-[13px] font-bold text-[#131313]">
                  Tag
                </span>
                <div className="flex flex-wrap gap-2">
                  {book.tags?.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#23be0a]/[0.07] px-3.5 py-0.75 text-[13px] font-medium text-[#23be0a]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <Divider />

              {/* Info */}
              <div className="flex flex-col gap-2.25 text-[13px]">
                <InfoRow label="Number of Pages:" value={book.totalPages} />
                <InfoRow label="Publisher:" value={book.publisher} />
                <InfoRow
                  label="Year of Publishing:"
                  value={book.yearOfPublishing}
                />
                <InfoRow label="Rating:" value={book.rating} />
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">
                <ReadButton book={book}></ReadButton>
                <WishListButton book={book}></WishListButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookDetailsPage;
