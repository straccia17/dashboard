import { Book } from "../model/book";

export function sortBooks(b1: Book, b2: Book) {
    return b1.title.toLowerCase().localeCompare(b2.title.toLowerCase())
}