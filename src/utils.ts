export function selectMany<T, V>(arr: T[], f: (elem: T) => V[]): V[] {
  return Array.from(new Set(
    arr.reduce((acc : V[], item): V[] => {
      const result = f(item);
      return [...acc, ...result];
    }, [] as V[])
  ));
}

// EXAMPLE

export interface Book {
  name: string;
  authors: string[];
}

const books: Book[] = [
  {
    name: "Dune",
    authors: ["Gerbert"],
  },
  {
    name: "Harry Potter",
    authors: ["Rowling"],
  },
  {
    name: "Game of Thrones",
    authors: ["Martin"],
  },
];
selectMany(books, (b) => b.authors);
// outputs array of ALL authors

