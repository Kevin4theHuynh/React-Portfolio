import React from "react";
import { projects } from "../Data";

function Portfolio() {
    return (
        <section>
            <div>
                <h1>Built Projects</h1>
                {projects.map((projects) => (
                    <><h3>{projects.title}</h3><div>
                        {projects.description}

                        {projects.link}
                    </div></>


            ))}
            </div>

        </section>



    )


    
}

export default Portfolio;