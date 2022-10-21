export type Book = {
    isbn_list: string[],
    found_on_first_isbn: boolean,
    publish_date?: string,
    bucket_key: string,
    publishers?: string[],
    key: string,
    title: string,
    subtitle?: string,
    authors: { key: string }[],
    isbn_13?: string[],
    isbn_10?: string[],
    number_of_pages?: number,
}