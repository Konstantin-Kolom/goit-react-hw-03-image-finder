import s from './Section.module.css';

export default function Section({ children }) {
  return (
    <section className={s.section}>
      {/* <h1>{title}</h1> */}
      {children}
    </section>
  );
}
