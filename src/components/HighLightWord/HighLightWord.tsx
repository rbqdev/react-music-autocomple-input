type HighlightWordProps = {
  textBase: string;
  text: string;
};

export const HighlightWord = ({ textBase, text }: HighlightWordProps) => {
  const parts = text.split(new RegExp(`(${textBase})`, "gi"));
  return (
    <p>
      {parts.map((part, index) =>
        part.toLowerCase() === textBase.toLowerCase() ? (
          <mark key={`${part}-${index}`}>{part}</mark>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        )
      )}
    </p>
  );
};
