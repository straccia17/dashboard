import { Component } from "solid-js";
import { Book } from "../../model/book";
import { openFromS3 } from "../../service/s3.service";

import styles from './book-detail.module.css'

type BookDetailPropType = { book: Book}

const BookDetail: Component<BookDetailPropType> = ({ book }: BookDetailPropType) => {

    const openBook = () => openFromS3(book.bucket_key)

    return (
        <div class={styles.container} onClick={openBook}>
            <span class={styles.title}>{ book.title }</span>
            <span class={styles.subtitle}>{ book.subtitle }</span>
            <div class={styles.info}>
                <span class={styles.isbn}>{book.isbn_13} {book.isbn_10}</span>
                <span class={styles.publishers}>{book.publishers}</span>
                <span class={styles.date}>{book.publish_date}</span>
            </div>
        </div>
    );
}

export default BookDetail