import { select } from 'd3';
import drawIDtimeline from '../functions/drawIDtimeline';

export default function legendFilter() {
    //Filter data by clicking on legend.
    const context = this,
        eventTypeFilter = this.filters.filter(filter => filter.col === this.config.event_col)[0], // event type filter object
        eventTypeControl = this.controls.wrap
            .selectAll('.control-group')
            .filter(d => d.description === 'Event Type'), // event type control
        eventTypes = eventTypeControl
            .selectAll('.changer option')
            .sort((a, b) => this.config.color_dom.indexOf(a) - this.config.color_dom.indexOf(b)), // event type options
        legendItems = this.wrap
            .selectAll('.legend-item')
            .classed('ct-button', true)
            .classed(
                'ct-selected',
                d =>
                    eventTypeFilter.val instanceof Array
                        ? eventTypeFilter.val.indexOf(d.label) > -1
                        : true
            )
            .classed('ct-hidden', d => d.label === 'None'); // Remove None legend item; not sure why it's showing up.

    //Add event listener to legend items.
    legendItems.on('click', function(d) {
        const legendItem = select(this), // clicked legend item
            selected = !legendItem.classed('ct-selected'); // selected boolean

        legendItem.classed('ct-selected', selected); // toggle selected class

        const selectedLegendItems = legendItems
            .filter(function() {
                return select(this).classed('ct-selected');
            })
            .data()
            .map(d => d.label); // selected event types

        eventTypes
            .property('selected', false)
            .filter(d => selectedLegendItems.indexOf(d) > -1)
            .property('selected', true); // sync selected options in event type filter with selected legend items

        eventTypeFilter.val = selectedLegendItems; // update filter object
        context.currentEventTypes = selectedLegendItems;

        if (context.selected_id) drawIDtimeline.call(context);
        else context.draw();
    });
}
