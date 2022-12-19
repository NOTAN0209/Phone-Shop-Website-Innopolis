import './link.css';

function Link(props) {
  let { text, link } = props;

  return (
      <a className = "a" target="_blank" rel="noreferrer" href={link}>{text}</a>
  );
}

export default Link;