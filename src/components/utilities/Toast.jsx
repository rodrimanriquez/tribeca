import React from 'react'

const Toast = () => {
    return (
        <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true"
        data-autohide="true">
        <div className="toast-header">
          <img src="..." className="rounded mr-2" alt="..." />
          <strong className="mr-auto">Bootstrap</strong>
          <small className="text-muted">just now</small>
          <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="toast-body">
          See? Just like this.
        </div>
      </div>
    )
}

export default Toast
