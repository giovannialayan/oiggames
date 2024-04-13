import './Project.css';

interface Props {
  title: string;
  image: string;
  links: Link[];
}

function Project({ title, image, links }: Props) {
  return (
    <div>
      <p className='fs-2'>{title}</p>
      <img className='projectImage' src={image}></img>
      <div className='d-flex flex-column fs-5'>
        {links.map((link) => {
          return <a href={link.url}>{link.name}</a>;
        })}
      </div>
    </div>
  );
}

export default Project;
