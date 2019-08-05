import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts, savePost, deletePost } from './Actions/PostActions'
import { Field, reduxForm, reset } from 'redux-form'
import styled from 'styled-components'
import _ from 'lodash'

const Wrapper = styled.div`
padding-bottom: calc(279px + 20px);
`
const Button = styled.button`
background: blue;
border-radius: 4px;
border: 2px solid navy;
color: white;
cursor: pointer;
font-size: .9em;
margin-top: 1em;
padding: .25em .65em .25em .5em;
&.btn-delete {
  background: red;
  border-color: darkred;
  padding: .1em .33em;
  position: absolute;
  top: -20px;
  right: -5px;
}
`
const Card = styled.div`
background-color: lightskyblue;
border-radius: 12px;
margin-bottom: 1em;
padding: 1em 1.5em;
`
const ChatBox = styled.div`
background-color: lightskyblue;
bottom: 0;
left: 0;
padding: 30px 20px 20px;
padding-bottom: calc(86px + 20px);
position: fixed;
width: 100%;
`

class AppForm extends Component {
  componentWillMount () {
    this.props.getPosts()
  }
  componentDidUpdate () {
    this.props.getPosts()
  }
  renderPosts () {
    return _.map(this.props.posts, (post, key) => {
      return (
        <div className='post f7' key={key}>
          <Card>
            <div className='relative w-100'>
              <h3 className='lh-title mr4'> {post.title} </h3>
              <p className='lh-copy mt0'> {post.body} </p>
              <Button className='btn-delete' onClick={() => this.props.deletePost(key)}> &times; </Button>
            </div>
          </Card>
        </div>
      )
    })
  }
  renderField (field) {
    if (field.type === 'text') {
      return <input type='text' placeholder={`Enter a ${field.label}...`} {...field.input} className='ba br2 b--black-10 f6 input-reset mb2 pa2 w-100' />
    } else {
      return <textarea placeholder={`Enter a ${field.label}...`} {...field.input} className='ba br2 b--black-10 f6 input-reset mb2 pa2 w-100' />
    }
  }
  onSubmit (values) {
    this.props.savePost(values).then(this.props.dispatch(reset('NewPost')))
  }
  render () {
    const { handleSubmit } = this.props
    return (
      <Wrapper className='bg-near-white min-vh-100 pa4'>
        <div className='main'>
          {this.renderPosts()}
        </div>
        <ChatBox>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              name='title'
              component={this.renderField}
              label='Title'
              type='text'
            />
            <Field
              name='body'
              component={this.renderField}
              label='Body'
              type='textarea'
            />
            <Button type='submit'> + Post </Button>
          </form>
        </ChatBox>
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
