import React from "react";
import { projects } from "../Data";
import '../styles/Portfolio.css'

function Portfolio() {


    return (
        <section>
            <div>
                <h1>Built Projects</h1>
                {projects.map((projects) => (
                    <><h3>{projects.title}</h3><div>
                        <p className="wrap">
                        {projects.description}
                        </p>
                        <p>
                            {projects.link}
                        </p>

                    </div></>


            ))}
            </div>

        </section>



    )


    
}

export default Portfolio;