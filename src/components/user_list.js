import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers()
  }

  renderUser(user) {
    return (
      <div className='card card-outline-secondary'>
        <div className='card-block'>
          <h4 className='card-title'>{user.name}</h4>
          <p className='card-text'>{user.company.name}</p>
          <a className='btn btn-primary' href={user.website}>Website</a>
        </div>
      </div>
    )
  }

  render() {
    console.log(this.props.users)
    return (
      <div className='user-list'>
        {this.props.users.map(this.renderUser)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

export default connect(mapStateToProps, { fetchUsers })(UserList)
