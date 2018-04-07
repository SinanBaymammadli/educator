import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getOneCourse } from "../../actions/courses";
import CourseDetail from "../../components/CourseDetail/CourseDetail";
import img from "../../images/course.jpg";

class CourseDetailPage extends Component {
  componentDidMount = () => {
    this.props.getOneCourse(this.props.match.params.id);
  };

  render() {
    if (!this.props.currentCourse) {
      return <h1>loading</h1>;
    }

    const { title, description, price, _embedded } = this.props.currentCourse;
    return (
      <CourseDetail
        title={title.rendered}
        description={description}
        price={price}
        author={_embedded.author[0]}
        imgUrls={[img]}
      />
    );
  }
}

const mapStateToProps = state => ({
  currentCourse: state.courses.currentCourse
});

CourseDetailPage.propTypes = {
  getOneCourse: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  currentCourse: PropTypes.shape({
    title: PropTypes.shape({
      rendered: PropTypes.string.isRequired
    }).isRequired
  })
};

CourseDetailPage.defaultProps = {
  currentCourse: null
};

export default connect(mapStateToProps, { getOneCourse })(CourseDetailPage);
