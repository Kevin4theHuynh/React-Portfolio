import React from 'react'

export default function Main() {
    return (
        <>
      <div className="container bootstrap snippets bootdey" style={{marginBottom: "14rem;"}} id="aboutMe">
    <div className="profile card" >
        <div className="profile-body">
            <div className="profile-bio">
                <div className="row">
                    <div className="col-md-5 text-center" >
                        <img src="./Profile.jpg" alt="icon"/>
                    </div>
                    <div className="col-md-7" >
                        <h2>Kevin Huynh</h2>
                        <span><strong>Job:</strong> Web Developer</span>
                        <hr/>
                        <p>Welcome to my page, my name is <strong>Kevin Huynh</strong> I am new to develop and hope to become a Front-end developer. Currently I am learning HTML, JavaScript, and Css. My hobbies are coding, exercise, and playing games. I am a huge Pokemon fan as well as an avid moviegoer.</p>
                    </div>
                </div>    
            </div>
      </div>
    </div>
  </div> 

<section id="myProjects" className="text-center my-5">
<h2 className="h1-responsive font-weight-bold text-center my-5">A   COLLECTION OF MY PROJECTS</h2>

<p className="black-text text-center w-responsive mx-auto mb-5 info">This section displays a variety of projects I have worked on!</p>

<div className="container container-fluid">

<div className="row">


  <div className="col-md-12 mb-4">
    <div className="card card-image" style={{backgroundColor: "var(--thirdColor)"}} >
      <div className="text-black text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
        <div>
          <h3 className="purple-text">
            <i className="fas fa-plane"></i>
            <strong> First Group Project</strong>
          </h3>
          <h3 className="py-3 font-weight-bold">
            <strong>Animal Adoption</strong>
          </h3>
          <p className="pb-3">My first group project consisted of four people colloborating on providing a user with a site that will allow them to browse through a selection of animals sent back using an API and be able to fill out an adoption form.
          </p>
          <a className="btn btn-success btn-rounded btn-md" href="https://ljbrewer.github.io/AnimalAdoptions/"><i className="fas fa-clone left"></i> VIEW PROJECT</a>
        </div>
      </div>
    </div>
  </div>

  <div className="col-md-12 mb-4 mt-4">
    <div className="card card-image" style={{backgroundColor: "var(--thirdColor)"}}>
      <div className="text-black text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
        <div>
          <h3 className="purple-text">
            <i className="fas fa-plane"></i>
            <strong> Second Group Project</strong>
          </h3>
          <h3 className="py-3 font-weight-bold">
            <strong>Game Watch</strong>
          </h3>
          <p className="pb-3">My second group project aimed to create a responsive website for viewing games seeing their reviews and rating. Logging in allowed you to leave a comment and rating of your own.
          </p>
          <a className="btn btn-success btn-rounded btn-md" style={{backgroundColor: "var(--colorFive);"}}href="http://www.gamewatch.reviews/"><i className="fas fa-clone left"></i> VIEW PROJECT</a>
        </div>
      </div>
    </div>
  </div>

</div>
</div>
</section>
</>
    )
}