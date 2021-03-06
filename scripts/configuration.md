The most straightforward way to customize the Clinical Timelines is by using a configuration object whose properties describe the behavior and appearance of the chart. Since the Clinical Timelines is a Webcharts `chart` object, many default Webcharts settings are set in the [settings.js file](https://github.com/RhoInc/clinical-timelines/blob/master/src/defaults/settings.js) as [described below](#webcharts-settings). Refer to the [Webcharts documentation](https://github.com/RhoInc/Webcharts/wiki/Chart-Configuration) for more details on these settings.

In addition to the standard Webcharts settings several custom settings not available in the base Webcharts library have been added to the Clinical Timelines to facilitate data mapping and other custom functionality. These custom settings are described in detail below. All defaults can be overwritten by users.

# Renderer-specific settings
The sections below describe each clinical-timelines setting as of version 1.4.0.

## settings.id_col
`string`

unique identifier variable name

**default:** `"USUBJID"`



## settings.id_unit
`string`

unique identifier unit

**default:** `"participant"`



## settings.id_characteristics
`array`

an array of identifier characteristic variables and associated metadata

**default:** none

### settings.id_characteristics[].value_col
`string`

undefined

**default:** none

### settings.id_characteristics[].label
`string`

undefined

**default:** none



## settings.event_col
`string`

event type variable name

**default:** `"DOMAIN"`



## settings.event_types
`array`

an array of event types displayed initially

**default:** none



## settings.event_highlighted
`string`

initial highlighted event type

**default:** `"null"`



## settings.event_highlight_color
`string`

fill color of highlighted events

**default:** `"black"`



## settings.event_symbols
`array`

an array of event types and the symbols that will represent them

**default:** none

### settings.event_symbols[].events
`array`

an array of event types that will be represented by the specified symbol

**default:** none

### settings.event_symbols[].symbol
`string`

the symbol that will represent the corresponding event types

**default:** none

### settings.event_symbols[].direction
`string`

the direction the symbol points (only applies to triangles)

**default:** none



## settings.filters
`array`

an array of filter variables and associated metadata

**default:** none

### settings.filters[].value_col
`string`

undefined

**default:** none

### settings.filters[].label
`string`

undefined

**default:** none



## settings.groupings
`array`

an array of categorical ID characteristic variables with which to group IDs

**default:** none

### settings.groupings[].value_col
`string`

undefined

**default:** none

### settings.groupings[].label
`string`

undefined

**default:** none



## settings.grouping_initial
`string`

initial ID grouping variable

**default:** `"null"`



## settings.grouping_direction
`string`

grouping annotation placement

**default:** `"horizontal"`



## settings.time_scale
`string`

the time scale on which to plot events

**default:** `"Date"`



## settings.stdt_col
`string`

start date variable name

**default:** `"STDT"`



## settings.endt_col
`string`

end date variable name

**default:** `"ENDT"`



## settings.date_range
`array`

start and stop dates with which to define the x-axis domain and which match settings.date_format

**default:** none



## settings.date_ranges
`array`

start and stop date ranges which populate the time range dropdown

**default:** none

### settings.date_ranges[].domain
`array`

start and stop dates with which to define the x-axis domain and which match settings.date_format

**default:** none

### settings.date_ranges[].label
`string`

a description of the date range

**default:** none



## settings.date_format
`string`

date format of start and stop date variables

**default:** `"%Y-%m-%d"`



## settings.date_display_format
`string`

date format of x-axis

**default:** `"%b %y"`



## settings.stdy_col
`string`

start day variable name

**default:** `"STDY"`



## settings.endy_col
`string`

end day variable name

**default:** `"ENDY"`



## settings.day_range
`array`

start and stop days with which to define the x-axis domain

**default:** none



## settings.day_ranges
`array`

start and stop day ranges which populate the time range dropdown

**default:** none

### settings.day_ranges[].domain
`array`

start and stop days with which to define the x-axis domain

**default:** none

### settings.day_ranges[].label
`string`

a description of the day range

**default:** none



## settings.seq_col
`string`

event type sequence variable name

**default:** `"SEQ"`



## settings.tooltip_col
`string`

hovering over a mark displays a tooltip with the details of the event

**default:** `"TOOLTIP"`



## settings.ongo_col
`string`

ongoing event indicator variable name

**default:** `"ONGO"`



## settings.ongo_val
`string`

ongoing event indicator value

**default:** `"Y"`



## settings.offset_col
`string`

the name of the variable that contains a ranking of vertical position at which to draw a mark

**default:** none



## settings.reference_lines
`array`

an array of reference timepoints and associated descriptions

**default:** none

### settings.reference_lines[].timepoint
`string`

undefined

**default:** none

### settings.reference_lines[].label
`string`

undefined

**default:** none



## settings.transpose_data
`boolean`

by default data are exported as one record per event; this option transposes the data so each even type has two columns: start and end

**default:** `false`



## settings.mark_thickness
`number`

a number that controls the the stroke width of lines and the radius of circles

**default:** `6`



## settings.details
`array`

an array of detail listing variables and associated metadata

**default:** none

### settings.details[].value_col
`string`

undefined

**default:** none

### settings.details[].label
`string`

undefined

**default:** none



## settings.details_config
`object`

a webcharts table settings object

### settings.details_config.cols
`array`

undefined

**default:** none

### settings.details_config.headers
`string`

undefined

**default:** none

### settings.details_config.searchable
`boolean`

undefined

**default:** `true`

### settings.details_config.sortable
`boolean`

undefined

**default:** `true`

### settings.details_config.pagination
`boolean`

undefined

**default:** `true`

### settings.details_config.exportable
`boolean`

undefined

**default:** `true`

# Webcharts settings
The object below contains each Webcharts setting as of version 1.4.0.

```
{    x: {        type: null, // set in syncSettings()        column: 'wc_value',        label: null, // set in syncSettings()        format: null // set in syncSettings()    },    y: {        type: 'ordinal',        column: null, // set in syncSettings()        label: null, // set in syncSettings()        sort: 'By Earliest Event',        behavior: 'flex',        grouping: null // set in syncSettings()    },    marks: [        {            type: 'line',            per: null, // set in syncSettings()            tooltip: null, // set in syncSettings()            attributes: {                'stroke-width': null, // set in syncSettings()            }        },        {            type: 'circle',            per: null, // set in syncSettings()            tooltip: null, // set in syncSettings()            radius: null, // set in syncSettings()            attributes: {                'stroke-width': null, // set in syncSettings()            }        }    ],    colors: [        '#1b9e77',        '#d95f02',        '#7570b3',        '#a6cee3',        '#1f78b4',        '#b2df8a',        '#66c2a5',        '#fc8d62',        '#8da0cb'    ],    color_dom: null, // set in syncSettings()    legend: {        location: 'top',        label: 'Event Type',        order: null, // set in syncSettings()        mark: 'circle'    },    range_band: 35,    margin: {        top: 60,        right: 40    }, // for second x-axis    resizable: false // can't be resizable so the multiples aren't overlapped by their titles}
```