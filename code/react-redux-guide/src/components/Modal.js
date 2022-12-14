import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as modalActions from '../store/actions/modal.action'

function Modal ({
  showStatus,
  isShow,
  isHide,
  isShow_async,
  show_async
}) {
  const styles = {
    width: 200,
    height: 200,
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -100,
    marginTop: -100,
    backgroundColor: 'skyblue',
    display: showStatus ? 'block' : 'none'
  }
  
  return <div>
    <button onClick={show_async}>显示</button>
    <button onClick={isHide}>隐藏</button>
    <div style={styles}></div>
  </div>
}

const mapStateToProps = state => ({
  showStatus: state.modal.showStatus
})

const mapDispatchToProps = dispatch => bindActionCreators(modalActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
