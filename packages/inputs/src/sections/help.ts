import { createSection } from '../compose'

/**
 * Help section that shows help text
 *
 * @public
 */
export const help = createSection('help', () => ({
  $el: 'div',
  if: '$help',
  attrs: {
    id: '$: "help-" + $id',
  },
}))
