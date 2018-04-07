import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMyCourses } from "../../actions/user";
import CoursePreview from "../../components/CoursePreview/CoursePreview";
import Container from "../../components/Container/Container";

import img from "../../images/course.jpg";

class MyCourses extends Component {
  componentDidMount = () => {
    this.props.getMyCourses();
  };

  render() {
    return (
      <div>
        <Container>
          <h1>MyCourses</h1>

          <div className="grid grid-1 grid-sm-2 grid-md-3">
            {this.props.myCourses &&
              this.props.myCourses.map(myCourse => {
                const {
                  title: { rendered },
                  id,
                  price,
                  _embedded: { author }
                } = myCourse;
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

MyCourses.propTypes = {
  getMyCourses: PropTypes.func.isRequired,
  myCourses: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({ myCourses: state.user.myCourses });

export default connect(mapStateToProps, { getMyCourses })(MyCourses);
