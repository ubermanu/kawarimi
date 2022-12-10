/**
 * Create a visually hidden element that is still accessible to screen readers.
 * Insert the decoy after the target element.
 * Remove the decoy after the focus is lost.
 *
 * @param {HTMLElement} target
 * @returns {HTMLElement}
 */
export default (target) => {
  const decoy = document.createElement('span')
  decoy.setAttribute('tabindex', '-1')
  decoy.setAttribute('style', 'position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap;')
  decoy.setAttribute('data-kawarimi', 'true')

  target.parentNode.insertBefore(decoy, target.nextSibling)
  target.remove()

  decoy.focus()
  decoy.addEventListener('focusout', () => decoy.remove())

  return decoy
}
