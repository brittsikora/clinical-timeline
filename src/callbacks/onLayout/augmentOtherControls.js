import { select } from 'd3';
import defineData from '../functions/defineData';

export default function augmentOtherControls() {
    const context = this,
        otherControls = this.controls.wrap
            .selectAll('.control-group')
            .filter(d => d.type !== 'subsetter');

    //Relabel Y-axis sort options and remove illogical Y-axis grouping options.
    otherControls
        .each(function(d) {
            if (['Y-axis sort', 'Y-axis grouping'].indexOf(d.description) > -1) {
                // Y-axis controls
                const options = select(this).selectAll('option');

                if (d.description === 'Y-axis sort')
                    // Add labels to Y-axis sort.
                    options.property(
                        'label',
                        di => d.relabels[d.values.filter(dii => dii !== 'None').indexOf(di)]
                    );
                else if (d.description === 'Y-axis grouping')
                    // Add variable labels to Y-axis grouping options.
                    options.property(
                        'label',
                        di =>
                            di !== 'None'
                                ? context.config.groupings[
                                      context.config.groupings.map(dii => dii.value_col).indexOf(di)
                                  ].label
                                : 'None'
                    );
            }
        })
        .on('change', function(d) {
            if (d.description === 'X-axis scale') {
                // X-axis controls
                if (context.config.time_scale === 'Study Day') {
                    // Define study day settings and redraw.
                    context.config.x.type = 'linear';
                    context.config.x.label = 'Study Day';
                    context.config.x.format = '1d';
                    context.config.marks[0].tooltip =
                        `Event: [${context.config.event_col}]` +
                        `\nStart Day: [${context.config.stdy_col}]` +
                        `\nStop Day: [${context.config.endy_col}]`;
                    context.config.marks[0].values = {
                        wc_category: [context.config.stdy_col, context.config.endy_col]
                    };
                    context.config.marks[1].tooltip =
                        `Event: [${context.config.event_col}]` +
                        `\nStudy Day: [${context.config.stdy_col}]`;
                    context.config.marks[1].values = {
                        wc_category: ['DY']
                    };
                    const st_detail = context.config.details.filter(
                            detail => detail.value_col === context.config.stdt_col
                        )[0],
                        en_detail = context.config.details.filter(
                            detail => detail.value_col === context.config.endt_col
                        )[0];
                    st_detail.value_col = context.config.stdy_col;
                    st_detail.label = 'Start Day';
                    en_detail.value_col = context.config.endy_col;
                    en_detail.label = 'End Day';
                    defineData.call(context);
                    context.draw();
                } else if (context.config.time_scale === 'Date') {
                    // Define date settings and redraw.
                    context.config.x.type = 'time';
                    context.config.x.label = 'Date';
                    context.config.x.format = context.config.date_format;
                    context.config.marks[0].tooltip =
                        `Event: [${context.config.event_col}]` +
                        `\nStart Date: [${context.config.stdt_col}]` +
                        `\nStop Date: [${context.config.endt_col}]`;
                    context.config.marks[0].values = {
                        wc_category: [context.config.stdt_col, context.config.endt_col]
                    };
                    context.config.marks[1].tooltip =
                        `Event: [${context.config.event_col}]` +
                        `\nStudy Date: [${context.config.stdt_col}]`;
                    context.config.marks[1].values = {
                        wc_category: ['DT']
                    };
                    const st_detail = context.config.details.filter(
                            detail => detail.value_col === context.config.stdy_col
                        )[0],
                        en_detail = context.config.details.filter(
                            detail => detail.value_col === context.config.endy_col
                        )[0];
                    st_detail.value_col = context.config.stdt_col;
                    st_detail.label = 'Start Date';
                    en_detail.value_col = context.config.endt_col;
                    en_detail.label = 'End Date';
                    defineData.call(context);
                    context.draw();
                }
            }
        });
}