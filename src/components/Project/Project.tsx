import './Project.css';

interface Props {
  title: string;
  image: string;
  links: Link[];
}

function Project({ title, image, links }: Props) {
  return (
    <div>
      <p className='fs-2 mb-1'>{title}</p>
      {image && <img className='projectImage' src={image}></img>}
      <div className='d-flex flex-column fs-5'>
        {links.map((link) => {
          return (
            <a key={link.name} href={link.url}>
              {link.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
