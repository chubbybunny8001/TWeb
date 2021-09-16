import React, {useEffect, useState} from 'react';
import { PageContainer } from '../UniversalStyledElements';
import sanityClient from '../../client.js';
//Project page will be for artists current project he is working on!

export default function Project(){
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "project"]{
                title, 
                slug,
                date, 
                place,
                description,
                projectType
            }`)
            .then((data) => setProjectData(data))
            .catch(console.error)
        }, []);

    return (
        <PageContainer>
            <main>
            <section>
                <h1>Projects Page</h1>
                <h2>Welcome to a list of my recent projects!</h2>
                <section>
                    {projectData && projectData.map((project, index)=>(
                    <article key={project.slug}>
                        <h3>{project.title}</h3>
                        <div>
                            <span><strong>Finished On:</strong>:{' '}{new Date(project.date).toLocaleDateString()}</span>
                            <span><strong>For:</strong>:{' '}{project.place}</span>
                            <span><strong>Type:</strong>:{' '}{project.projectType}</span>
                            <p>{project.description}</p>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
        </PageContainer>
        )
}

//make sure you change the nav title to just "projects"
