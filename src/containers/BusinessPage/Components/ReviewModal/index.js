// import React, { Component } from 'react'
// import Modal from 'react-modal';
// import { Input, Rate, Button, Icon } from 'antd';
// import FacebookLogin from 'react-facebook-login';
// import classnames from 'classnames';

// const { TextArea } = Input;
// import "./index.scss"
// import { reportEvent } from '../../../../services/analyticsService';
// const MAX_CHARS = 400;
// const MIN_CHARS = 2;
// Modal.setAppElement('#react-root')

// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };

// export default class ReviewModal extends Component {
//   constructor(props) {
//       super(props)
//       this.state = {
//         comment: '',
//         score: undefined,
//         step: 0, // 0 = form, 1 = login
//         isValid: false,
//         isTouched: false,
//       }
//   }
//   onClose = () => {
//       this.props.onClose();
//   }
//   onChange = (e) => {
//     const comment = e.target.value;
//     if (comment.length > MAX_CHARS) return;
//     const currentState = {...this.state, comment};
//     this.setState({comment, isValid: this.isFormValid(currentState)});
//   }
//   onStarChange = (score) => {
//     const currentState = {...this.state, score};

//     this.setState({score, isValid: this.isFormValid(currentState)})
//   }
//   onStepChange = (step) => {
//     if (step === 1) {
//       reportEvent({
//         category: 'ReviewModal',
//         action: 'SubmitClick'
//       })
//     }
//     this.setState({step});
//   }
//   onCloseClick = () => {
//     reportEvent({
//       category: 'ReviewModal',
//       action: 'CancelClick'
//     })
//     this.props.onCloseClick();
//   }
//   onFacebookResponse = (facebookResponse) => {
//     const {submitBusinessReview, business} = this.props;
//     const { score, comment } = this.state;
//     if (!score || !comment) return;
//     if (!facebookResponse) {
//       //TODO: throw error
//       return;
//     }
//     const formData = new FormData();
//     formData.append('businessId', business._id);
//     formData.append('comment', comment);
//     formData.append('answer1', score);
//     this.props.fbLogin(facebookResponse, () => {submitBusinessReview(formData)});
//     this.props.setReviewLoadingState(true);
//   }
//   isFormValid(params){
//     if (params.score === undefined) return false;
//     if (!params.comment || params.comment.length > MAX_CHARS || params.comment.length < MIN_CHARS) return false;
//     return true;
//   }
//   renderForm() {
//     const {business} = this.props;
//     const {comment, score, step, isValid} = this.state;

//     return(
//       <React.Fragment>
//         <h2 ref={subtitle => this.subtitle = subtitle}>{`מה דעתך על ${business.englishName}?`}</h2>
//          <div className="stars-wrapper">
//             <h3>הדירוג שלך</h3>
//             <Rate value={score} onChange={this.onStarChange}  />
//           </div>
//           <div className="comment-wrapper">
//             <h3>הביקורת שלך</h3>
//             <TextArea className="comment" placeholder="כמה מילים על החוויה שלך עם העסק?" rows={4} value={comment} onChange={this.onChange} />
//             <div className="buttons-wrapper">
//             <span className="close-btn" onClick={() => this.onCloseClick()}>סגור</span>
//             <Button className={classnames('submit-btn', {'disabled': !isValid})} disabled={!isValid} onClick={() => this.onStepChange(1)}>שלח דירוג</Button>
//             </div>
//           </div>
//       </React.Fragment>
//     )
//   }
//   renderAuth() {
//     const {comment, score} = this.state;
//     const {isReviewLoading} = this.props;
//     return(
//       <React.Fragment>
//         <h2 >{`התחברות לMapo`}</h2>
//         <div className="facebook-login-wrapper">
//         {isReviewLoading && (<Icon style={{fontSize: '30'}} spin type="loading" />)}
//         {!isReviewLoading && (<FacebookLogin
//         isDisabled={!comment || !score}
//         textButton={`התחבר עם פייסבוק`}
//         appId="291124068055220" //APP ID NOT CREATED YET
//         fields="name,email,picture"
//         callback={this.onFacebookResponse}
//       />)}
//       </div>
//       </React.Fragment>
//     )
//   }
//     render() {
//         const {isOpen, business, isReviewLoading} = this.props;
//         const {comment, score, step} = this.state;
//     return (
//         <Modal
//         id="reviewModal"
//         style={customStyles}
//         // className="review-modal"
//           isOpen={isOpen}
//         //   onAfterOpen={this.afterOpenModal}
//           onRequestClose={this.onClose}
//         //   style={customStyles}
//           contentLabel="Example Modal"
//         >

//           {step == 0 && this.renderForm()}
//           {step == 1 && this.renderAuth()}
//         </Modal>

//     )
//   }
// }
