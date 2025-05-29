import { useRouter } from 'next/router';
import { CSSProperties } from 'react';
import styles from './Title.module.css';
import { ArrowRightIcon } from '../Icons/ArrowRightIcon';

export type TitleProps = { containerStyle?: CSSProperties; label: string; onBack?: () => void };

export const Title = ({ containerStyle, label, onBack }: TitleProps) => {
  const router = useRouter();

  return (
    <div style={containerStyle} className={styles.container}>
      <ArrowRightIcon
        onClick={() => {
          if (onBack) onBack();
          else router.back();
        }}
        style={{ cursor: 'pointer', marginInlineEnd: 12 }}
      />
      <span>{label}</span>
    </div>
  );
};
