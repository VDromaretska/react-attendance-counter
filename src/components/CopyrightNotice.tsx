interface CopyrightNoticeProps {
  // ? makes a property optional: https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties
  author?: string;
  year: number;
}

export default function CopyrightNotice({
  author,
  year,
}: CopyrightNoticeProps): JSX.Element {
  // truthiness check: https://developer.mozilla.org/en-US/docs/Glossary/Truthy
    return (
      <>
        <p>
          Copyright {year}, {!author && ("but to nobody in particular")} {author}
        </p>
      </>
    );
}
