import styles from './Policy.module.css';

export default function PolicyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.page}>
      <div className={`container-narrow ${styles.content}`}>
        {children}
      </div>
    </div>
  );
}
