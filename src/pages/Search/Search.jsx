import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Container from "../../components/Container/Container";
import CoursePreview from "../../components/CoursePreview/CoursePreview";
import { getCourses } from "../../actions/courses";
import img from "../../images/course.jpg";

class Search extends Component {
  componentDidMount = () => {
    this.props.getCourses();
  };

  render() {
    return (
      <div>
        <Container>
          <h1>Search</h1>
          <div className="grid grid-1 grid-sm-2 grid-md-3">
            {this.props.courses &&
              this.props.courses.map(course => {
                const {
                  title: { rendered },
                  id,
                  price,
                  _embedded: { author }
                } = course;
                return (
                  <CoursePreview
                    key={id}
                    imgUrl={img}
                    title={rendered}
                    author={author[0].name}
                    price={price}
                    id={id}
                  />
                );
              })}
          </div>
        </Container>
      </div>
    );
  }
}

Search.propTypes = {
  getCourses: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => state.courses;

export default connect(mapStateToProps, { getCourses })(Search);
