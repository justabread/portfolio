import styles from "./styles";

interface BulletListProps {
  title: string;
  points: string[];
  noDivider?: boolean;
}

const BulletList = ({ title, points, noDivider = false }: BulletListProps) => {
  return (
    <div css={styles.bulletPonts} className="cvElement">
      {title}
      {noDivider ? null : <hr />}
      {points.map((point, index) => (
        <div css={styles.bullet} key={index}>
          {point}
        </div>
      ))}
    </div>
  );
};

export default BulletList;
