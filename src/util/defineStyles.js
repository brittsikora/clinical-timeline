export default function defineStyles() {
    const styles = [

        /***--------------------------------------------------------------------------------------\
          Global styles
        \--------------------------------------------------------------------------------------***/

            '#clinical-timelines .hidden {' +
                '    display: none !important;' +
                '}',
            '#clinical-timelines .highlighted {' +
                '    border: 2px solid black !important;' +
                '    cursor: pointer !important;' +
                '    border-radius: 4px !important;' +
                '    padding: 5px !important;' +
                '    stroke: black;' +
                '    stroke-width: 3px;' +
                '}',

        /***--------------------------------------------------------------------------------------\
          Left and right side containers
        \--------------------------------------------------------------------------------------***/

            '#clinical-timelines > * {' +
                '    display: inline-block;' +
                '    padding: .5%;' +
                '}',
            '#clinical-timelines > #left-side {' +
                '    width: 22%;' +
                '    float: left;' +
                '}',
            '#clinical-timelines > #right-side {' +
                '    width: 75%;' +
                '    float: right;' +
                '}',
            '#clinical-timelines > * > * {' +
                '    width: 100%;' +
                '    padding: 1%;' +
                '    vertical-align: top;' +
                '    border: 1px solid #eee;' +
                '    display: inline-block;' +
                '    margin-bottom: 10px;' +
                '}',


        /***--------------------------------------------------------------------------------------\
          Left side container elements
        \--------------------------------------------------------------------------------------***/

            '#clinical-timelines > #left-side > * {' +
                '}',

          //Annotations
            '#clinical-timelines > #left-side > .annotation {' +
                '    font-size: 16px;' +
                '    text-align: right;' +
                '}',
            '#clinical-timelines > #left-side > .annotation .stats,' +
            '#clinical-timelines > #left-side > .annotation #participant,' +
            '#clinical-timelines > #left-side > .annotation .characteristic span {' +
                '    font-weight: bold;' +
                '}',

          //Controls
            '#clinical-timelines > #left-side > .wc-controls {' +
                '    margin-bottom: 0;' +
                '    clear: left;' +
                '}',
            '#clinical-timelines > #left-side > .wc-controls .control-group {' +
                '    margin-bottom: 5px;' +
                '    display: block;' +
                '    float: right;' +
                '    clear: both;' +
                '}',
            '#clinical-timelines > #left-side > .wc-controls .control-group > * {' +
                '    display: inline-block;' +
                '    vertical-align: top;' +
                '}',
            '#clinical-timelines > #left-side > .wc-controls .control-group .changer {' +
                '    margin-left: 5px;' +
                '}',
            '#clinical-timelines > #left-side > .wc-controls .back-button button {' +
                '    padding: 0 5px;' +
                '    font-size: 14px;' +
                '    float: left;' +
                '    clear: left;' +
                '    margin-top: 5px;' +
                '}',

        /***--------------------------------------------------------------------------------------\
          Right side container elements
        \--------------------------------------------------------------------------------------***/

            '#clinical-timelines > #right-side > * {' +
                '}',

          //Legend
            '#clinical-timelines > #right-side > .wc-chart .legend {' +
                '    display: flex !important;' +
                '    justify-content: center;' +
                '}',
            '#clinical-timelines > #right-side > .wc-chart .legend .legend-title {' +
                '    border-radius: 4px;' +
                '    padding: 5px 7px 3px 4px;' +
                '    border: 2px solid white;' +
                '    margin-right: .25em !important;' +
                '}',
            '#clinical-timelines > #right-side > .wc-chart .legend .legend-item {' +
                '    cursor: pointer;' +
                '    float: left;' +
                '    border-radius: 4px;' +
                '    padding: 4px 7px 3px 4px;' +
                '    border: 2px solid white;' +
                '    margin-right: .25em !important;' +
                '}',
            '#clinical-timelines > #right-side > .wc-chart .legend .legend-item .legend-color-block circle {' +
                '    cx: .55em !important;' +
                '    cy: .55em !important;' +
                '    r: .4em !important;' +
                '}',
            '#clinical-timelines > #right-side > .wc-chart .legend .legend-item:hover {' +
                '    border: 2px solid black;' +
                '}',
            '#clinical-timelines > #right-side > .wc-chart .legend .legend-item.selected {' +
                '    background: lightgray;' +
                '}',

          //Grouping
            '#clinical-timelines > #right-side > .wc-chart .wc-svg .grouping .boundary {' +
                '    stroke: black;' +
                '    stroke-width: 2px;' +
                '}',
            '#clinical-timelines > #right-side > .wc-chart .wc-svg .grouping .annotation {' +
                '    font-size: 24px;' +
                '    font-weight: bold;' +
                '    text-anchor: beginning;' +
                '}',
            '#clinical-timelines > #right-side > .wc-chart .wc-svg .grouping.vertical .annotation {' +
                '    writing-mode: tb-rl;' +
                '}',

          //Y-axis
            '#clinical-timelines > #right-side > .wc-chart .wc-svg .y.axis .tick {' +
                '    cursor: pointer;' +
                '    fill: blue;' +
                '    text-decoration: underline;' +
                '}',

          //Reference lines
            '#clinical-timelines > #right-side > .wc-chart .wc-svg .visible-reference-line {' +
                '    stroke: black;' +
                '    stroke-width: 2px;' +
                '    stroke-dasharray: 2,2;' +
                '}',
            '#clinical-timelines > #right-side > .wc-chart .wc-svg .visible-reference-line.hover {' +
                '    stroke-dasharray: none;' +
                '}',
            '#clinical-timelines > #right-side > .wc-chart .wc-svg .invisible-reference-line {' +
                '    stroke: black;' +
                '    stroke-width: 20px;' +
                '    stroke-opacity: 0;' +
                '}',
            '#clinical-timelines > #right-side > .wc-chart .wc-svg .reference-line-label-box {' +
                '    fill: white;' +
                '    stroke: black;' +
                '    stroke-width: black;' +
                '}',

          //ID timeline
            '#clinical-timelines > #right-side > .wc-small-multiples .wc-chart {' +
                '    width: 100%;' +
                '    padding: 0;' +
                '    border-top: 1px solid black;' +
                '}',
            '#clinical-timelines > #right-side > .wc-small-multiples .wc-chart > * {' +
                '    display: inline-block;' +
                '}',
            '#clinical-timelines > #right-side > .wc-small-multiples .wc-chart .wc-svg {' +
                '    float: left;' +
                '    width: 75%;' +
                '}',
            '#clinical-timelines > #right-side > .wc-small-multiples .wc-chart .wc-chart-title {' +
                '    float: right;' +
                '    text-align: left;' +
                '    font-size: 21px;' +
                '    padding-left: 10px;' +
                '    width: 24%;' +
                '}',

          //Listing
            '#clinical-timelines > #right-side > .wc-chart.wc-table table {' +
                '    display: table;' +
                '    width: 100%;' +
                '}'
        ],
        style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = styles.join('\n');

    document.getElementsByTagName('head')[0].appendChild(style);
}
