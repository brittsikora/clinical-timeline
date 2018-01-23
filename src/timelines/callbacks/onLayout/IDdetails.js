import backButton from './backButton';

export default function IDdetails() {
    //Add ID characteristics.
    this.clinicalTimelines.containers.IDdetails.selectAll('div.characteristic')
        .data(this.config.id_characteristics)
        .enter()
        .append('div')
        .classed('ct-characteristic', true)
        .html(d => `${d.label}: <span id = '${d.value_col}'></span>`);

    //Add back button to return from ID timeline to clinical timelines.
    this.clinicalTimelines.containers.IDdetails.select('#ct-back-button button').on('click', () => {
        backButton.call(this);
    });
}