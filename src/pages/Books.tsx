import { useNavigate } from "@solidjs/router";
import { Component, createSignal, onMount } from "solid-js";
import BookList from "../components/book-list/book-list.component";
import { sortBooks } from "../helper/book.helper";
import { Book } from "../model/book";
import { getAuthToken } from "../service/cognito.service";

import styles from "./Books.module.css";

const Books: Component = () => {
  const [books, setBooks] = createSignal<Book[]>([]);
  const navigate = useNavigate();

  const URL = import.meta.env.VITE_API_ENDPOINT + "/books";
  const listBooks = () =>
    fetch(URL, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    })
      .then((resp) => {
        if (resp.status === 401) {
          throw Error("unauthorized");
        }
        return resp.json();
      })
      .catch((e) => {
        console.error(e);
        navigate("/login", { replace: true });
        return [];
      });

  onMount(async () => {
    const books: Book[] = await listBooks();
    books.sort(sortBooks);
    setBooks(books);
  });

  return (
    <div class={styles.container}>
       <BookList books={books()}></BookList>
    </div>
  );
};

export default Books;
