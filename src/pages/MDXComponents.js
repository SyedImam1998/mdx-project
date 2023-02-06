import styles from '../styles/Markdown.module.css';

const MDXComponents = {

  p: (props) => <div style={{ border:"1px solid black"}}><p {...props} style={{ color: "red"}} /></div>,
  a: (props) => <a {...props} className={styles.link} />,
  h1: (props) => <h1 {...props} className={styles.p} />,
};

export default MDXComponents;