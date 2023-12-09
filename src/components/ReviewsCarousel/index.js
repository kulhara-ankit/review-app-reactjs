// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {review: 0}

  onRightClick = () => {
    const {review} = this.state
    const {reviewsList} = this.props

    if (review < reviewsList.length - 1) {
      this.setState(prevState => ({review: prevState.review + 1}))
    }
  }

  onLeftClick = () => {
    const {review} = this.state

    if (review > 0) {
      this.setState(prevState => ({review: prevState.review - 1}))
    }
  }

  render() {
    const {review} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList

    return (
      <div className="mainBgContainer">
        <div className="reviewContainer">
          <h1 className="heading">Reviews</h1>
          <div className="itemsAlign">
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
            <div className="reviewItems">
              <img src={imgUrl} alt={username} />
              <p className="userName">{username}</p>
              <p className="companyName">{companyName}</p>
              <p className="description">{description}</p>
            </div>
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
      </div>
    )
  }
}

export default ReviewsCarousel
