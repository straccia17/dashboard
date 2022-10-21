import { Component, createSignal, For } from "solid-js";
import { Book } from "../../model/book";
import BookDetail from "../book-detail/book-detail.component";

import styles from './book-list.module.css'

type BookListPropType = { books: Book[] };

const BookList: Component<BookListPropType> = (props: BookListPropType) => {
  const [filter, setFilter] = createSignal("");
  const filteredBooks = () => {
    if (filter() !== "") {
      return props.books.filter((b) =>
        b.title.toLowerCase().includes(filter().toLowerCase())
      );
    }
    return props.books;
  };

  return (
    <>
      <div class={styles.filter}>
        <input
          type="text"
          value={filter()}
          onInput={(e) => setFilter((e.target as HTMLInputElement).value)}
        />
        <span>Trovati {filteredBooks().length} libri</span>
      </div>
      <For each={filteredBooks()}>
        {(book, i) => <BookDetail book={book}></BookDetail>}
      </For>
    </>
  );
};

export default BookList;
