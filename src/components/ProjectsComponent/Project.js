import React, {useEffect, useState} from 'react';
import sanityClient from '../../client.js';
import { ProjectsContentContainer, ProjectsHeading, ProjectsHeadingContainer, ProjectsSubHeading, Slide, SlideShow, SlideShowSlider } from './ProjectElements';
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
            <ProjectsContentContainer>
                <ProjectsHeadingContainer>
                    <ProjectsHeading>Projects Page</ProjectsHeading>
                    <ProjectsSubHeading>Recent Projects</ProjectsSubHeading>
                </ProjectsHeadingContainer>
                <SlideShow>
                    <SlideShowSlider>
                        {projectData && projectData.map((project, index)=>(
                        <Slide key={project.slug}>
                            <h3>{project.title}</h3>
                            <div>
                                <span><strong>Finished On:</strong>:{' '}{new Date(project.date).toLocaleDateString()}</span>
                                <span><strong>For:</strong>:{' '}{project.place}</span>
                                <span><strong>Type:</strong>:{' '}{project.projectType}</span>
                                <p>{project.description}</p>
                            </div>
                        </Slide>
                        ))}
                    </SlideShowSlider>
                </SlideShow>
        </ProjectsContentContainer>
        )
}

//make sure you change the nav title to just "projects"
