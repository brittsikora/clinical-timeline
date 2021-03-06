import { time } from 'd3';

export default function drawTimeRange() {
    const context = this;

    //Add group for time range.
    this.svg.select('.time-range').remove();
    const x_dom = this.x_dom.map(x => (x instanceof Date ? x.getTime() : x));
    const timeRange =
        this.parent.timelines.config.time_scale === 'Date'
            ? this.parent.timelines.date_range.map(dt => dt.getTime())
            : this.parent.timelines.day_range;
    const timeRangeText =
        this.config.time_scale === 'Date'
            ? this.parent.timelines.date_range.map(dt =>
                  time.format(this.parent.timelines.config.date_display_format)(dt)
              )
            : this.parent.timelines.day_range.map(dy => dy.toString());

    if (
        (x_dom[0] !== timeRange[0] || x_dom[1] !== timeRange[1]) &&
        ((timeRange[0] >= x_dom[0] && timeRange[0] <= x_dom[1]) || // left side of time range overlaps x-domain
        (timeRange[1] >= x_dom[0] && timeRange[1] <= x_dom[1]) || // right side of time range overlaps x-domain
            (timeRange[0] <= x_dom[0] && timeRange[1] >= x_dom[1])) // time range fully encompassed x-domain
    ) {
        const timeRangeGroup = this.svg
                .insert('g', '#clinical-timelines .wc-chart .wc-svg .line-supergroup')
                .classed('ct-time-range', true),
            x = this.x(Math.max(timeRange[0], x_dom[0])),
            width = Math.min(this.x(timeRange[1]) - x, this.plot_width - x),
            timeRangeRect = timeRangeGroup
                .append('rect')
                .classed('ct-time-range-rect', true)
                .attr({
                    x: x,
                    y: 0,
                    width: width,
                    height: this.plot_height
                }),
            timeRangeTooltip = timeRangeGroup
                .append('title')
                .text(`${this.config.time_scale} range: ${timeRangeText.join(' - ')}`);
    }
}
