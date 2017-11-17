import clone from '../util/clone';
import { merge } from 'd3';
import arrayOfVariablesCheck from './functions/arrayOfVariablesCheck';
import '../util/number-isinteger';

export default function syncSettings(settings) {
    const syncedSettings = clone(settings);

    if (!(syncedSettings.event_types instanceof Array && syncedSettings.event_types.length))
        delete syncedSettings.event_types;
    syncedSettings.y.column = syncedSettings.id_col;
    syncedSettings.y.grouping = syncedSettings.grouping_initial;
    if (['horizontal', 'vertical'].indexOf(syncedSettings.grouping_direction) === -1)
        syncedSettings.grouping_direction = 'horizontal';

    //Lines (events with duration)
    syncedSettings.marks[0].per = [
        syncedSettings.id_col,
        syncedSettings.event_col,
        syncedSettings.seq_col
    ];
    syncedSettings.marks[0].tooltip =
        `Event: [${syncedSettings.event_col}]` +
        `\nStart Day: [${syncedSettings.stdy_col}]` +
        `\nStop Day: [${syncedSettings.endy_col}]`;
    syncedSettings.marks[0].values = {
        wc_category: [syncedSettings.stdy_col, syncedSettings.endy_col]
    };

    //Circles (events without duration)
    syncedSettings.marks[1].per = [
        syncedSettings.id_col,
        syncedSettings.event_col,
        syncedSettings.seq_col,
        'wc_value'
    ];
    syncedSettings.marks[1].tooltip =
        `Event: [${syncedSettings.event_col}]` + `\nStudy Day: [${syncedSettings.stdy_col}]`;
    syncedSettings.marks[1].values = {
        wc_category: ['DY']
    };

    //Define mark coloring and legend order.
    syncedSettings.color_by = syncedSettings.event_col;

    //Define prop-cased id_unit.
    syncedSettings.id_unitPropCased =
        syncedSettings.id_unit.substring(0, 1).toUpperCase() +
        syncedSettings.id_unit.substring(1).toLowerCase();

    //Handle potential reference_lines inputs.
    if (syncedSettings.reference_lines) {
        if (!(syncedSettings.reference_lines instanceof Array))
            syncedSettings.reference_lines = [syncedSettings.reference_lines];

        syncedSettings.reference_lines = syncedSettings.reference_lines
            .map(referenceLine => {
                const referenceLineObject = {};
                referenceLineObject.studyDay = referenceLine.studyDay || referenceLine;
                referenceLineObject.label =
                    referenceLine.label || `Study Day ${referenceLineObject.studyDay}`;

                return referenceLineObject;
            })
            .filter(referenceLine => Number.isInteger(referenceLine.studyDay));

        if (!syncedSettings.reference_lines.length) delete syncedSettings.reference_lines;
    }

    //Default filters.
    const defaultFilters = [
        { value_col: syncedSettings.id_col, label: syncedSettings.id_unitPropCased },
        { value_col: syncedSettings.event_col, label: 'Event Type' },
        { value_col: syncedSettings.site_col, label: 'Site' }
    ];
    if (syncedSettings.ongo_col)
        defaultFilters.push({ value_col: syncedSettings.ongo_col, label: 'Ongoing?' });
    syncedSettings.filters = arrayOfVariablesCheck(defaultFilters, syncedSettings.filters);

    //Default groupings
    const defaultGroupings = [{ value_col: syncedSettings.site_col, label: 'Site' }];
    syncedSettings.groupings = arrayOfVariablesCheck(defaultGroupings, syncedSettings.groupings);

    //Default ID characteristics.
    const defaultId_characteristics = [{ value_col: syncedSettings.site_col, label: 'Site' }];
    syncedSettings.id_characteristics = arrayOfVariablesCheck(
        defaultId_characteristics,
        syncedSettings.id_characteristics
    );

    //Default details
    const defaultDetails = [
        { value_col: syncedSettings.event_col, label: 'Event Type' },
        { value_col: syncedSettings.stdy_col, label: 'Start Day' },
        { value_col: syncedSettings.endy_col, label: 'Stop Day' },
        { value_col: syncedSettings.seq_col, label: 'Sequence Number' }
    ];
    syncedSettings.details = arrayOfVariablesCheck(defaultDetails, syncedSettings.details);

    //Add settings.filters columns to default details.
    syncedSettings.filters.forEach(filter => {
        if (syncedSettings.details.map(detail => detail.value_col).indexOf(filter.value_col) === -1)
            syncedSettings.details.push(filter);
    });

    //Sync bottom margin with y-axis range band.
    syncedSettings.margin.bottom = syncedSettings.margin.top + syncedSettings.range_band;

    //Participant timeline settings
    syncedSettings.participantSettings = clone(syncedSettings);
    syncedSettings.participantSettings.x.label = '';
    syncedSettings.participantSettings.y.column = syncedSettings.participantSettings.seq_col;
    syncedSettings.participantSettings.y.sort = 'alphabetical-descending';
    syncedSettings.participantSettings.marks[0].per = [
        syncedSettings.participantSettings.event_col,
        syncedSettings.participantSettings.seq_col
    ];
    syncedSettings.participantSettings.marks[1].per = [
        syncedSettings.participantSettings.event_col,
        syncedSettings.participantSettings.seq_col,
        'wc_value'
    ];
    syncedSettings.participantSettings.range_band = syncedSettings.range_band / 2;
    syncedSettings.participantSettings.margin = { left: 25 };

    //Listing settings
    syncedSettings.details_config = syncedSettings.details_config || {
        cols: syncedSettings.details.map(detail => detail.value_col),
        headers: syncedSettings.details.map(detail => detail.label)
    };
    if (!syncedSettings.details_config.hasOwnProperty('cols')) {
        syncedSettings.details_config.cols = syncedSettings.details.map(detail => detail.value_col);
        syncedSettings.details_config.headers = syncedSettings.details.map(detail => detail.label);
    }

    return syncedSettings;
}
