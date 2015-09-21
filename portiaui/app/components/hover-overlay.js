import Ember from 'ember';


export default Ember.Component.extend({
    browserOverlays: Ember.inject.service(),

    classNames: ['overlay', 'hover-overlay'],
    classNameBindings: ['viewPortElement::hide', 'hoveredOverlay:hide'],

    backgroundStyle: Ember.computed('color.main', function() {
        var color = this.get('color.main');
        return Ember.String.htmlSafe(color ? `background-color: ${color};` : '');
    }),
    shadowStyle: Ember.computed('color.shadow', function() {
        var color = this.get('color.shadow');
        return Ember.String.htmlSafe(color ? `box-shadow: 0 1px 3px -2px ${color};` : '');
    }),

    willInsertElement() {
        this.get('browserOverlays').addElementOverlay(this);
    },

    willDestroyElement() {
        this.get('browserOverlays').removeElementOverlay(this);
    }
});