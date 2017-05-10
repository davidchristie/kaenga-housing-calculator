// https://gist.github.com/gre/1650294
function easeInOutCubic (t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}

function getDestination (element, origin) {
  return element.getBoundingClientRect().top + origin
}

function nextPosition (origin, destination, elapsed, duration) {
  if (elapsed > duration) return destination
  return origin + (destination - origin) * easeInOutCubic(elapsed / duration)
}

function scrollingToElementId (id) {
  return {
    payload: id,
    type: 'SCROLLING_TO_ELEMENT_ID'
  }
}

function scrollToElement (element, options = {}, callback = () => {}) {
  var duration = options.duration || 800
  var context = options.context || window
  var origin = context.scrollTop || window.pageYOffset
  var destination = getDestination(element, origin)
  var start = null

  var step = function (timestamp) {
    if (!start) start = timestamp
    var elapsed = timestamp - start
    var position = nextPosition(origin, destination, elapsed, duration)
    if (context !== window) {
      context.scrollTop = position
    } else {
      window.scroll(0, position)
    }
    if (elapsed > duration) {
      callback()
    } else {
      window.requestAnimationFrame(step)
    }
  }

  window.requestAnimationFrame(step)
}

export function scrollToElementId (id, options) {
  return (dispatch, getState) => {
    if (id !== getState().scroll.targetId) {
      dispatch(scrollingToElementId(id))
      var element = document.getElementById(id)
      scrollToElement(
        element,
        options,
        () => {
          dispatch(scrollToElementIdComplete(id))
        }
      )
    }
  }
}

function scrollToElementIdComplete (id) {
  return {
    payload: id,
    type: 'SCROLL_TO_ELEMENT_ID_COMPLETE'
  }
}
