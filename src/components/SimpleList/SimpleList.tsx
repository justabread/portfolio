interface SimpleListProps {
  title: string;
  content: string;
  noDivider?: boolean;
}

const SimpleList = ({ title, content, noDivider }: SimpleListProps) => {
  return (
    <div>
      {title}
      {noDivider ? null : <hr />}
      {content}
    </div>
  );
};

export default SimpleList;
