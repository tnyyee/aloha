import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import './style_popupinfo.css';
import '../../../../client/main.css';
export default class Popup extends React.Component {

    state = {
      open: false,
    };


  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  buttonClicked(){
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <button className="small_button" onClick={this.onOpenModal}>Läs mer</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2 id="heading">Unn Swanström</h2>
          <img id="profile"src="jpg/unn_profile.jpg"/>
          <p id="popupP">
            UX designer and meetup organizer who likes tech and horses.
            A talkative Swedish vagabond currently based in Stockholm. IT Woman
            of the Year 2015. For me being a user experience designer means I
            care about making products that work really, really well. I think
            technology should work for people, not the other way around.
            <br></br><br></br>
            I love being a part of almost every aspect of product development;
            from identifying user needs and opportunities, ideation,
            facilitation workshops, sketching, wireframing, prototyping,
            usability testing, UI design, pair programming front end to final
            user feedback.
          </p>
          <div className="button-grid">
            <button className="small_button button-grid-box" onClick={() => {
              this.buttonClicked()
              window.open('https://twitter.com/unnderbar', '_blank');
            }}>Twitter</button>
            <button className="small_button button-grid-box" onClick={() => {
              this.buttonClicked()
              window.open('https://www.instagram.com/unnderbar/', '_blank');
            }}>Instagram</button>
            <button className="small_button button-grid-box" onClick={() => {
              this.buttonClicked()
              window.open('https://www.facebook.com/unnderbar', '_blank');
            }}>Facebook</button>
            <button className="small_button button-grid-box" onClick={() => {
              this.buttonClicked()
              window.open('https://medium.com/@unnderbar', '_blank');
            }}>Medium</button>
          </div>

        </Modal>
      </div>
    );
  }
}
