// Write your code here

import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  reviewContainer = reviewData => {
    const {imgUrl, username, companyName, description} = reviewData

    return (
      <div className="profile-container">
        <img src={imgUrl} alt={username} className="profile-image" />
        <p className="user-name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onRightClick = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  onLeftClick = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const reviewData = reviewsList[index]

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">Reviews</h1>
        </div>
        <div className="review-container">
          <button
            type="button"
            className="button"
            data-testid="leftArrow"
            onClick={this.onLeftClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.reviewContainer(reviewData)}
          <button
            type="button"
            className="button"
            data-testid="rightArrow"
            onClick={this.onRightClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
