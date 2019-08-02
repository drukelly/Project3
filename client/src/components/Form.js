import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts, savePost, deletePost } from './Actions/PostActions'
import { Field, reduxForm, reset } from 'redux-form'
import _ from 'lodash'
import styled from 'styled-components'
// import DateTimePicker from 'react-widgets/lib/DateTimePicker'
// import Moment from 'moment'
// import momentLocalizer from 'react-widgets-moment'

const Wrapper = styled.section`
  padding-bottom: 100px;
  padding-top: 174px;
`
// Moment.locale('en')
// momentLocalizer()

class AppForm extends Component {
  componentWillMount () {
    this.props.getPosts()
  }

  renderPosts () {
    return _.map(this.props.posts, (post, key) => {
      return (
        <div className='card post' key={key}>
          <div className='card-block'>
            <h3 className='card-Title'>
              {post.Title}
            </h3>
            <p className='card-text'>
              {post.Description}
            </p>
            <h5>
              {post.Date} {post.Time}
            </h5>
            <p>
              {post.Location}
            </p>
            <button className='btn btn-danger float-right' onClick={() => this.props.deletePost(key)}>Delete</button>
          </div>
          <br /><br />
        </div>
      )
    })
  }

  renderField (field) {
    return (
      <input type='text' placeholder={`Enter a ${field.label}...`} {...field.input} className={field.class} />
    )
  }

  onSubmit (values) {
    this.props.savePost(values).then(this.props.dispatch(reset('NewPost')))
  }

  render () {
    // const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
    //   <DateTimePicker
    //     onChange={onChange}
    //     format='DD MMM YYYY'
    //     time={showTime}
    //     value={!value ? null : new Date(value)}
    //   />
    const { handleSubmit } = this.props
    return (
      <Wrapper>
        <div className='container'>
          <div className='main'>
            {this.renderPosts()}
          </div>
          <div className='navbar fixed-bottom'>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className='footerForm'>
              <Field
                name='Title'
                component={this.renderField}
                label='Title'
                class='footer-Title'
              /> <br />
              <Field
                name='Description'
                component={this.renderField}
                label='Description'
                class='footer-Description'
              /> <br />
              <Field
                name='Date'
                component={this.renderField}
                label='Date'
                class='footer-date'
              /> <br />
              <Field
                name='Time'
                component={this.renderField}
                label='Time'
                class='footer-time'
              /> <br />
              <Field
                name='Location'
                component={this.renderField}
                label='Location'
                class='footer-Location'
              /> <br />
              {/* <Field
                name='date'
                showTime={false}
                component={renderDateTimePicker}
              /> */}
              <button type='submit' className='btn footer-button'>Post</button>
            </form>
          </div>
        </div>
      </Wrapper>
    )
  }
}

let form = reduxForm({
  form: 'NewPost'
})(AppForm)

form = connect(state => ({
  posts: state.posts
}), { savePost, getPosts, deletePost }
)(form)

export default form
