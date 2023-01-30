import feedEveryoneImage from "../img/FeedEveryone.png"
import bookArenaImage from "../img/bookArena.png"
import fishOnImage from "../img/FishOn.png"
import tttImage from "../img/ttt.png"
import {BsBoxArrowUpRight} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"

const Work = () => {
  return (
    <section className="work" id="work">
      <p className="work_head">Some Things I've Built</p>
      <div className="work_container feed">
        <div className="work_image1">
          <img className="res_img" src={feedEveryoneImage} alt=""/>
        </div>
        <div className="work_details">
          <p><a className="work_title" href="https://feedeveryone.onrender.com/login" target="_blank" rel="noreferrer">FeedEveryone</a></p>
          <div className="work_description">
            <p className="brief">A medium of communication between people having food willing to donate and homeless without food</p>
            <p className="tools">Redux, React, Express, Node JS, MongoDB, Material UI and CSS</p>
          </div>
          <div className="work_links">
            <a className="github_link" href="https://github.com/Minesh6684/MERN" target="_blank" rel="noreferrer"><BsGithub className="bi"/></a>
            <a href="https://feedeveryone.onrender.com/login" target="_blank" rel="noreferrer"><BsBoxArrowUpRight className="bi"/></a>
          </div>
        </div>
      </div>
      <div className="work_container book">
        <div className="work_details_reverse">
          <p><a className="work_title" href="https://bookarena.onrender.com" target="_blank" rel="noreferrer">bookArena</a></p>
          <div className="work_description_reverse">
            <p className="brief">The web-application maintains record of books. A user can
               store, retrieve and delete book information.
            </p>
            <p className="tools">Flask, Python, CSS, HTML, SQLAlchemy</p>
          </div>
          <div className="work_links">
            <a className="github_link" href="https://github.com/Minesh6684/bookArena" target="_blank" rel="noreferrer"><BsGithub className="bi"/></a>
            <a href="https://bookarena.onrender.com" target="_blank" rel="noreferrer"><BsBoxArrowUpRight className="bi"/></a>
          </div>
        </div>
        <div className="work_image2">
          <img className="res_img" src={bookArenaImage} alt=""/>
        </div>
      </div>
      <div className="work_container fish">
        <div className="work_image3">
          <img className="res_img" src={fishOnImage} alt=""/>
        </div>
        <div className="work_details">
          <p><a className="work_title" href="https://fishon.vercel.app/" target="_blank" rel="noreferrer">FishOn</a></p>
          <div className="work_description">
            <p className="brief">Extensive use of fundamentals of web building technologies, FishOn is a static website providing information about fish products</p>
            <p className="tools">HTML, CSS, Javascript</p>
          </div>
          <div className="work_links">
            <a className="github_link" href="https://github.com/Minesh6684/FishOn" target="_blank" rel="noreferrer"><BsGithub className="bi"/></a>
            <a href="https://fishon.vercel.app/" target="_blank" rel="noreferrer"><BsBoxArrowUpRight className="bi"/></a>
          </div>
        </div>
      </div>
      <div className="work_container ttt">
        <div className="work_details_reverse">
          <p><a className="work_title" href="https://tic-tac-toe-minesh6684.vercel.app/" target="_blank" rel="noreferrer">Tic Tac Toe</a></p>
          <div className="work_description_reverse">
            <p className="brief">Two player game let the user change one's name, let select the player2 mode as Computer or Human
               It also tracks the number of games played and winning count.
            </p>
            <p className="tools">HTML, CSS, Javascript</p>
          </div>
          <div className="work_links">
            <a className="github_link" href="https://github.com/Minesh6684/TicTacToe" target="_blank" rel="noreferrer"><BsGithub className="bi"/></a>
            <a href="https://tic-tac-toe-minesh6684.vercel.app/" target="_blank" rel="noreferrer"><BsBoxArrowUpRight className="bi"/></a>
          </div>
        </div>
        <div className="work_image4">
          <img className="res_img" src={tttImage} alt="" />
        </div>
      </div>
      <div className="other_work">
        <div className="work_card">
          <p className="work_title" style={{marginBottom: '20px'}}>Rock Paper Scissor</p>
          <p className="brief">Two player game let the user change one's name, let select the player2 mode as Computer or Human
            It also tracks the number of games played and winning count.
          </p>
          <p className="tools">HTML, CSS, Javascript</p>
          <a className="github_link" href="https://github.com/Minesh6684/Javascript/tree/main/MIDTERM" target="_blank" rel="noreferrer"><BsGithub className="bi"/></a>
        </div>
        <div className="work_card">
          <p className="work_title" style={{marginBottom: '20px'}}>Course Registration</p>
          <p className="brief">A database facilitates student to register for the classes arranged for respective students related to enrolled program
          </p>
          <p className="tools">MS SQL SERVER, SQL Queries, Normalization, Stored Procedures and Scalar Function</p>
        </div>
      </div>
    </section>
)
}

export default Work
