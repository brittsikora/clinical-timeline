export default settings =
  //Renderer-specific settings
    {id_col: 'USUBJID'
    ,event_col: 'DOMAIN'
    ,seq_col: 'SEQ'
    ,stdy_col: 'STDY'
    ,endy_col: 'ENDY'
    ,events: null
    ,filters: null
    ,details: null

  //Standard webcharts settings
    ,x: {type: 'linear'
        ,column: 'wc_value'
        ,label: null}
    ,y: {type: 'ordinal' // set in syncSettings()
        ,column: null
        ,label: null
        ,sort: 'earliest'
        ,behavior: 'flex'}
    ,marks: 
        [
            {type: 'line'
            ,per: null // set in syncSettings()
            ,tooltip: null // set in syncSettings()
            ,attributes:
                {'stroke-width': 5
                ,'stroke-opacity': .5}}
        ,
            {type: 'circle'
            ,per: null // set in syncSettings()
            ,tooltip: null // set in syncSettings()
            ,attributes:
                {'fill-opacity': .5
                ,'stroke-opacity': .5}}
        ]
    ,color_dom: null // set in syncSettings()
    ,legend:
        {location: 'top'
        ,legend: 'Event Type'
        ,order: null} // set in syncSettings()
    ,gridlines: 'y'
    ,range_band: 15
    ,margin: {top: 50} // for second x-axis
    ,resizable: true
}