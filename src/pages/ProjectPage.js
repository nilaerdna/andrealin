import { schoolProjects } from '../content/schoolProjects';
import { useParams } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

export default function ProjectPage() {
    let { projectId } = useParams();
    return (
        <>
            { schoolProjects[projectId] || <Redirect to="/404" /> }
        </>
    );
}
