import { Badge, Button, Col, Stack, Image } from 'react-bootstrap';
import { projectEntry } from '../../data/projects';

export default function ProjectCard(data: projectEntry) {
  return (
    <div className="projectCard">
      <Image src={data.mini ? data.mini : 'assets/avatar.png'} rounded width={200} />
      <div style={{ 'width': '30em' }}>
        <h2>{data.name}</h2>
        <p style={{ height: '30%', 'maxWidth': '24em' }}>{data.description}</p>
        <div className='projectTags' style={{ height: '20%' }}>
          {data.tags.map(t => (<Badge style={{ margin: '.2em' }} bg="secondary" key={`badge_${t}`}>{t}</Badge>))}
        </div>
        <div className="projectNav">
          {(data.repo) ? <a href={data.repo} rel="noreferrer" target="_blank">go to repo</a> : null}
          {(data.demo) ? <a href={data.demo} rel="noreferrer" target="_blank">see demo</a> : null}
        </div>
      </div>

    </div >
  )
}